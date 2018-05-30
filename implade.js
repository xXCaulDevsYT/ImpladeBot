const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('using Implactor vIR-1.2.3.1', {type: 'PLAYING'});
});

client.on('message', async message => {
    if (message.author.bot) return;

    if (message.content === '+help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('- StrikeBot | Commands -')
      .setDescription('Some of commands only work through admin permisions')
      .addField('+help', 'StrikeBot command list!')
      .addField('+media', 'Check our media')
      .addField('$dcinvite', 'Join our developer team on Discord server!')
      .addField('+otherbots', 'List of our bots made by ZarkysMC#7314')
      .addField('$picture', 'Take your picture from your Discord profile!')
      .addField('+ban', 'Bans a user from the server')
      .addField('+info', 'See information about this cra-z bot')
      .addField('$imc', 'ImpladeMC Discord Server. Minecraft BE or Win10 players can join!')
      .addField('$friends', 'Zadezter put all of his friend list in command!')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
    };

    if (message.content === '+ban') {
      let implactorembed = new Discord.RichEmbed()
      .setTitle('Ban')
      .setDescription('Requires > Admin Permisions')
      .setColor('#FFFF00')
      .addField('Cooldown', '3 Seconds')
      .addField('Usage', '+ban (@user) (time) (reason)')
      .setFooter(`Command Requires Premium`)
      return message.channel.send(implactorembed);
    };

    if (message.content === '+media') {
      let findembed = new Discord.RichEmbed()
      .setTitle('Check our latest updates in these websites!')
      .addField('YouTube', 'https://www.youtube.com/emeraldassasinplayz')
      .addField('Donate', 'https://paypal.me/caulden')
      .addField('Website', 'http://github.com/StrikeDevelopment')
      .setColor('#FFFF00')
      return message.channel.send(findembed);
    };

    if (message.content === '+info') {
      let botinfoembed = new Discord.RichEmbed()
      .setTitle('StrikeBot - Info')
      .setDescription('All of these version and status is on our info')
      .addField('Version', 'PoopyAss 1.0')
      .addField('This Bot Is Running On', 'https://glitch.com')
      .addField('Bot was created on', '29 May 2018')
      .setFooter(`Bot made by ZarkysMC#7314`)
      return message.channel.send(botinfoembed);
    };

    if (message.content === '+otherbots') {
      let serverenemyembed = new Discord.RichEmbed()
      .setTitle('[ OtherBots ]')
      .setDescription('Other bots by ZarkysMC#7314 To Choose pages do +otherbots (page#)')
      .addField('GalacticBot', 'A Multi Purpose Intergallactic Space Moderation , Casino , Utility Bot')
      .addField('LevelCord', 'A Ultimate Discord message Leveling Bot With features such as Achievements , Moderation Commands , NSFW , A Mighty Report System , Profiling , MiniGames , Ultility , Casino , Fun Bot!')
      .addField('iPHP', 'A Multi purpose PHP Code / Script teaching bot for those who wanna learn to code PHP!')
      .setColor('RANDOM')
      .setFooter(`Message Requested by ${message.author.tag} | Page 1/2`)
      return message.channel.send(serverenemyembed);
    };

    if (message.content === '+otherbots 2') {
      let githubembed = new Discord.RichEmbed()
      .setTitle('[ OtherBots ]')
      .addField('BTK Clan', 'An Advanced Custom bot that creates custom emojis')
      .setDescription('All these bots are our open bots others are down or unfinished')
      .setColor('RANDOM')
      return message.channel.send(githubembed);
    };

    if (message.content === '+invite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('CyborgBots - Discord Server Team')
      .addField('Click here to join!', '----- N/A -----')
      .setDescription('Sorry but this command is under a few mighty updates')
      return message.channel.send(dcinviteembed);
    };
    
   if (message.content === '+profile') {
     let pictureembed = new Discord.RichEmbed()
     .setTitle('Heres Your Profile Picture!')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL + "?size=2048") 
     .setFooter(`Requested by ${message.author.tag} | Random Command!`)
     return message.channel.send(pictureembed)
   };
   
   if (message.content === '!imperial') {
      let imcembed = new Discord.RichEmbed()
      .setTitle('ImperialMC - MC:BE Server')
      .addField('Below is our IP & Port', 'Play.Imperior-MC.Net | 19132')
      .setDescription('Join our hub / lobby to jump into our portals into adventurous Gamemodes like , HCF , or FactionsOP , or even KitPvP , Our most raved Gamemode is our PrisonsOP Server , New Available Mine Is Mine PvP Very Attractive To Players!')
      .setFooter(`Players Online At Hub ( 121 )`)
      return message.channel.send(imcembed);
    };   
    
    if (message.content === '!credits') {
      let imcembed = new Discord.RichEmbed()
      .setTitle('[ Credits ]')
      .setDescription('This Section is Credits To All The Helpers')
      .addField('Zadezter', 'For the Bots Main Code')
      .addField('GalacticBot', 'For The Embed Message Coloring')
      return message.channel.send(imcembed);
    };   
});

client.login(process.env.BOT_TOKEN);
