const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .addField('How to use remove money?', 'Follow the guide below for more info.')
        .addField('Video Guide:', '[Video Guide](https://www.youtube.com/watch?v=Okk6daSIDOo&lc=z23ugtcgexr5fhaza04t1aokgtyzkbunybxqmfps4y2prk0h00410)')
        .addField('Text Guide:', '1. Go to Recovery>Stealth Mode>Standard Stealth Mode>Tick It\n2.Change the type from add money to remove money\n3.Change the value from 600k to 2147000064.\n4.Change bank to wallet.\n5. Enable Self Ped Drop and you should notice that money is being taken away!')
        .setThumbnail('http://i.imgur.com/aHDTHDm.png')
        .setFooter('Note: Some users may receive transaction errors while using this.');
    message.delete();
    message.channel.send({embed});



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'removemon',
    description: 'shows how to remove money',
    usage: 'removemon'
};