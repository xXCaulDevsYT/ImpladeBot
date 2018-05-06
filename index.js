const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity('YouTube');
console.log('Ready!');
});

client.on('message', message => {
    if (message.content === "Hi") {
    	message.reply("Heyo There!");
  	}
});

client.login(process.env.BOT_TOKEN);
