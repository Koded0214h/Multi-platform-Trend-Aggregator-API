import os
from dotenv import load_dotenv
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup ,WebAppInfo
from telegram.ext import Application, ContextTypes, CommandHandler

load_dotenv()
TOKEN = os.getenv("TELEGRAM_API_TOKEN")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🚀 Hello! I'm your test bot.")
    
async def mini(update: Update, context:ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [
            InlineKeyboardButton(
                "Open Mini App",
                web_app=WebAppInfo(
                    url="https://koded0214h.github.io/Web-Calculator/"
                ),
            )
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("👉 Click below to open the mini app:", reply_markup=reply_markup)

    
def main():
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("mini", mini))
    app.run_polling()
    
if __name__ == "__main__":
    main()