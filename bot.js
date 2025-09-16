const TelegramBot = require("node-telegram-bot-api");
const diseases = require("./disease"); // your diseases data

const token = "8274250861:AAEn3GlUGvz-nbmh4A8dYdq41xRNGK4halk";
const bot = new TelegramBot(token, { polling: true });

// Handle polling errors
bot.on("polling_error", (err) => console.error(err));
console.log("🤖 Bot is running...");

// ✅ Handle /start command separately
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "👋 Welcome! Send a disease name or select one:\n\n" +
      "👉 Malaria\n" +
      "👉 Dengue\n" +
      "👉 Cholera\n" +
      "👉 COVID-19\n" +
      "👉 Tuberculosis\n" +
      "👉 Typhoid\n" +
      "👉 Hepatitis B\n" +
      "👉 Pneumonia\n" +
      "👉 Asthma\n" +
      "👉 Influenza\n" +
      "👉 Migraine\n" +
      "👉 Arthritis\n" +
      "👉 Kidney Stones\n" +
      "👉 Anemia\n"
  );
});

// ✅ Handle any message (disease search)
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.trim().toLowerCase();

  // Skip /start here (already handled above)
  if (text === "/start") return;

  try {
    const disease = diseases.find((d) => d.name.toLowerCase() === text);

    if (!disease) {
      return bot.sendMessage(
        chatId,
        "⚠️ Sorry, I don't have information about: " + text
      );
    }

    // Send disease info + image
    await bot.sendPhoto(chatId, disease.image, {
      caption:
        `🦠 *${disease.name}*\n\n` +
        `📝 *Symptoms:* ${disease.symptoms}\n` +
        `🔎 *Diagnosis:* ${disease.diagnosis}\n` +
        `⚡ *Causes:* ${disease.causes}`,
      parse_mode: "Markdown",
    });
  } catch (err) {
    console.error("Error:", err);
    bot.sendMessage(chatId, "❌ Something went wrong. Try again.");
  }
});
