    const settings = require('../settings.json');
    const Discord = require('discord.js');
    exports.run = (client, message, args) => {
        if (!message.content.startsWith(settings.prefix)) return;
        const embed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setAuthor(`${message.author.username}`, client.user.avatarURL)
            .addField('D3SK1NG MENU', ' Premium & VIP')
            .addField('What is the differences between VIP & Premium', 'The differences are, Better Features, Better Support')
            .addField('Is any of them safer than the other?', 'No, They are both equally safe.')
            .addField('VIP Version', 'VIP Version of the Menu has better options as compared to Premium Version which can be used to your advantages, such as, **2bil per 1/2 second**, 600k Stealth, troll options such as Infinite Black Screen, delayed non-host kick, host kick and many more...')
            .addField('Premium Version', 'Premium Version has all the default features & would work perfectly too but just without massive trollings & griefing features.')
            .addField('Have a new & awesome feature suggestion(s) in mind?', 'Create a thread and post all of your suggestions [here](https://d3sk1ng.com/index.php?forums/update-suggestions.48/)')
            .setFooter('Alternatively, You can post your feature suggestions in our discord channel in #suggestions');
        message.delete();
        message.channel.sendEmbed(embed);



    }
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 2
    };

    exports.help = {
        name: 'vsp',
        description: 'shows the difference between VIP and Premium',
        usage: 'vsp'
    };
