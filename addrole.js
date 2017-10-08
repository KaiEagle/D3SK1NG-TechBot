const settings = require('../settings.json');
exports.run = (client, message, args) => {
  if(!message.content.startsWith(settings.prefix)) return;

let user = message.guild.member(message.mentions.users.first());
let nrole = args.slice(1).join(' ');
let role  = client.guilds.get(message.guild.id).roles.find('name', `${nrole}`);
let logchannel = message.guild.channels.find('name', 'lost-roles');


if (!user) 
 return   message.channel.send(`\`\`\`diff\n${settings.prefix}addrole [user tag] <role>\n\nAdds a specific role to a mentioned user\n\`\`\``)
 
if (!role) 
 return   message.reply('A role to be added is not mentioned.Please re-execute the command by adding a role.');
 
if (user.roles.has(role.id)) {
    message.channel.send(`${user} already has ${role.name} assigned`);
}
if (!user.roles.has(role.id)) {
    user.addRole(role.id).then(() => {message.channel.send(`${role.name} added to ${user}`) /* && logchannel.send(`**${role.name}** added to ${user} by **${message.author.username}**`)*/})
};
}
//silentMC

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 10
};

exports.help = {
  name: 'addrole',
  description: 'adds the given role to the mentioned user',
  usage: 'addrole [user] '
};