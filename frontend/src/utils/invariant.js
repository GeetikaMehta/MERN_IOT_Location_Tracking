/**
 * Throws an error if the condition is false
 * @param {any} value - The value to check
 * @param {string} [message] - Optional error message
 * @throws {Error} If the value is false, null, or undefined
 */
export function invariant(value, message = 'Invariant failed') {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message);
  }
}

/**
 * Throws an error if the condition is true
 * @param {any} value - The value to check
 * @param {string} [message] - Optional error message
 * @throws {Error} If the value is true
 */
export function invariantFalse(value, message = 'Invariant failed') {
  if (value === true) {
    throw new Error(message);
  }
} 