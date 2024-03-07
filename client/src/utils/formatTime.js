export const formatTime = (dateString) => {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${hours}:${minutes}`;
};

// Helper function to pad single-digit numbers with a leading 0
const padZero = (number) => number.toString().padStart(2, "0");
