import requests
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes

TOKEN = "7682580304:AAG5oHhpewxltvPiin_iyNTAci4qmIVXstI"
API_URL = "http://127.0.0.1:8000/api/v1/trends/"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🚀 Hello! I’m your test bot.")

async def ping(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("pong 🏓")
    
async def trends(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        
        args = context.args
        platform = args[0].lower() if args else None
        limit = int(args[1]) if len(args) > 1 else 8
        url = API_URL
        
        if platform:
            url += f"?platform={platform}"
        
        response = requests.get(url)
        data = response.json().get("results", [])
        
        if not data:
            await update.message.reply_text("⚠️ No trends available right now.")
            return
        
        reply = f"🔥 Top {platform or 'All'} Trends:\n\n"
        for item in data[:limit]:
            reply += f"📌 {item['platform']}: {item['title']}\n"
            if item['url']:
                reply += f"🔗 {item['url']}\n"
            reply += "\n"
            
        await update.message.reply_text(reply)
    
    except Exception as e:
        await update.message.reply_text(f"❌ Error fetching trends: {e}")

def main():
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("ping", ping))
    app.add_handler(CommandHandler("trends", trends))
    app.run_polling()

if __name__ == "__main__":
    main()
