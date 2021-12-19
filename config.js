module.exports = {
    app: {
        px: '.r ',
        playing: 'Fairy Fencer F Advent Dark Force'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Financier',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
