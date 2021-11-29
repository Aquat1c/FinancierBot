module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.distube.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        
    function toReadableTime(given){
        var time = given;
        var minutes = "0" + Math.floor(time / 60);
        var seconds = "0" + (time - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    }

    const current = Math.floor(client.distube.Song.duration / 1000) //ms --> seconds
    //const end = client.distube.Song.duration //video in seconds
    
    const value = (current * (100 / end) / 5)
    
    bar.default.full = "█";
    bar.default.empty = " - ";
    bar.default.start = "";
    bar.default.end = "";
    bar.default.text = "{bar}";

`${toReadableTime(current)} - [${bar.progress(20, value)}] - ${toReadableTime(end)}` //This would go in your embed

            },

};