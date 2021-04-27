const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'Luigi',
    permissions: ["CONNECT"],
    aliases: ['luigi'],  
    description: "this is Luigi!",
    execute(message, args, client){
        
    const {guild, channel} = message
 
    const embed = new MessageEmbed()
	.setColor('#3c8036')
	.setTitle('Luigi')
	.setAuthor('Luigi', 'https://cdn.discordapp.com/attachments/836270146309193778/836350811894054912/latest.png')
	.setDescription(" Luigi is een videospelpersonage gemaakt door Nintendo. Hij is de jongere en langere broer van Mario, en draagt een groen uniform en een groen petje met de letter 'L' erop. Hij helpt Mario vaak met opdrachten en heeft dezelfde vijand: de kwade Bowser.")
	// .addField('\u200b', '\u200b')
	.setThumbnail('https://cdn.discordapp.com/attachments/836270146309193778/836350811894054912/latest.png')
	.addFields(
		{ name: 'Volledige naam:', value: 'Luigi Mario', inline: true},
		{ name: 'Geslacht:', value: 'Male', inline: true},
		{ name: 'Age:', value: '37', inline: true},
        { name: 'Birthday:', value: 'July 26, 1983 (Leo)', inline: true},
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Height:', value: "4'5-5'2", inline: true},
		{ name: 'Weight:', value: '183 lb. (83 kg)', inline: true},
		{ name: 'Eerste verschijning:', value: 'Mario Bros', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Girlfriend:', value: 'Princess Daisy', inline: true },
		{ name: 'Bestfriend:', value: 'Brother: Mario', inline: true },
		{ name: 'Enemy:', value: 'Bowser, Bowser Jr and the rest of his kids. Sometimes Waluigi and Wario.', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Afkomst', value: 'Italy', inline: true },
	)
	.setTimestamp()

channel.send(embed);

  }
}