
const settings = require('../settings.json');
const Discord = require('discord.js')
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .addField('HOTKEYS', '\u2022 Numpad * to open/close menu\n\u2022 Numpad 8 to go up \n\u2022 Numpad 2 to go down (Arrow keys Up and Down also works). \n\u2022 Numpad 5 or Enter button to open a category or to enable a feature.\n\u2022 Numpad 0 or backspace to go back.\n\u2022 Numpad - to use the vehicle weapons\n\u2022 F7 to teleport to waypoint\n\u2022 F8 to "fly" up\n\u2022  Numpad 9 to speed (Super Car mode)\n\u2022  Numpad 7 to stop (Super Car mode)\n\u2022 Numpad 1 left light (Indicator Lights)\n\u2022  Numpad 3 right light (Indicator Lights)')
        .setThumbnail('http://i.imgur.com/aHDTHDm.png');
    message.delete();
    message.channel.send({embed});
    return;

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'keys',
    description: 'Shows the hotkeys for the menu',
    usage: 'keys'
};