module.exports = {
    app: {
        px: '.r ',
        token: 'ODU2MjU2OTMxNTU5NjM2OTkz.YM-ZaA.YVEDpcyjI1u50QzVHn3TXnR4Uco',
        playing: 'something'
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
