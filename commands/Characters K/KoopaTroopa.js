const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'KoopaTroopa',
    permissions: ["CONNECT"],
    aliases: ['koopatroopa', 'koopa troopa'],  
    description: "this is Koopa Troopa!",
    execute(message, args, client){
        
    const {guild, channel} = message
 
    const embed = new MessageEmbed()
	.setColor('#f2d73a')
	.setTitle('Koopa Troopa')
	.setAuthor('Koopa Troopa', 'https://i.imgur.com/1fOsJgU.jpg')
	.setDescription("Koopa Troopa’s zijn schildpadden die zich hebben aangesloten bij de Koopa Troop en zijn sindsdien een regelmatig terugkerende vijand. De meeste Koopa Troopa’s zijn laf. Als ze bedreigd worden trekken ze zich terug in hun schild.")
	// .addField('\u200b', '\u200b')
	.setThumbnail('https://i.imgur.com/yFkiZuG.png')
	.addFields(
		{ name: 'Volledige naam:', value: 'Koopa Troopa', inline: true},
		{ name: 'Geslacht:', value: 'Male, Female', inline: true},
		{ name: 'Age:', value: 'Niet bekend', inline: true},
        { name: 'Birthday:', value: 'Unknown', inline: true},
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Height:', value: '120 cm', inline: true},
		{ name: 'Weight:', value: 'Light', inline: true},
		{ name: 'Eerste verschijning:', value: 'Super Mario Bros', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Girlfriend:', value: 'Koopie Koo', inline: true },
		{ name: 'Bestfriend:', value: 'Goomba and Koopa were best friends until Goomba quit being a Koopa Army servant. Now Goomba and Koopa both refer to each other as good friends.', inline: true },
		{ name: 'Enemy:', value: '-', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Colors:', value: 'Green and Red', inline: true },
	)
	.setTimestamp()

channel.send(embed);

  }
}