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
            .setURL("https://www.youtube.com/watch?v=JFacyoYJcC8")
            .setDescription("Lien de la vidéo de présentation des CC | ``Prix du Pack : Gratuit``")
            .addBlankField() 
            .addField("Infos de l'expéditeur:", "Pack de 4 CC pour: Courts métrages style Vintage", false)
            .addBlankField() 
            .addField('Plugin nécessaire', "Magic Bullet", false)
            .setThumbnail("https://imgur.com/2O2gxbJ")
            .setColor('#2BA812')
            .setFooter((message.member.displayName))
            .setTimestamp();
        message.channel.sendEmbed(lol);
        console.log("Commane du bot envoyée !");
    }
});




bot.on('message', message => {
    if (message.content === prefix + "changes")
    {
        var changes = new Discord.RichEmbed()
            .setAuthor('Modifications de ' + (message.member.displayName) + ":", (message.author.avatarURL))
            .setTitle("Color Correction:")
            .setDescription("Les 2 Packs sont finit: il y en a un gratuit et un payant.")
            .addBlankField() 
            .setThumbnail("https://imgur.com/2O2gxbJ")
            .setColor('0xff80ff')
            .setFooter((message.member.displayName))
            .setTimestamp();
        message.channel.sendEmbed(changes);
        console.log("Commane du bot envoyée !");
    }
});


bot.on('message', message => {
    if (message.content === prefix + "ex")
    {
        var ex = new Discord.RichEmbed()
            .setAuthor('Création de ' + (message.member.displayName) + ":", (message.author.avatarURL))
            .setTitle("Lien Youtube")
            .setURL("https://www.youtube.com/watch?v=Ac-Ty2VAh7A")
            .setDescription("Vidéo en non répertoriée, Youtube sert juste d'hébergeur pour vous montrer")
            .addBlankField() 
            .addField("Infos de l'expéditeur:", "Trailer pour CybeRP réalisé en 2jours environ", false)
            .addBlankField() 
            .addField('Logiciels utilisés:', "SVP & AE", false)
            .setThumbnail("https://imgur.com/2O2gxbJ") 
            .setColor('#2BA812')
            .setFooter((message.member.displayName))
            .setTimestamp();
        message.channel.sendEmbed(ex);
        console.log("Commane du bot envoyée !");
    }
});

