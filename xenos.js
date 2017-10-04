const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
  const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random()*16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('How to use Inject D3SK1NG using Xenos64?', 'Follow the bottom guide to inject the menu.')
        .addField('Video Guide:', 'Thanks to bloodsucker#1513 [Click Here](https://vimeo.com/228739947)')
        .addField('Text Guide:', '\n1. Start Xenos64 as administrator\n2. Press "Add".\n3. Choose Image: "d3sk1ng.dll".\n4. Press "Advanced".\n5. Injection-Type - Choose "Manual Map".\nIf that doesnt work, choose "Native Injection"\n6. Start "GTA V".\n7. Load in Story-Mode.\n8. When you are in the loading screen, switch to Xenos and choose the process (GTA5.exe)\n9. Press Inject.\n\nThat\'s it. Now go back to GTA 5 and press * to open the menu')
        .addField(`Download:`, `[Click Here](https://www.mediafire.com/file/b9g7rmwk1ynjevy/xenos64.zip)`)      
        .setThumbnail('');
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
    name: 'xenos',
    description: 'Shows how to inject the menu using Xenos',
    usage: 'xenos'
};
