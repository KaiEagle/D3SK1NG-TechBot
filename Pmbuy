const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    try {
        let user = message.mentions.users.first();
        if (!user) return message.channel.send('Mention a user to send Price Info message')
        const buypm = new Discord.RichEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setAuthor(`D3SK1NG Menu`, ``)
            .setTitle('D3sk1ng buy Info')
            .addField('Payment via __**PayPal**__', '**Premium** : $15\n**Upgrade** : $10\n**VIP**: $22.50\n\n\nOnce paid, you will be given your rank\n\n\n\nYou **Must** have **Premium** purchased to be able\nto upgrade to **VIP**', true)
            .addField('If you dont have __PayPal__', '__Steam Cards__ :\n\n**VIP** : $25 / €20\n**Premium** : $15 / €15\n**Upgrade** : $10 / €10\n\n__BTC__ :\n\n**VIP** : $25\n**Premium** : $15\n**Upgrade** : $10', true)
            .addField('How to purchase', '[Click Here](https://d3sk1ng.com/index.php?account/upgrades)')
            .addField('How to get discord roles', 'PM a Supervisor or Admin with proof of the payment to get your discord roles.')
            .setFooter('Please DM an Admin to buy via SteamCards or BTC')
            .setThumbnail('')
        const embed = new Discord.RichEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setDescription(`Hey ${user}, Please check your DMs`)
            .setFooter('Message deletes in 30s');
        message.delete();
        message.guild.member(user).send({
            embed: buypm
        });
        message.channel.send({
            embed
        }).then(m => m.delete(30000));
    } catch (e) {
        if (e.message === 'Cannot send messages to this user') {
            await message.channel.send('I cannot send the message to that user. Reason : DMs are Disabled.')
        }
    }



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'pmbuy',
    description: 'DMs the Buy Info',
    usage: 'pmbuy'
};
