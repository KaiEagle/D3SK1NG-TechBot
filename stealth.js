const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('How to use stealth "correctly and not get kicked?', 'The stealth mode is not like the old stealth, to make it work you have to actually trigger a transaction. How? Sell a car, pick up some money from a ped etc.')
        .addField('Why you get kicked?You trigger transcation too fast to a point where your internet cant process it.'
        .addField('Text Guide:', '1. Go to Recovery > Stealth > Choose the amount you want. > Enable stealth mode.\n2. Go down to self ped drops.(Recovery > stealth > self ped drop)\n3. SET THE DELAY to 550(IF 500 kicks you offline try 1500) > Enable status'
        .addfield('DONT PICK UP THE MONEY THAT SPAWNS AROUND YOU', 'OR', '1. Go to Recovery>Stealth > Choose the amount you want.>Enable stealth mode.\n2. Go down to self money bag drops.(Recovery > stealth>self money bag drop).\n3 Set the delay to (1800-2800) > enable status.'
        .addField('Note:', 'VIP users get 10mil stealth while Premium users get 5mil.')
        .setThumbnail('')
        .setFooter('');
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
    name: 'stealth',
    description: 'shows how to use stealth mode',
    usage: 'stealth'
};
