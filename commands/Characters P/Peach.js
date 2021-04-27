const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'Peach',
    permissions: ["CONNECT"],
    aliases: ['peach', 'PrincessPeach', 'Princess Peach'],  
    description: "this is Peach!",
    execute(message, args, client){
        
    const {guild, channel} = message
 
    const embed = new MessageEmbed()
	.setColor('#ff96de')
	.setTitle('Princess Peach (Tristan)')
	.setAuthor('Princess Peach', 'https://cdn.discordapp.com/attachments/836270146309193778/836625263735210032/1565.png')
	.setDescription("Princess Peach Toadstool is een personage in de computerspelserie Mario van Nintendo, die vaak de 'dame in nood'-rol speelt in de avonturenserie. Peach is de menselijke prinses uit het fictieve Mushroom Kingdom, waar de vele spellen plaatsvinden.")
	// .addField('\u200b', '\u200b')
	.setThumbnail('https://cdn.discordapp.com/attachments/836270146309193778/836625263735210032/1565.png')
	.addFields(
		{ name: 'Volledige naam:', value: 'Princess Peach Toadstool', inline: true},
		{ name: 'Geslacht:', value: 'female', inline: true},
		{ name: 'Age:', value: '35', inline: true},
        { name: 'Birthday:', value: 'September 13, 1985', inline: true},
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Height:', value: "6'0", inline: true},
		{ name: 'Weight:', value: '60 kg (132 lbs)', inline: true},
		{ name: 'Eerste verschijning:', value: 'Super Mario Bros', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Boyfriend:', value: 'Mario', inline: true },
		{ name: 'Bestfriend:', value: 'Princess Daisy', inline: true },
		{ name: 'Enemy:', value: 'Bowser, Bowser Jr and the rest of his kids.', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Afkomst', value: "Mushroom Kingdom", inline: true },
	)
	.setTimestamp()

channel.send(embed);

  }
}