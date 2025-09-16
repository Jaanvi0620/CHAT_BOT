# CHAT_BOT
STEP 1. Install the nodejs

Check with:
node -v
npm -v

STEP 2. Create your project folder
mkdir chatBot
cd chatBot

STEP 3. Initialize Node project
npm init -y

STEP 4. Install dependencies
npm install node-telegram-bot-api
 

STEP 5. Create files
bot.js → main bot code
disease.js →  diseases data (array of objects with name, symptoms, causes, diagnosis, image).

STEP 6. Run the bot
node bot.js

You should see:

🤖 Bot is running...

Step 7. Open Telegram

Find your bot (Helping_ChatBot)

Type /start

Then type any disease name (e.g., Malaria)
