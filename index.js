const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://github.com/ImpladeDeveloped/ImpladeBot', {type: 'ZythronPE'});
});

client.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX) || !message.guild) return;
    const command = message.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = message.content.split(' ').slice(1).join(' ');
    if (command === 'guide') return message.channel.send('https://github.com/ImpladeDeveloped/ImpladeBot');
    else if (command === 'invite') return message.channel.send(process.env.INVITE);
});

client.login(process.env.TOKEN);
