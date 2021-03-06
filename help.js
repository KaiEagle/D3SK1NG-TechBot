const settings = require('../settings.json');
exports.run = async (client, message, params) => {
    if(!message.content.startsWith(settings.prefix)) return;
  const check = await sql.get(`SELECT mod, admin FROM guildSettings WHERE guildID=${message.guild.id}`)
  if (check.mod === null || check.admin === null ) {message.channel.send('`\Moderator and Administrator commands will be restricted!\nPlease do "~config" to setup\`')}
//  if (!check) await message.channel.send('`\Please set a Moderator role\`')
//  if (!check) await message.channel.send('`\Please set a Administrator role\`')

  const Discord = require('discord.js');
  const permission = await client.elevation(message);
  const commandNames = Array.from(client.commands.keys());
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  message.delete();
const fs = require('fs');

//let commands = {};
try {
  if (!params[0]) {
  let fields = [];
    fields.push({
      name: `${client.user.username} Commands`,
      value: `\`\`\`\n${client.commands.filter(cmd => cmd.conf.permLevel <= permission).map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)}`,{code:'asciidoc'}).join('\n')}\n\`\`\``,
      inline: true
    });

  message.author.send({
    embed: {
      color: 16711680,
      title: 'List of Commands',
      description: 'Following the are commands according to your permission level',
      fields: fields,
      footer: {
        text: `For further brief please do ${settings.prefix}help <commandname>`
      }
    }
  }).then(() => {
    message.channel.send({
      embed: {
        color: 16711680,
        description: `${client.user.username} Help page **sent**\n${message.author} Please check your DMs`,
        footer: {
        text: `This message was generated by ${client.user.username} to educate on how to use the applications correctly.`
      }
      }
    }).catch(e => {
      console.log(e);
    });
  }).catch(e => {
      console.log(e);
  })
} else {
      let command = params[0];
      if (client.commands.has(command)) {
        command = client.commands.get(command);
    const embed2 = new Discord.RichEmbed()
    .setFooter(`This message was generated by ${client.user.username} to educate on how to use the applications correctly.`)
    .setTitle(`${client.user.username} Sub-Help Page`)
    .setColor('ff0000')
    .setDescription(`\`\`\`js\nCommand Name: ${command.help.name} \nDescription: ${command.help.description}\nUsage: ${settings.prefix}${command.help.usage}\n\`\`\``, {code:'asciidoc'})
        await message.channel.send({embed: embed2})
      //  await message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUsage:: ${command.help.usage}`, {code:'asciidoc'});
      }
    }
} catch (e) {
    console.log(e);
  }
};

exports.conf = {
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]',
  category:'General'
};
