const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('using a  code for GhostView plugin! | Type $help', {type: 'PLAYING'});
});

client.on('message', msg => {
    if (msg.content === '$help') {
    	msg.reply('**__Commands List__** ```[ $server | $info | $ghostview | $help ]``` **__Updated By__** Zadezter#0207');
  	}
        if (msg.content === 'Zade') {
    	msg.reply('You have called him. Please tell, what do you want to talk about it?');
  	}
        if (msg.content === '$ghostview') {
    	msg.reply('**Download the latest plugin builds on Poggit at:** __http://poggit.pmmp.io/ci/Zadezter/GhostView__ ```---``` **Check all source code what it made by Zadezter at:** __http://github.com/Zadezter/GhostView__');
  	}
        if (msg.content === '$server') {
    	msg.reply('**This is a ZythronPE server! Come and play if you have a time!** ```IP: play.zythronpe.ml | Port: 19132```');
  	}
        if (msg.content === '$info) {
    	msg.reply('**This bot was created on 6 May 2018 by using a Discord.js/Node.js for this function code!** ```---``` **Version**: IMB-12 ```---``` **Owned by** Zadezter#0207');
  	}
});

client.login(process.env.BOT_TOKEN);
