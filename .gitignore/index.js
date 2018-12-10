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








exports.run = (client, message, args, tools) => {

    var images = ["https://i.imgur.com/fm49srQ.gif", "https://i.imgur.com/o2SJYUS.gif", "https://i.imgur.com/Agwwaj6.gif", "https://i.gifer.com/cCX.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vgxCdD_ojfyfBGdZPeei11Hm7cK3zrPJTcsTYZ9Tl-dsA7upzw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPZp5heqxYIWj0l1G0KDC3o9YqJvmAG2FqP6n1BSVGwO5pnSMgg", "https://pa1.narvii.com/6067/68a2bb5829d993b3362a37dce55caa9c0949af6c_hq.gif", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> slapped <@${message.author.id}>.. They might have issues!`, {
            embed: sadEmb
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> slapped ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "slap"
}



