// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'ZythronPE on Minecraft!'});
});

client.on('message', message => {
    if (!msg.content.startsWith(process.env.PREFIX) || !message.guild) return;
    const command = message.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = message.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    if (message.content === 'Hi') {
    	message.reply('Heyo there!');
  	}
});

client.login(process.env.TOKEN);
