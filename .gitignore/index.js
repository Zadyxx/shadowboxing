const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = '$';


bot.on('ready', ()=> {
    bot.user.setPresence({ game: { name: 'Shadow Boxing | V1', type: 1 } })
    console.log('Bot Ready');
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "join")
    {
        var join_embed = new Discord.RichEmbed()
            .setColor('#4A1A2C')
            .addField('Fondateur :', 'Zadyx')
            .addField('Lien :', 'https://discordapp.com/api/oauth2/authorize?client_id=520949108404650013&permissions=8&scope=bot')
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
            .setThumbnail("https://i.imgur.com/2O2gxbJ.jpg")
            .setColor('#2BA812')
            .setFooter((message.member.displayName))
            .setTimestamp();
        message.channel.sendEmbed(lol);
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
            .setThumbnail("https://i.imgur.com/2O2gxbJ.jpg") 
            .setColor('#2BA812')
            .setFooter((message.member.displayName))
            .setTimestamp();
        message.channel.sendEmbed(ex);
        console.log("Commane du bot envoyée !");
    }
});


const uneCommande = '$sug '

bot.on('message', message => {
  if (message.content.startsWith(uneCommande)) {
    const str = message.content.substring(uneCommande.length)
    let premier = new Discord.RichEmbed()
    .setAuthor('Merci pour ton idée/Suggestion ' + (message.member.displayName) + " !", (message.author.avatarURL))
    .setDescription("=========================================")
    .setColor("#15f153")
    .addBlankField()
    .addField("Suggestion:", str)
    .setThumbnail((message.author.avatarURL)) 
    .setFooter((message.member.displayName))
    .setTimestamp();
    let reportEmbed = new Discord.RichEmbed()
    .setAuthor('Idée de: ' + (message.member.displayName), (message.author.avatarURL))
    .setDescription("=========================================")
    .setColor("#15f153")
    .addBlankField() 
    .addField("Suggestion:", str)
    .setThumbnail((message.author.avatarURL)) 
    .setFooter((message.member.displayName))
    .setTimestamp();
    const reportschannel = message.guild.channels.find(`name`, "💌-boite-à-idées");
    message.delete().catch(O_o=>{});
    message.channel.sendEmbed(premier);
    reportschannel.sendEmbed(reportEmbed);
  }
});


const changes = '$mod '

bot.on('message', message => {
  if (message.content.startsWith(changes)) {
    const str = message.content.substring(changes.length)
    let modifEmbed = new Discord.RichEmbed()
    .setAuthor((message.member.displayName), (message.author.avatarURL))
    .setColor("0xff80ff")
    .addField((message.member.displayName) + " a effectué des modifications sur un de ses Travaux", "=========================================")
    .addBlankField()
    .addField("Modification(s):", str)
    .setThumbnail("https://i.imgur.com/2O2gxbJ.jpg")
    .addBlankField()
    .setFooter((message.member.displayName))
    .setTimestamp();
    message.delete().catch(O_o=>{});
    message.channel.sendEmbed(modifEmbed);
  }
});

const annonce = '$anno '

bot.on('message', message => {
  if (message.content.startsWith(annonce)) {
    const str = message.content.substring(annonce.length)
    let annoEmbed = new Discord.RichEmbed()
    .setAuthor((message.member.displayName), (message.author.avatarURL))
    .setColor("#eb233b")
    .addField("Annonce de " + (message.member.displayName), "=========================================")
    .addBlankField()
    .addField("Message: ", str)
    .setThumbnail("https://cdn4.iconfinder.com/data/icons/green-shopper/1055/attention.png")
    .addBlankField()
    .setFooter((message.member.displayName))
    .setTimestamp();
    message.delete().catch(O_o=>{});
    message.channel.sendEmbed(annoEmbed);
  }
});



bot.on('message', message => {
  if (message.content === prefix + "part") {
    let partEmbed = new Discord.RichEmbed()
    .setTitle("Shadow Bowing", "https://i.imgur.com/HXWzHPF.jpg")
    .setURL('https://discordapp.com/api/oauth2/authorize?client_id=520949108404650013&permissions=8&scope=bot')
    .setColor("#15f153")
    .setDescription("=========================================")
    .addBlankField()
    .addField("Nos partenaires: ", "**River Valley, CybeRP**")
    .addBlankField()
    .addField("Liens: ", "Merci d'utiliser la commande '$l serveur', par exemple: '$l CybeRP'")
    .setThumbnail("https://ak5.picdn.net/shutterstock/videos/22912705/thumb/6.jpg")
    .addBlankField()
    .setFooter("Shadow Bowing | Bot Version 1.0.0")
    .setTimestamp();
    message.delete().catch(O_o=>{});
    message.channel.sendEmbed(partEmbed);
  }
});


bot.on('message', message => {
  if (message.content === prefix + "l CybeRP") {
    let cybeEmbed = new Discord.RichEmbed()
    .setAuthor("Shadow Bowing", "https://i.imgur.com/HXWzHPF.jpg")
    .setTitle("CybeRP")
    .setURL('https://discord.gg/YAGd7Te')
    .setColor("#15f153")
    .setDescription("=========================================")
    .addBlankField()
    .setThumbnail("https://ak5.picdn.net/shutterstock/videos/22912705/thumb/6.jpg")
    .setFooter("Shadow Bowing | Bot Version 1.0.0")
    .setTimestamp();
    message.delete().catch(O_o=>{});
    message.channel.sendEmbed(cybeEmbed);
  }
});






