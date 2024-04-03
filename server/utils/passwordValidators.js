function validatePassword(password) {
  // Regular expression for validating password
  // At least one uppercase letter, one lowercase letter, one digit, one special character, and 8 characters total
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

module.exports = validatePassword;
