const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = '$';


bot.on('ready', ()=> {
    bot.user.setPresence({game: {name: `Shadow Boxing | V1`}});
    console.log('Bot Ready');
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "join")
    {
        var join_embed = new Discord.RichEmbed()
            .setColor('#4A1A2C')
            .addField('Fondateur :', 'Zadyx')
            .addField('Lien :', 'https://discordapp.com/oauth2/authorize?client_id=389344876480823298&permissions=8&scope=bot')
            .setImage(message.author.avatarURL)
        message.channel.sendEmbed(join_embed);
        console.log("join du bot envoyée !");
    }
    if (message.content === prefix + "anno")
    {
        var lol = new Discord.RichEmbed()
            .setAuthor('Création de ' + (message.member.displayName) + ":", (message.author.avatarURL))
            .setTitle("Lien Youtube")
            .setURL("https://www.youtube.com/watch?v=yA_W-7ivWwE")
            .setDescription("Lien de la vidéo de présentation des CC | ``Prix du Pack : 2e``")
            .addBlankField() 
            .addField("Infos de l'expéditeur:", "Pack de 4 CC pour: Trailer &  Courts métrages", false)
            .addBlankField() 
            .addField('Plugin nécessaire', "Magic Bullet", false)
            .setThumbnail(message.author.avatarURL)
            .setColor('#2BA812')
            .setFooter('Zadyx')
            .setTimestamp();
        message.channel.sendEmbed(lol);
        console.log("Commane du bot envoyée !");
    }
});

