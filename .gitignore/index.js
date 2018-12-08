const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = '$';


bot.on('ready', ()=> {
    bot.user.setPresence({game: {name: `Shadow Boxing | V1`}});
    console.log('Bot Ready');
});



bot.on('message', message => {
    if (message.content === 'bonjour'){
        message.reply('Bonjour !');
    }
});

bot.on('message', message => {
    if (message.content === 'salut'){
        message.reply('Salut !');
    }
});

bot.on('message', message => {
    if (message.content === 'jtm'){
        message.reply('MWA AUSSI +_+ !');
    }
});


bot.on('message', message => {
    if (message.content === prefix + '-nsfw'){
        var member = 
        member.addRole(member.guild.roles.find('name', 'nsfw'));
    }
});


bot.on('message', message => {
    if (message.content === 'cc'){
        message.reply('Cc !');
    }
});

bot.on('message', message => {
    if (message.content === 'slt'){
        message.reply('Slt !');
    }
});

bot.on('channel', channel => {
    if (channel.content === 'cc'){
        channel.get.send('Cc !');
    }

});


bot.on('channel', channel => {
    if (channel.content === PREFIX + 'ban'){
        message.guild.ban(message.mentions.users.first());
    }
});


// message.guild.ban(message.mentions.users.first());

























bot.on("message", message => {
    if(message.content[0] === prefix) {
        let spliteMessage = message.content.split(' ');
        if (spliteMessage [0] === "$hell") {
            message.channel.send('world');
            message.author.createDM().then(channel =>{
                channel.send('world$');
            }).catch(console.error);
            bot.channels("389380368710500354").send("Commande de l'utilisateur :" + message.author.username);
        }
        else if (spliteMessage[0] === "$commands") {
            if (spliteMessage.length === 2) {
                message.channel.send('Le paramètre' + spliteMessage[1]);
            }
            else
                message.reply('Problème dans les paramètres');
        }
        else if (spliteMessage[0] === "$ban") {
            if (spliteMessage.length === 2) {
                message.guild.ban(message.mentions.users.first());
            }
            else
                message.reply('Problème dans les paramètres');
        }
        else if (spliteMessage[0] === "$kick") {
            if (spliteMessage.length === 2) {
                message.guild.kick(message.mentions.users.first());
            }
            else
                message.reply('Problème dans les paramètres');
        }
    }
});


























//------------------------------------------------------------------------------------------------------------------------------------------------------- Embed


bot.login(process.env.TOKEN);



function random(min, max){
    min = Math.ceil(1)
    max = Math.floor(50)
    randum = Math.floor(Math.random() * (max - min +1) +min );
}

bot.on('message', message => {
    if (message.content === prefix + "help")
    {
        var help_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField('Commandes du bot :', '$help - Commande disponible, $fondateur - Voir le créateur du bot')
            .addField('Interaction :', 'ping, yo, slt, salut,cc, bonjour')
            .setImage(message.author.avatarURL)
        message.channel.sendEmbed(help_embed);
        console.log("Commane du bot envoyée !");
    }

    if (message.content === "ping")
    {
        var lol = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField('pong')
            .addField('m d r')
            .setImage('https://cdni.rt.com/french/images/2016.11/article/582d7716c46188e5658b46b8.jpg')
        message.channel.sendEmbed(lol);
        console.log("Commane du bot envoyée !");
    }
});

bot.on('message', message => {
    if (message.content === prefix + 'join'){
        message.reply('Envoie en cours ...');
        console.log('join envoyé');
    }
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
});

bot.on('message', message => {
    if (message.content === prefix + 'nsfw sites'){
        message.reply('Voici des sites :');
        console.log('salut envoyé');
    }

    if (message.content === prefix + "nsfw sites")
    {
        var sites_embed = new Discord.RichEmbed()
            .setColor('#B9121B')
            .addField('NSFW :', 'Youporn, pornhub, beeg, tukif, PornTube, ePorner')
            .addField('Hentai :', 'Trixhentai, ZZCartoon, HentaiHaven, HentaiFox')
            .setImage('https://lh3.googleusercontent.com/-GEJES1WZUz4/U_Q-Ka3x5DI/AAAAAAAAA6M/ntWIijNasoY/w946-h532-no/vlcsnap-2014-08-20-08h43m33s34.png')
        message.channel.sendEmbed(sites_embed);
        console.log("Commande de sites envoyée !");
    }
});




bot.on('message', message => {
    if (message.content === 'yo'){
        message.reply('Salut');
        console.log('salut envoyé');
    }

    if (message.content === prefix + "CybeRP")
    {
        var cybe_embed = new Discord.RichEmbed()
            .setColor('#2BA812')
            .addField('Fondateur :', 'Energy, Shepard')
            .addField('Discord :', 'https://discord.gg/9bXdxgZ')
            .setImage('https://minecraft.fr/forum/attachments/photo-cyberp-2-png.72128/')
        message.channel.sendEmbed(cybe_embed);
        console.log("Commande de cybe envoyée !");
    }
});







bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue sur CybeRP," + member.displayName + "pour plus d'information merci de contacter nos modérateurs. Pour inviter vos amis sur CybeRP faites $CybeRP, pour m'inviter sur votre discord faites $join ! Bonne journée/soirée")
    }).catch(console.error);
});




























































//=============================================================================================================================





bot.on('message', message => {
    if (message.content === prefix + 'news'){
        message.reply('Envoie en cours ... :');
        console.log('news envoyée');
    }

    if (message.content === prefix + "news")
    {
        var news_embed = new Discord.RichEmbed()
            .setColor('#AEEE00')
            .addField('News (last up was 20/12/2017) :', 'Ajout des commandes $kick et $ban, passe à la 0.3')
            .addField('Version du bot', '0.3')
            .setImage(message.author.avatarURL)
        message.channel.sendEmbed(news_embed);
        console.log("Commande de news envoyée !");
    }
});













// ===========================================================NSFW
// ===========================================================NSFW
// ===========================================================NSFW
// ===========================================================NSFW
// ===========================================================NSFW
// ===========================================================NSFW
// ===========================================================NSFW




























bot.on('message', message => {
    random();
    if (message.content === prefix + 'nsfw'){
        message.reply('Envoie en cours ...')
        if (randum == 1){
            var nsfw1_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://img.indexxx.com/images/sets/894301-pornoacademie.jpg')
            message.channel.sendEmbed(nsfw1_embed);
        }

        if (randum == 2){
            var nsfw2_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://1.bp.blogspot.com/-_WHASecQaJY/UswZKjaB-SI/AAAAAAAAARc/IM4PhgIJV7k/s1600/Lisa+Ann+Porn+2014+2.jpg')
            message.channel.sendEmbed(nsfw2_embed);
        }

        if (randum == 3){
            var nsfw3_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://simpleporn.org/content/4/186_Holly_nice_ass.jpg')
            message.channel.sendEmbed(nsfw3_embed);
        }

        if (randum == 4){
            var nsfw4_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://com.dp.ua/uploads/posts/thumbs/porno-kim-kardashyan-smotret-onlayn-12.jpg')
            message.channel.sendEmbed(nsfw4_embed);
        }

        if (randum == 5){
            var nsfw5_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://www.top-x-porn.com/photos/galleries/Stars/Kim_Kardashian/gif/Kim_Kardashian_sextape_gros_seins_nue_topless_porno_hard.gif')
            message.channel.sendEmbed(nsfw5_embed);
        }

        if (randum == 6){
            var nsfw6_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://static.spankbang.com/pornstarimg/f/46-250.jpg')
            message.channel.sendEmbed(nsfw6_embed);
        }

        if (randum == 7){
            var nsfw7_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGEaxc4fM53d_syCVHjiulM4OlPWdH3DHSd3MAbOM6fYDXbWR_A')
            message.channel.sendEmbed(nsfw7_embed);
        }

        if (randum == 8){
            var nsfw8_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://img.pornpics.com/2015-02-14/289913_14.jpg')
            message.channel.sendEmbed(nsfw8_embed);
        }

        if (randum == 9){
            var nsfw9_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://www.tobeporn.com/wp-content/uploads/2017/07/Brandi-Love-Mothers-Little-Helper-tobeporn.jpg')
            message.channel.sendEmbed(nsfw9_embed);
        }


        if (randum == 10){
            var nsfw10_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://ci.phncdn.com/videos/201705/02/115163141/thumbs_50/(m=eaf8Ggaaaa)(mh=g-_-PJ-MTHGq2HLt)8.jpg')
            message.channel.sendEmbed(nsfw10_embed);
        }


        if (randum == 11){
            var nsfw11_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://pics.serviporno.com/misc/model11.jpg')
            message.channel.sendEmbed(nsfw11_embed);
        }


        if (randum == 12){
            var nsfw12_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://www.dorcelvision.com/images/slideshow23/713815-asa-akira.jpg')
            message.channel.sendEmbed(nsfw12_embed);
        }


        if (randum == 13){
            var nsfw13_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://i2.wp.com/www.pornpicturexxx.com/wp-content/uploads/2017/01/top-27-porn-star-asa-akira-sex-nude-hd-photos-xxx-pictures-24.jpg?resize=800%2C1151')
            message.channel.sendEmbed(nsfw13_embed);
        }


        if (randum == 15){
            var nsfw15_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://www.tuxboard.com/photos/2017/01/asa-akira-actrice-porno-populaire-2016.jpg')
            message.channel.sendEmbed(nsfw15_embed);
        }

        if (randum == 16){
            var nsfw16_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://www.tobeporn.com/wp-content/uploads/2016/08/Asa-Akira-Rebeca-Linares-Threesome-with-Rebecca-and-Asa-tobeporn.jpg')
            message.channel.sendEmbed(nsfw16_embed);
        }

        if (randum == 17){
            var nsfw17_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://bi.phncdn.com/videos/201412/16/36105481/original/(m=eaf8Ggaaaa)(mh=eXJCKIUoXmF765ds)3.jpg')
            message.channel.sendEmbed(nsfw17_embed);
        }

        if (randum == 18){
            var nsfw18_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://img2.3movs.com/contents/videos_screenshots/7000/7334/preview.mp4.jpg')
            message.channel.sendEmbed(nsfw18_embed);
        }

        if (randum == 19){
            var nsfw19_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://content.pornpics.com/2013-02-11/89948_10.jpg')
            message.channel.sendEmbed(nsfw19_embed);
        }

        if (randum == 20){
            var nsfw20_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://i0.wp.com/www.hdpornstarz.com/wp-content/uploads/2017/07/Gorgeous-Porn-Star-Madison-Ivy-Returns.jpg?fit=800%2C514')
            message.channel.sendEmbed(nsfw20_embed);
        }

        if (randum == 21){
            var nsfw21_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://b1.woxcdn.com/pics-final-2/532/fcf/532fcf2a4511c46fb295746f58d218a5.jpg')
            message.channel.sendEmbed(nsfw21_embed);
        }

        if (randum == 22){
            var nsfw22_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://i0.wp.com/fotowoltaikapolska.info/wp-content/uploads/2016/04/201604000000016.jpg?fit=540%2C360')
            message.channel.sendEmbed(nsfw22_embed);
        }

        if (randum == 23){
            var nsfw23_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://i1.wp.com/www.pornpicturexxx.com/wp-content/uploads/2016/12/xxx-alexis-texas-porn-anal-nude-ass-hd-photos9.jpg?fit=1013675')
            message.channel.sendEmbed(nsfw23_embed);
        }

        if (randum == 24){
            var nsfw24_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('')
            message.channel.sendEmbed(nsfw24_embed);
        }

        if (randum == 25){
            var nsfw25_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://bi.phncdn.com/m=eQdw9f/pics/pornstars/000/008/681/thumb_29201.jpg')
            message.channel.sendEmbed(nsfw25_embed);
        }

        if (randum == 26){
            var nsfw26_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://mcdn.vrporn.com/files/20160927020944/Casting-Couch-VRBangers-Mia-Malkova-VR-porn-video-vrporn.com-5.jpg')
            message.channel.sendEmbed(nsfw26_embed);
        }

        if (randum == 27){
            var nsfw27_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://blog.firecams.com/uploads/posts/mia%20khalifa%20tits.png')
            message.channel.sendEmbed(nsfw27_embed);
        }

        if (randum == 28){
            var nsfw28_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://www.masculin.com/images/article/1837-katsuni-interview/katsuni-interview-ba3.jpg')
            message.channel.sendEmbed(nsfw28_embed);
        }

        if (randum == 29){
            var nsfw29_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://ci.phncdn.com/videos/201512/29/64862391/original/(m=ecuKGgaaaa)(mh=cfVpRmW5_YAGwVuT)4.jpg')
            message.channel.sendEmbed(nsfw29_embed);
        }

        if (randum == 30){
            var nsfw30_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://bobs-tube.com/contents/videos_screenshots/308000/308831/preview.jpg')
            message.channel.sendEmbed(nsfw30_embed);
        }


        if (randum == 31){
            var nsfw31_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://cartoonpornstars.info/feed/results/big%20tits%20porno%20pics/big-tit-porn-870722.jpg')
            message.channel.sendEmbed(nsfw31_embed);
        }

        if (randum == 32){
            var nsfw32_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://pbs.twimg.com/media/Bcc32k0CIAAaPuh.jpg')
            message.channel.sendEmbed(nsfw32_embed);
        }

        if (randum == 33){
            var nsfw33_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://pornsitereport.com/images/reviews/h/huge-tits-pass/huge-tits-pass-big-tits-black-girl.jpg')
            message.channel.sendEmbed(nsfw33_embed);
        }

        if (randum == 34){
            var nsfw34_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://passpix.com/images/2015/05/o5dmfqhe3fgmlpsycea0.jpg')
            message.channel.sendEmbed(nsfw34_embed);
        }

        if (randum == 35){
            var nsfw35_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://www.adultappmart.com/appimg/porn-on-android-big-tits-boss-movies_1583.png')
            message.channel.sendEmbed(nsfw35_embed);
        }

        if (randum == 36){
            var nsfw36_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://cdn.perfecttitsporn.com/2015-05-17/288552_11.jpg')
            message.channel.sendEmbed(nsfw36_embed);
        }

        if (randum == 37){
            var nsfw37_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://i.imgur.com/fpwWxg8h.jpg')
            message.channel.sendEmbed(nsfw37_embed);
        }

        if (randum == 38){
            var nsfw38_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://cdn.hugemassivetits.com/st/thumbs/184/uFiveVi7gm.jpg')
            message.channel.sendEmbed(nsfw38_embed);
        }

        if (randum == 39){
            var nsfw39_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://cdn.bigtitboob.com/st/thumbs/937/n4pIcd2HGT.jpg')
            message.channel.sendEmbed(nsfw39_embed);
        }

        if (randum == 40){
            var nsfw40_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://cdn.nudebigtits.com/st/thumbs/748/pW6y39rPv7.jpg')
            message.channel.sendEmbed(nsfw40_embed);
        }

        if (randum == 41){
            var nsfw41_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://i0.wp.com/www.pingoo.com/wp-content/uploads/2010/09/mur_porn11.gif?resize=500%2C375')
            message.channel.sendEmbed(nsfw41_embed);
        }

        if (randum == 42){
            var nsfw42_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://gif.pornomass.com/uploads/photo/original/333-gif-porn-est.gif')
            message.channel.sendEmbed(nsfw42_embed);
        }

        if (randum == 43){
            var nsfw43_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPZ_JWA-yhFUjs1gqRF5n72Fdup-p0LthsOQQh5dnrZlSvPGI')
            message.channel.sendEmbed(nsfw43_embed);
        }

        if (randum == 44){
            var nsfw44_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://buzzporn.net/wp-content/uploads/2017/06/position-sexuelle-08.gif')
            message.channel.sendEmbed(nsfw44_embed);
        }

        if (randum == 45){
            var nsfw45_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://gif.pornomass.com/uploads/photo/original/361-gif-porn-equatorienne.gif')
            message.channel.sendEmbed(nsfw45_embed);
        }

        if (randum == 46){
            var nsfw46_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://meilleur-gif-porno.m.e.pic.centerblog.net/24e24db7.gif')
            message.channel.sendEmbed(nsfw46_embed);
        }

        if (randum == 47){
            var nsfw47_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://www.alrincon.com/imagenesblog/gif200712/14.gif')
            message.channel.sendEmbed(nsfw47_embed);
        }

        if (randum == 48){
            var nsfw48_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://ci.phncdn.com/pics/albums/019/564/871/236127411/(m=e-yaaGqaa)(mh=SuAeP4VV89joaPHA)original_236127411.jpg')
            message.channel.sendEmbed(nsfw48_embed);
        }

        if (randum == 49){
            var nsfw49_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('https://ci.phncdn.com/pics/albums/015/776/222/204580811/(m=e-yaaGqaa)(mh=uvWfV5JGkrU0fO2m)original_204580811.jpg')
            message.channel.sendEmbed(nsfw49_embed);
        }

        if (randum == 50){
            var nsfw50_embed = new Discord.RichEmbed()
                .setColor('#ED0D6E')
                .addField('Tag', 'NSFW')
                .setImage('http://commentseduire.net/wp-content/uploads/2016/04/gif-porno-mia-khalifa5.gif')
            message.channel.sendEmbed(nsfw50_embed);
        }
    }
    if (message.content === prefix + 'nsfw hentai'){
        message.reply('Envoie en cours ...')
        if (randum == 1){
            var hentai1_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://hentaihaven.org/package/2017/07/HH-Mokkai-Shiyo-Episode-1-29C2BF83.mp4_snapshot_11.55_2017.07.27_17.05.39.jpg')
            message.channel.sendEmbed(hentai1_embed);
        }
        if (randum == 2){
            var hentai2_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://img-hw.xnxx-cdn.com/videos/thumbslll/21/4e/5f/214e5f3bc3cb8a62c4bc44592dd29222/214e5f3bc3cb8a62c4bc44592dd29222.1.jpg')
            message.channel.sendEmbed(hentai2_embed);
        }

        if (randum == 3){
            var hentai3_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, hentai')
                .setImage('http://img0.joyreactor.com/pics/post/nsfw-Hentai-xxx-files-fandoms-3897004.gif')
            message.channel.sendEmbed(hentai3_embed);
        }

        if (randum == 4){
            var hentai4_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://s-media-cache-ak0.pinimg.com/originals/7f/65/a5/7f65a5b51bf3408f663661747a7f2c32.jpg')
            message.channel.sendEmbed(hentai4_embed);
        }

        if (randum == 5){
            var hentai5_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://bi.phncdn.com/videos/201303/24/10760881/original/(m=eaf8Ggaaaa)(mh=JLGyqm0xXaLI90_D)13.jpg')
            message.channel.sendEmbed(hentai5_embed);
        }

        if (randum == 6){
            var hentai6_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://ahegao.online/wp-content/uploads/2017/04/b679200548cff3b56baaf47dc7622498.gif')
            message.channel.sendEmbed(hentai6_embed);
        }

        if (randum == 7){
            var hentai7_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://i.pinimg.com/736x/67/62/ce/6762cef83444bbb0f8fa584bc076fbef--sexy-pokemon-pokemon-games.jpg')
            message.channel.sendEmbed(hentai7_embed);
        }

        if (randum == 8){
            var hentai8_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://imagedehentai.i.m.pic.centerblog.net/6651.jpg')
            message.channel.sendEmbed(hentai8_embed);
        }

        if (randum == 9){
            var hentai9_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://img-hw.xvideos-cdn.com/videos/thumbs169lll/b8/73/f4/b873f479a06e2956f2f836c39f1cdb17/b873f479a06e2956f2f836c39f1cdb17.6.jpg')
            message.channel.sendEmbed(hentai9_embed);
        }

        if (randum == 10){
            var hentai10_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://thehentaiworld.com/wp-content/uploads/2011/03/Female-Naruto-Hinata-Naruto-Hentai-Image-TheHentaiWorld-8.jpg')
            message.channel.sendEmbed(hentai10_embed);
        }

        if (randum == 11){
            var hentai11_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://danbooru.donmai.us/data/__daisuke_ichijou_and_iihara_nao_resort_boin__7ff589faca1c1962a300b64d7ef90417.gif')
            message.channel.sendEmbed(hentai11_embed);
        }

        if (randum == 12){
            var hentai12_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://r3s8e4h6.ssl.hwcdn.net/uploads/6/d/9/6d95627ead1658c8feda2b309914a747400.jpg')
            message.channel.sendEmbed(hentai12_embed);
        }

        if (randum == 13){
            var hentai13_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvq9h3MnU-0K82FI6LS3XSjK9DbwZMciDGhW26WYJ3ARpvQxs')
            message.channel.sendEmbed(hentai13_embed);
        }

        if (randum == 14){
            var hentai14_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://78.media.tumblr.com/ce1cb7372d48a159226e7dff4cb470d5/tumblr_npwq66FDFe1tv5c1wo2_r1_400.gif')
            message.channel.sendEmbed(hentai14_embed);
        }

        if (randum == 15){
            var hentai15_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://danbooru.donmai.us/data/__tsugou_no_yoi_sex_friend__77e0922e0ca6a65889da96470d2e0157.gif')
            message.channel.sendEmbed(hentai15_embed);
        }

        if (randum == 16){
            var hentai16_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://ii.yuki.la/e/fd/fad02be2e03d4c5ab301f098fac7e45fb55f50013c9e795fd4fecde0a5cb7fde.gif')
            message.channel.sendEmbed(hentai16_embed);
        }

        if (randum == 17){
            var hentai17_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://static.mensup.fr/photos/148180/zoom-minute-hentai-la-selection-sexy-de-guillaume-de-the-shoes.jpg')
            message.channel.sendEmbed(hentai17_embed);
        }

        if (randum == 18){
            var hentai18_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://imagedehentai.i.m.pic.centerblog.net/1519503-Akame_Ga_Kill-Lolita_Channel-esdeath.jpg')
            message.channel.sendEmbed(hentai18_embed);
        }

        if (randum == 19){
            var hentai19_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://imagedehentai.i.m.pic.centerblog.net/1691595-Akame-Akame_Ga_Kill-Leone-hentaimaster88-najenda.jpg')
            message.channel.sendEmbed(hentai19_embed);
        }

        if (randum == 20){
            var hentai20_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEf40OtLla79z3mU1gSh8lVNF6kPfVxQEPJS0mxlk33VicooiIAQ')
            message.channel.sendEmbed(hentai20_embed);
        }

        if (randum == 21){
            var hentai21_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://2.bp.blogspot.com/-x36Vc1Trolc/VXThNesKuCI/AAAAAAAA6kI/QfrHf86_kSc/s1600/One-Piece-Pixxx-Hentai%2B%25282%2529.jpg')
            message.channel.sendEmbed(hentai21_embed);
        }

        if (randum == 22){
            var hentai22_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://r3s8e4h6.ssl.hwcdn.net/uploads/7/2/2/7225cd142d679d0ce74b9f44f5bc8064400.jpg')
            message.channel.sendEmbed(hentai22_embed);
        }

        if (randum == 23){
            var hentai23_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://img.over-blog.com/600x600/5/85/22/20/hard/5cb06f69.jpg')
            message.channel.sendEmbed(hentai23_embed);
        }

        if (randum == 24){
            var hentai24_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://pbs.twimg.com/media/Ce-C0IbW8AIyGxL.jpg:large')
            message.channel.sendEmbed(hentai24_embed);
        }

        if (randum == 25){
            var hentai25_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://danbooru.donmai.us/cached/data/__asuka_senran_kagura_and_senran_kagura_series_drawn_by_mikemono_yuu__8f5711f5b04bff8b28e4e218139d2b3c.jpg')
            message.channel.sendEmbed(hentai25_embed);
        }

        if (randum == 26){
            var hentai26_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://pbs.twimg.com/media/C6_IlCSWYAALvQ5.jpg')
            message.channel.sendEmbed(hentai26_embed);
        }

        if (randum == 27){
            var hentai27_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://cdnio.luscious.net/glukkers/458/lusciousnet_lusciousnet_pokemon-hentai-397_420682658.jpg')
            message.channel.sendEmbed(hentai27_embed);
        }


        if (randum == 28){
            var hentai28_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://ddn.i.ntere.st/p/21702479/image')
            message.channel.sendEmbed(hentai28_embed);
        }

        if (randum == 29){
            var hentai29_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://78.media.tumblr.com/43d29449d930eef36a6231d78c15ed30/tumblr_ob4hm0kYgU1v2hfg0o5_500.gif')
            message.channel.sendEmbed(hentai29_embed);
        }

        if (randum == 30){
            var hentai30_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://78.media.tumblr.com/79103f95494121695ce940b4d421b14f/tumblr_obdn5v30xe1rg3a60o1_1280.jpg')
            message.channel.sendEmbed(hentai30_embed);
        }

        if (randum == 31){
            var hentai31_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://imageservice-mikandi.netdna-ssl.com/v2/mikandicatalog/3148_299157_1311796588-screenShot1.png/image.jpg')
            message.channel.sendEmbed(hentai31_embed);
        }

        if (randum == 32){
            var hentai32_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://danbooru.donmai.us/data/__original_drawn_by_tachibana_omina__3c239b74ffab45d32d461ad54c6fd28d.jpg')
            message.channel.sendEmbed(hentai32_embed);
        }

        if (randum == 33){
            var hentai33_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://danbooru.donmai.us/cached/data/__fuyou_suzuka_tsuma_to_mama_to_boin_drawn_by_sano_toshihide__c388ffbdbfe7bde07da99815b2029e04.jpg')
            message.channel.sendEmbed(hentai33_embed);
        }

        if (randum == 34){
            var hentai34_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://www.tabrin.com/uploads/post/medium/1/13880.gif')
            message.channel.sendEmbed(hentai34_embed);
        }

        if (randum == 35){
            var hentai35_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://pbs.twimg.com/media/CloANhnXIAEaDSG.jpg')
            message.channel.sendEmbed(hentai35_embed);
        }

        if (randum == 36){
            var hentai36_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://danbooru.donmai.us/cached/data/__toudou_erika_and_toudou_yuuto_cleavage_game_drawn_by_sei_shoujo__301a05e88ed3639d9629afe90bee86b0.jpg')
            message.channel.sendEmbed(hentai36_embed);
        }

        if (randum == 37){
            var hentai37_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://pbs.twimg.com/media/Ch07bYVWkAElOwk.jpg:large')
            message.channel.sendEmbed(hentai37_embed);
        }

        if (randum == 38){
            var hentai38_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://danbooru.donmai.us/data/sample/__marie_persona_persona_4_and_persona_4_the_golden_drawn_by_another_story__sample-79d66768bb548f0209c474d6ba49cff2.jpg')
            message.channel.sendEmbed(hentai38_embed);
        }

        if (randum == 39){
            var hentai39_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://i.imgur.com/Zn3L1ba.png')
            message.channel.sendEmbed(hentai39_embed);
        }

        if (randum == 40){
            var hentai40_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://pbs.twimg.com/media/B1MPRzKCMAA7sjR.jpg')
            message.channel.sendEmbed(hentai40_embed);
        }

        if (randum == 41){
            var hentai41_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('data:image/jpeg;base64,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')
            message.channel.sendEmbed(hentai41_embed);
        }

        if (randum == 42){
            var hentai42_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://bi.phncdn.com/videos/201312/26/21303911/original/(m=eaf8Ggaaaa)(mh=0uRav2B472fsEuM_)8.jpg')
            message.channel.sendEmbed(hentai42_embed);
        }

        if (randum == 43){
            var hentai43_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://fondhentay.f.o.pic.centerblog.net/88ue32ah.jpg')
            message.channel.sendEmbed(hentai43_embed);
        }

        if (randum == 44){
            var hentai4_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('')
            message.channel.sendEmbed(hentai4_embed);
        }

        if (randum == 44){
            var hentai4_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://i.imgbox.com/rqNHZeI5.jpg')
            message.channel.sendEmbed(hentai44_embed);
        }

        if (randum == 45){
            var hentai45_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://pbs.twimg.com/media/CPs2PONUAAA6ked.jpg')
            message.channel.sendEmbed(hentai45_embed);
        }

        if (randum == 46){
            var hentai46_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('http://imagens.hentaitv.com.br/wp-content/uploads/2017/06/android18-hentai-dragon-ball-z-nua-62-300x234.jpg')
            message.channel.sendEmbed(hentai46_embed);
        }

        if (randum == 47){
            var hentai47_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://danbooru.donmai.us/data/__mizushima_asa_sora_no_iro_mizu_no_iro_drawn_by_kuroda_kazuya__4c9606c4794e7582f14fb976084f958a.gif')
            message.channel.sendEmbed(hentai47_embed);
        }

        if (randum == 48){
            var hentai48_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://cdnio.luscious.net/782/lusciousnet_5fcab8f72104819340988cc_903132320.gif')
            message.channel.sendEmbed(hentai48_embed);
        }

        if (randum == 49){
            var hentai49_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://pbs.twimg.com/media/CvOQceSVUAE4CJr.jpg')
            message.channel.sendEmbed(hentai49_embed);
        }


        if (randum == 50){
            var hentai50_embed = new Discord.RichEmbed()
                .setColor('#8E3557')
                .addField('Tags', 'NSFW, Hentai')
                .setImage('https://pictures.hentai-foundry.com/a/AnimeFlux/327797/AnimeFlux-327797-Extra_Credit.jpg')
            message.channel.sendEmbed(hentai50_embed);
        }


    }

    if (message.content === prefix + 'nsfw ass'){
        message.reply('Envoie en cours ...')
        if (randum == 1){
            var ass1_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://www.myconfinedspace.com/wp-content/uploads/2016/08/smiles-and-beautiful-ass.jpg')
            message.channel.sendEmbed(ass1_embed);
        }
        if (randum == 2){
            var ass2_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s-media-cache-ak0.pinimg.com/originals/98/fc/25/98fc25417a85d6b76ac0d0c08fbcdc69.jpg')
            message.channel.sendEmbed(ass2_embed);
        }

        if (randum == 3){
            var ass3_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://media.gettyimages.com/photos/october-27-2008-o-dos-gimnasio-gym-madrid-spain-in-the-o-dos-gym-has-picture-id89451519')
            message.channel.sendEmbed(ass3_embed);
        }

        if (randum == 4){
            var ass4_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('data:image/jpeg;base64,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')
            message.channel.sendEmbed(ass4_embed);
        }

        if (randum == 5){
            var ass5_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s3media.247sports.com/Uploads/Boards/156/25156/396841.jpg')
            message.channel.sendEmbed(ass5_embed);
        }

        if (randum == 6){
            var ass6_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://i.ytimg.com/vi/ExE7zmbrhZc/hqdefault.jpg')
            message.channel.sendEmbed(ass6_embed);
        }

        if (randum == 7){
            var ass7_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://i.pinimg.com/474x/cf/b1/25/cfb125b9bf2617c3c24922aafe1f4097--reef-girls-girls-girls-girls.jpg')
            message.channel.sendEmbed(ass7_embed);
        }

        if (randum == 8){
            var ass8_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('data:image/jpeg;base64,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')
            message.channel.sendEmbed(ass8_embed);
        }

        if (randum == 9){
            var ass9_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s-media-cache-ak0.pinimg.com/originals/27/cb/6c/27cb6cee43e6d9f9558638991429fc14.jpg')
            message.channel.sendEmbed(ass9_embed);
        }

        if (randum == 10){
            var ass10_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s-media-cache-ak0.pinimg.com/originals/23/8c/15/238c153efa7900a56acad38e78b2716e.jpg')
            message.channel.sendEmbed(ass10_embed);
        }

        if (randum == 11){
            var ass11_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://t4.ftcdn.net/jpg/00/40/70/89/500_F_40708903_PEEBjlZHf0DD9PCYpsYFT6mCrSXBZaVo.jpg')
            message.channel.sendEmbed(ass11_embed);
        }

        if (randum == 12){
            var ass12_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://static.esea.net/global/images/users/1150668.1498793088.jpg')
            message.channel.sendEmbed(ass12_embed);
        }

        if (randum == 13){
            var ass13_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://3.bp.blogspot.com/-ojgkGUkDCdU/V5CspVYEdMI/AAAAAAAAAcs/RvS_ag2Hmn4ex6F62tkEwV1GNQQW_hGrQCLcB/s1600/MOVE%2BYOUR%2BASS%2BCLUB%2B19.jpg')
            message.channel.sendEmbed(ass13_embed);
        }

        if (randum == 14){
            var ass14_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://2.bp.blogspot.com/-iXFjiY46MfU/T_V_MlO-cpI/AAAAAAAAGzk/AB4fmQpGevc/s1600/girl%20with%20gorgeous%20figure%20nice%20beautiful%20butt%20ass.jpg')
            message.channel.sendEmbed(ass14_embed);
        }

        if (randum == 15){
            var ass15_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s-media-cache-ak0.pinimg.com/originals/18/0b/f2/180bf2bdcf1d60bda62d00e4c524f719.jpg')
            message.channel.sendEmbed(ass15_embed);
        }

        if (randum == 16){
            var ass16_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://4.bp.blogspot.com/-cjbMf8q0IWg/WBBQDtJrkcI/AAAAAAAAKvc/nnLRrpayKDIeLSpYhcEOvg8dArSaU3y-gCLcB/s1600/Jen%2BSelter%2B5.jpg')
            message.channel.sendEmbed(ass16_embed);
        }

        if (randum == 17){
            var ass17_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://ae01.alicdn.com/kf/HTB1gsKWRVXXXXX5XXXXq6xXFXXXe/Living-room-home-wall-decoration-fabric-poster-women-beautiful-ass-sexy-body-blonde-wooden-surface-gym.jpg_640x640.jpg')
            message.channel.sendEmbed(ass17_embed);
        }

        if (randum == 18){
            var ass18_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s-media-cache-ak0.pinimg.com/originals/6d/de/13/6dde134a87e7cb56c1443e53a771dc97.jpg')
            message.channel.sendEmbed(ass18_embed);
        }

        if (randum == 19){
            var ass19_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://pbs.twimg.com/media/ClnWf3TWEAAEnKx.jpg')
            message.channel.sendEmbed(ass19_embed);
        }

        if (randum == 20){
            var ass20_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://i.imgur.com/xOPcaoi.jpg')
            message.channel.sendEmbed(ass20_embed);
        }

        if (randum == 21){
            var ass21_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://redbust.com/stuff/devin-justine-pantyhose/devin-justine-pantyhose-playboy-13.jpg')
            message.channel.sendEmbed(ass21_embed);
        }

        if (randum == 22){
            var ass22_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://images-na.ssl-images-amazon.com/images/I/413z%2BOpljFL.jpg')
            message.channel.sendEmbed(ass22_embed);
        }

        if (randum == 25){
            var ass25_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://mitchminnaar.files.wordpress.com/2013/06/tumblr_mnwhpwzpvb1s65polo1_500.jpg')
            message.channel.sendEmbed(ass25_embed);
        }

        if (randum == 26){
            var ass26_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s-media-cache-ak0.pinimg.com/originals/41/5c/e8/415ce8f43522a91548108169c41a0015.jpg')
            message.channel.sendEmbed(ass26_embed);
        }

        if (randum == 27){
            var ass27_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://pbs.twimg.com/media/Bqhx-xWIQAEaogV.jpg')
            message.channel.sendEmbed(ass27_embed);
        }

        if (randum == 28){
            var ass28_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://cdn.bigassphotos.com/st/thumbs/937/pbqpIckJcm.jpg')
            message.channel.sendEmbed(ass28_embed);
        }

        if (randum == 29){
            var ass29_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://cdn.hotbigass.com/2015-05-14/300596_14.jpg')
            message.channel.sendEmbed(ass29_embed);
        }

        if (randum == 30){
            var ass30_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://cdn.fatwhitebutt.com/images/big-butt-creampie.jp')
            message.channel.sendEmbed(ass30_embed);
        }

        if (randum == 3){
            var ass3_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('')
            message.channel.sendEmbed(ass3_embed);
        }

        if (randum == 31){
            var ass31_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://2.bp.blogspot.com/-0LpOa6z1Ixc/VE4MyGJJt8I/AAAAAAABIzA/sR53qZyHsRM/s1600/hump-day-283-724073.jpg')
            message.channel.sendEmbed(ass31_embed);
        }

        if (randum == 32){
            var ass32_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://4.bp.blogspot.com/-9x5IrxmJIi0/Vc6WZ5pk7bI/AAAAAAABUEs/dHK-3P8UhQo/s1600/Asa.jpg')
            message.channel.sendEmbed(ass32_embed);
        }

        if (randum == 33){
            var ass33_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://i.warosu.org/data/sci/img/0082/40/1470024091199.jpg')
            message.channel.sendEmbed(ass33_embed);
        }

        if (randum == 34){
            var ass34_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-52164.jpg')
            message.channel.sendEmbed(ass34_embed);
        }

        if (randum == 35){
            var ass35_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://pics.pof.com/dating/1141/74/46/66dd73cef-54db-4e74-a007-849ac6933680.2.jpg')
            message.channel.sendEmbed(ass35_embed);
        }

        if (randum == 36){
            var ass36_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s-media-cache-ak0.pinimg.com/originals/18/fb/ca/18fbca8bf32d39dbd4e33c2c637a87e0.jpg')
            message.channel.sendEmbed(ass36_embed);
        }

        if (randum == 37){
            var ass37_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://pbs.twimg.com/media/CrNmI5cUEAEf2Uz.jpg')
            message.channel.sendEmbed(ass37_embed);
        }

        if (randum == 38){
            var ass38_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://s-media-cache-ak0.pinimg.com/564x/68/94/f1/6894f198f5d41992b54de334fcf12625.jpg')
            message.channel.sendEmbed(ass38_embed);
        }

        if (randum == 40){
            var ass40_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/16584025_1531198656897851_2227856083974619136_n.jpg')
            message.channel.sendEmbed(ass40_embed);
        }

        if (randum == 41){
            var ass41_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://images-cdn.9gag.com/photo/aGwwe5G_700b.jpg')
            message.channel.sendEmbed(ass41_embed);
        }

        if (randum == 42){
            var ass42_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://thechive.files.wordpress.com/2014/10/booty-hof-10.jpg?quality=94&strip=info&w=600')
            message.channel.sendEmbed(ass42_embed);
        }

        if (randum == 43){
            var ass43_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://i67.tinypic.com/vsno02.jpg')
            message.channel.sendEmbed(ass43_embed);
        }

        if (randum == 44){
            var ass44_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://pbs.twimg.com/media/CwWEjr3VEAABLEk.jpg')
            message.channel.sendEmbed(ass44_embed);
        }

        if (randum == 45){
            var ass45_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://media.musely.com/u/27bd7f74-f2f2-4257-8577-0168bce3a6db.jpg')
            message.channel.sendEmbed(ass45_embed);
        }

        if (randum == 46){
            var ass46_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('http://avante.biz/wp-content/uploads/2017/04/Best-ass-wallpaper-001.jpg')
            message.channel.sendEmbed(ass46_embed);
        }

        if (randum == 47){
            var ass47_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://postmediaprovince2.files.wordpress.com/2012/04/5897700474_127df7805c_z.jpg')
            message.channel.sendEmbed(ass47_embed);
        }

        if (randum == 48){
            var ass48_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://pbs.twimg.com/media/B-ArXwNIcAAf9F6.jpg:large')
            message.channel.sendEmbed(ass48_embed);
        }

        if (randum == 49){
            var ass49_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://i.imgur.com/EbLK02j.jpg')
            message.channel.sendEmbed(ass49_embed);
        }

        if (randum == 50){
            var ass50_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField('Tags', 'NSFW, Ass')
                .setImage('https://aqu52.files.wordpress.com/2016/04/16-1-1.gif?w=399')
            message.channel.sendEmbed(ass50_embed);
        }


    }
});
