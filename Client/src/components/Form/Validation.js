export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  export function validatePassword(password) {
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    return passwordRegex.test(password);
  }