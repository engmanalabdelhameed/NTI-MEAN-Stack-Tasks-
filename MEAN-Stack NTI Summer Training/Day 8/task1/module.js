export const APP_NAME = "My App";

export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatCurrency(amount) {
  return `${amount.toFixed(2)}`;
}

const logger = {
  log(message) {
    console.log(`${message}`);
  },
  error(message) {
    console.error(`${message}`);
  }
};

export default logger;