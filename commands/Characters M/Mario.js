const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'Mario',
    permissions: ["CONNECT"],
    aliases: ['mario'],  
    description: "this is Mario!",
    execute(message, args, client){
        
    const {guild, channel} = message
 
    const embed = new MessageEmbed()
	.setColor('#f5250a')
	.setTitle('Mario')
	.setAuthor('Mario', 'https://i.imgur.com/XwLa2dh.jpg')
	.setDescription("Mario is een kleine, aardige, mollige, Italiaanse loodgieter, die woont in het Mushroom Kingdom. Mario staat er om bekend dat hij Bowsers plannen dwarsboomt aangezien Bowser Princess Peach wil kidnappen om zo over het het Mushroom Kingdom te kunnen heersen. Mario heeft naast Bowser ook nog andere vijanden en rivalen, zoals Bowsers kinderen, Donkey Kong (met wie hij later bevriend raakte) en Wario (zijn aartsrivaal). Mario is de mascotte van Nintendo")
	// .addField('\u200b', '\u200b')
	.setThumbnail('https://i.imgur.com/XwLa2dh.jpg')
	.addFields(
		{ name: 'Volledige naam:', value: 'Mario mario', inline: true},
		{ name: 'Geslacht:', value: 'Male', inline: true},
		{ name: 'Age:', value: '39', inline: true},
        { name: 'Birthday:', value: 'October 11, 1981 (Libra)', inline: true},
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Height:', value: '155cm', inline: true},
		{ name: 'Weight:', value: '198 lb. (90 kg)', inline: true},
		{ name: 'Eerste verschijning:', value: 'Donkey Kong (1981) ', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Girlfriend:', value: 'Princess Peach', inline: true },
		{ name: 'Bestfriend:', value: 'Brother: Luigi, lifelong friend: Yoshi', inline: true },
		{ name: 'Enemy:', value: 'Bowser, Bowser Jr and the rest of his kids. Sometimes Waluigi and Wario.', inline: true },
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Afkomst', value: 'Italy', inline: true },
	)
	.setTimestamp()

channel.send(embed);

  }
}