module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.distube.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (!client.distube.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already playing !`);

        const success = client.distube.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Song ${client.distube.getQueue(message).playing.title} resumed !`);
    },
};