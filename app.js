const {Telegraf} = require('telegraf')
const express = require('express')

const app = express()

const bot = new Telegraf(process.env.TOKEN)


// bot.start(ctx=>{
//     ctx.reply("Bot started")
// })

// bot.command('test',ctx=>{
//     ctx.reply("This is test command")
// })

// app.use(bot.webhookCallback(`/${process.env.TOKEN}`))
// bot.telegram.setWebhook(`${process.env.DOMAIN}:8443/${process.env.TOKEN}`)

app.get("/", (req, res) => {
    res.json({"status": "the bot is running"})
})


const port = process.env.PORT || 3030
app.listen(port , ()=>{
    console.log("Bot is running")
})