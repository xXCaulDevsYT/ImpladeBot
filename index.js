
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Mobile Legends: Bang Bang', {type: 'PLAYING'});
});

client.on('message', msg => {
    if (msg.content === 'Hi') {
    	msg.reply('Heyo, buddy!');
  	}
        if (msg.content === 'Zade') {
    	msg.reply('What do you want talking about to him?');
  	}
        if (msg.content === 'Bye') {
    	msg.reply('Okay, bye!');
  	}
        if (msg.content === 'Server') {
    	msg.reply('**This is ZythronPE server!** ```IP: play.zythronpe.ml | Port: 19132```');
  	}
        if (msg.content === 'nub') {
    	msg.reply('Shut up! You are too noob actually!');
  	}
        if (msg.content === 'noob') {
    	msg.reply('Shut up! You are too noob actually!');
  	}
        if (msg.content === 'DM') {
    	msg.reply('Okay? Go DMs!');
  	}
        if (msg.content === 'Noob') {
    	msg.reply('Shut up! You are too noob actually!');
  	}
        if (msg.content === 'Nub') {
    	msg.reply('Shut up! You are too noob actually!');
  	}
});

client.login(process.env.BOT_TOKEN);
