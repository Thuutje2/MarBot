const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'yoshi',
    permissions: ["CONNECT"],
	aliases: ['Yoshi'],  
    description: "this is Yoshi!",
    execute(message, args, client){
        
    const {guild, channel} = message
 
    const embed = new MessageEmbed()
	.setColor('#32a852')
	.setTitle('Yoshi')
	.setAuthor('Yoshi', 'https://i.imgur.com/qJSLRcQ.jpg')
	.setDescription("Yoshi is een fictief dier in verscheidene Nintendo-computerspellen. Yoshi betekent 'beter', 'best' of 'gelukkig'. Kenmerkend aan hun soort is dat ze veel gebruikmaken van hun erg lange, plakkerige tongen, en kunnen bijna alles doorslikken, zelfs dingen die veel groter zijn dan de Yoshi's zelf. Bijna alles wat zij inslikken verandert hij in een ei. Dit ei broeden ze uiteraard niet uit, maar gebruiken ze als wapen om mee te gooien.")
	// .addField('\u200b', '\u200b')
	.setThumbnail('https://i.imgur.com/RC7uoYK.jpg')
	.addFields(
		{ name: 'Volledige naam:', value: 'T. Yoshisaur Munchakoopas', inline: true},
		{ name: 'Geslacht:', value: 'Man', inline: true},
		{ name: 'Age:', value: 'Ouder dan Mario', inline: true},
		{ name: 'Birthday:', value: 'Unknown', inline: true},
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Height:', value: '140 cm', inline: true},
		{ name: 'Weight:', value: '60 kg (132 lbs)', inline: true},
		{ name: 'Eerste verschijning:', value: 'Super Mario World (1990)', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Girlfriend:', value: 'Birdo', inline: true },
		{ name: 'Bestfriend:', value: 'Mario', inline: true },
		{ name: 'Enemy:', value: 'Kamek', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Colors:', value: 'Yoshi is usually green but can come in many other colors. These other colors include green, red, cyan, blue, pink, yellow, brown, black, or white.', inline: true },
	)
	.setTimestamp()

channel.send(embed);

  }
}