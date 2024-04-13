export const validatePhone = (phone) => {
  return phone.length === 12 && /^\+?[0-9]+$/.test(phone);
}