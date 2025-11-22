export const API_URL =
  (import.meta as any)?.env?.VITE_API_URL ||
  ((import.meta as any)?.env?.DEV
    ? "/api/send"
    : "https://onefund-application-receiver-bot.onrender.com/api/send");
