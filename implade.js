const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('+help | 1,121 Users', {type: 'STREAMING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === '+help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('StrikeBot Commands List')
      .setDescription('There is available commands for this bot on list!')
      .addField('+help', 'Bot commands list!')
      .addField('+ip', 'Our Servers IP')
      .addField('+dcinvite', 'Join our developer team on Discord server!')
      .addField('+info', 'Bot Information')
      .addField('+github', 'CaulfergiYTs Github Team!')
      .addField('+ver', 'Bot Server Status')
      .setColor('#FFFF08')

      return msg.channel.send(helpembed);
    };
    
        if (msg.content === 'Zarky') {
    	msg.channel.send('You called him. Please tell, what do you want to talk about?');
    } else
        if (msg.content === '+ip') {
    	msg.channel.send('**Strikefac.ramshard.net** `19132`');
    } else
        if (msg.content === '+server') {
    	msg.channel.send('+ip');
    } else
        if (msg.content === '+info') {
        let infoembed = new Discord.RichEmbed()
       .setTitle('StrikeBot Information')
       .setDescription('This bot was created on 17 May 2018 as a normal bot!')
       .addField('× Bot Creator ×', 'ZarkysMC-YT#7314')
       .addField('× YouTube ×', 'https://youtube.com/emeraldassasinplayz')
       .setColor('#FFFF08')

      return msg.channel.send(infoembed);
    };
    
        if (msg.content === '+ver') {
        let verembed = new Discord.RichEmbed()
       .setTitle('Bot Server Status')
       .setDescription('StrikeBot is running online with using a language code on Discord.js')
       .addField('Version', 'IB-0.01')
       .addField('Bot Hosted By!', 'PlasmaHosting LLC')
       .setColor('#FFFF08')

      return msg.channel.send(verembed);
    };
    
        if (msg.content === '+dcinvite') {
        msg.channel.send('Command Error -(require:Admin+Higher)!');
    } else
        if (msg.content === '+github') {
        msg.channel.send('**This is CaulsDeveloped team on Github!** Tap this link: http://github.com/xXCaulDevsYT');
  }

});

client.login(process.env.BOT_TOKEN);
