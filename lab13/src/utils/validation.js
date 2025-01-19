/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid, false otherwise
 */
export const isValidEmail = (email) => {
  if (!email) return false;

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Additional checks
  const trimmedEmail = email.trim();
  const hasValidLength = trimmedEmail.length <= 254;
  const hasValidFormat = emailRegex.test(trimmedEmail);
  const hasValidParts = trimmedEmail
    .split("@")
    .every((part) => part.length > 0);

  return hasValidLength && hasValidFormat && hasValidParts;
};
