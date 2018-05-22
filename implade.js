const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('+help | 121 Guilds', {type: 'WATCHING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === '+help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('× Help Menu ×')
      .setDescription('Here Is a list of Commands & there Functions')
      .addField('+help', 'Shows Commands For The Bot')
      .addField('+ip', 'This feature is currently in Development')
      .addField('+dcinvite', 'The Invite link is under Development')
      .addField('+info', 'Shows some information about the bot')
      .addField('+github', 'A Link to the Bot Creators GitHub')
      .addField('+status', 'Shows The Bots Status')
      .setColor('#ff00b1')

      return msg.channel.send(helpembed);
    };

        if (msg.content === 'Zarky') {
    	msg.channel.send('You called him. Please tell, what do you want to talk about?');
    } else
        if (msg.content === '+ips') {
    	msg.channel.send('**Strikefac.ramshard.net** `19132`');
    } else
        if (msg.content === '+server') {
    	msg.channel.send('+ip');
    } else
        if (msg.content === '+info') {
        let infoembed = new Discord.RichEmbed()
       .setTitle('Information on the Bot')
       .setDescription('Shows a list of information on the bot')
       .addField('Bot Maker', 'ZarkysMC-YT#7314')
       .addField('Created on', 'may 17th 2018')
       .setColor('#ff00b1')

      return msg.channel.send(infoembed);
    };
    
        if(msg.content === "+kick") {
        let member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        member.kick(reason);
    }else
        if (msg.content === '+status') {
        let verembed = new Discord.RichEmbed()
       .setTitle('Status for the bot')
       .setDescription('Bot Running using Discord.js')
       .addField('Version', 'BT-0.1.0 Stable')
       .addField('Ping', '325.03')
       .setColor('#ff00b1')

      return msg.channel.send(verembed);
    };

        if (msg.content === '+ipss') {
        let treembed = new Discord.RichEmbed()
       .setTitle('StrikeNPE IP List')
       .setDescription('A List Of StrikeNPEs Current IPs')
       .addField('Minigames', 'StrikeNPEMG.tk 19132')
       .addField('OP Factions', 'StrikeNPE.tk 19132')
       .setColor('#ff00b1')

      return msg.channel.send(treembed);
    };
    
        if (msg.content === '+avatar') {
        msg.channel.send('message.author.avatarURL');
    } else
        if (msg.content === '+github') {
        msg.channel.send('```Follow Us On Github``` **https://github.com/strikedevelopment**');
  }

});

client.login(process.env.BOT_TOKEN);
