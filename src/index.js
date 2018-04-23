import 'phaser'
import Preload  from './scenes/preload'
import MainMenu from './scenes/MainMenu'
import level1 from './scenes/Level1'
import townMap from './scenes/Town'

const config = {
    width: 800,
    height: 600,
    parent:'phaser-app',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        Preload,level1, MainMenu, townMap
    ]
};

let game = new Phaser.Game(config);

window.onresize = function () {
    game.renderer.resize(window.innerWidth, window.innerHeight);
    game.events.emit('resize');
};