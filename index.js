const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
    client.user.setActivity('ZythronPE');
});

client.on('message', message => {
    if (message.content === 'Hi') {
    	message.reply('Heyo there!');
  	}
});

client.login(process.env.BOT_TOKEN);
