module.exports = {
    name: 'hoi',
    permissions: ["CONNECT"],
    description: "this is a hoi command!",
    execute(message, args, client){
        message.channel.send('doei!');
    }
}