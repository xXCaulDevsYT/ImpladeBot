const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity('https://github.com/ImpladeDeveloped/ImpladeBot', {type: 'ZythronPE'});
});

client.on('message', message => {
    if (message.content === 'Hi') {
    	message.reply('Heyo there!');
  	}
});

client.login(process.env.BOT_TOKEN);
