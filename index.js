const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity('Malayman is online!', { type: 'WATCHING' });
client.user.setStatus("dnd");
});

client.on('message', message => {
    if (message.content === "Hi") {
    	message.reply("Heyo There!");
  	}
});

client.login(process.env.BOT_TOKEN);
