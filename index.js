
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Malayman is online!', {type: 'PLAYING'});
});

client.on('message', msg => {
    if (msg.content === 'Hi') {
    	msg.reply('Heyo, buddy!');
  	}
        if (msg.content === 'Zade') {
    	msg.reply(':Zade_Is_Malayman: What do you want talking about to him? :You_Wat_Ah:');
  	}
        if (msg.content === 'Bye') {
    	msg.reply('Okay, bye!');
  	}
});

client.login(process.env.BOT_TOKEN);
