module.exports = {
    app: {
        px: '.r ',
 
        token: 'OTIyMjQ3ODQ1MDQ0NzAzMjQz.Yb-sPA.ddWnU8S-x1QdNYHKxiqZnjMrEE4',
        playing: 'Salthou 12.3 Shitensoku'

       
 
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
