const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
console.log("Ready!");
bot.user.setActivity("Malayman!");
});

client.on('message', message => {
    if (message.content === "Hi") {
    	message.reply("Heyo There!");
  	}
});

client.login(process.env.BOT_TOKEN);
