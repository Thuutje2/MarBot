const { MessageEmbed, Channel } = require("discord.js");
module.exports = {
    name: 'help',
    permissions: ["CONNECT"],
    description: "this is a help command!",
    execute(message, args, cmd, client){
        const {guild, channel} = message
        const icon = guild.iconURL()
        const embed = new MessageEmbed()

        .setAuthor('Marbot Commands')
        .setThumbnail(icon)
        .setColor('#6dbac9')
        .addFields(
            {
                name: '**⭐Commands:**',
                value: '`-Characters` Lijst vol met characters,',
            },
        )
        .setTimestamp()
        channel.send(embed)
    }
}
 