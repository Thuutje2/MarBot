const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'Bowser',
    permissions: ["CONNECT"],
    aliases: ['bowser'],  
    description: "this is bowser!",
    execute(message, args, client){
        
    const {guild, channel} = message
 
    const embed = new MessageEmbed()
	.setColor('#19571b')
	.setTitle('Bowser')
	.setAuthor('Bowser', 'https://cdn.discordapp.com/attachments/836270146309193778/836621945046564934/300px-MSOGT_Bowser.png')
	.setDescription("Bowser, die ook wel wordt aangesproken als koning Bowser, koning Koopa, koning Bowser Koopa, Bowser Sr. is een videospel-personage in Nintendo's Mario-universum. Bowser is een slechterik en de aartsvijand van Mario en Luigi in de serie van Super Mario-videospellen. Hij is de leider en ook de sterkste van alle Koopa's. ")
	// .addField('\u200b', '\u200b')
	.setThumbnail('https://cdn.discordapp.com/attachments/836270146309193778/836621945046564934/300px-MSOGT_Bowser.png')
	.addFields(
		{ name: 'Volledige naam:', value: 'Bowser Koopa', inline: true},
		{ name: 'Geslacht:', value: 'Male', inline: true},
		{ name: 'Age:', value: '35', inline: true},
        { name: 'Birthday:', value: 'September 13, 1985', inline: true},
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Height:', value: "8'7 (actual height)\n 9'5 (Boss Fights)", inline: true},
		{ name: 'Weight:', value: '1200lbs (actual height) 1600lbs(Boss Fights) ', inline: true},
		{ name: 'Eerste verschijning:', value: 'Super Mario Bros', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Girlfriend:', value: 'single', inline: true },
		{ name: 'Bestfriend:', value: 'Boom Boom is the loyal servant of Bowser', inline: true },
		{ name: 'Enemy:', value: 'Mario', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Afkomst', value: "Bowser grew up on Yoshi's Island, raised by Kamek", inline: true },
	)
	.setTimestamp()

channel.send(embed);

  }
}