#include <WiFi.h>
#include <HTTPClient.h>
#include <TinyGPS++.h>
#include <HardwareSerial.h>
#include <ArduinoJson.h>

// WiFi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// Server details
const char* serverUrl = "http://your-server.com/api/location/update";
const char* deviceToken = "YOUR_DEVICE_TOKEN";

// Pin definitions
const int EMERGENCY_BUTTON_PIN = 2;  // GPIO pin for emergency button
const int BATTERY_LEVEL_PIN = 34;    // GPIO pin for battery level reading

// GPS module
HardwareSerial GPSSerial(1);  // Use Serial1 for GPS
TinyGPSPlus gps;

// Variables
bool isEmergency = false;
unsigned long lastLocationUpdate = 0;
const unsigned long LOCATION_UPDATE_INTERVAL = 30000;  // 30 seconds

void setup() {
  Serial.begin(115200);
  GPSSerial.begin(9600, SERIAL_8N1, 16, 17);  // RX, TX pins for GPS

  // Initialize emergency button
  pinMode(EMERGENCY_BUTTON_PIN, INPUT_PULLUP);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected to WiFi");
}

void loop() {
  // Check emergency button
  if (digitalRead(EMERGENCY_BUTTON_PIN) == LOW) {
    isEmergency = true;
    sendLocationUpdate(true);
    delay(1000);  // Debounce
  }

  // Read GPS data
  while (GPSSerial.available() > 0) {
    if (gps.encode(GPSSerial.read())) {
      if (gps.location.isValid()) {
        // Send location update periodically
        if (millis() - lastLocationUpdate >= LOCATION_UPDATE_INTERVAL) {
          sendLocationUpdate(false);
          lastLocationUpdate = millis();
        }
      }
    }
  }

  // Check if GPS is working
  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("No GPS detected");
    while(true);
  }
}

void sendLocationUpdate(bool emergency) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("Device-Token", deviceToken);

    // Create JSON document
    StaticJsonDocument<200> doc;
    doc["coordinates"]["latitude"] = gps.location.lat();
    doc["coordinates"]["longitude"] = gps.location.lng();
    doc["locationName"] = getLocationName(gps.location.lat(), gps.location.lng());
    doc["isEmergency"] = emergency;
    doc["batteryLevel"] = getBatteryLevel();
    doc["signalStrength"] = WiFi.RSSI();

    String jsonString;
    serializeJson(doc, jsonString);

    int httpResponseCode = http.POST(jsonString);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("HTTP Response code: " + String(httpResponseCode));
      Serial.println("Response: " + response);
    } else {
      Serial.println("Error sending HTTP request");
    }

    http.end();
  }
}

String getLocationName(float lat, float lng) {
  // TODO: Implement reverse geocoding
  // For now, return coordinates as string
  return String(lat, 6) + ", " + String(lng, 6);
}

int getBatteryLevel() {
  // Read battery level from ADC
  int rawValue = analogRead(BATTERY_LEVEL_PIN);
  // Convert to percentage (assuming 3.3V reference and 4.2V max battery voltage)
  int percentage = map(rawValue, 0, 4095, 0, 100);
  return constrain(percentage, 0, 100);
} 