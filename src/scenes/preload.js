export default class Preload extends Phaser.Scene{

    constructor(config){
        super({key: 'Preload', files:[{type: 'image', key: 'logo', url: 'assets/images/gwkLogo.png'}, {type:'image', key:'logoBar', url: 'assets/images/gwkPreloadBar.png'}]});



    }

    preload(){
        this.logo = this.add.image(window.innerWidth/2, window.innerHeight/2, 'logo').setScale(.6);
        console.log(this.logo.displayWidth);
        this.barLogo = this.add.image(this.logo.x-(this.logo.displayWidth*.4), (this.logo.displayHeight), 'logoBar').setScale(.71).setOrigin(0,0);

        var barCover = this.add.graphics();
        var barX = this.barLogo.x;
        var barDisplayWidth = this.barLogo.displayWidth;
        var barDisplayHeight = this.barLogo.displayHeight;
        var barY = this.barLogo.y;

        this.load.on('progress', function (value){

            barCover.clear();
            barCover.fillStyle(0x000000, 1);
            console.log(barX);
            console.log(barDisplayWidth);
            barCover.fillRect(barX + (barDisplayWidth * value), barY, barDisplayWidth*(1-value), barDisplayHeight);
            //barCover.fillRect(30, 200, 800 * value, 60);
        });

        this.sys.game.events.on('resize', this.resize, this);

        this.resize();

        this.events.once('shutdown', this.shutdown, this);

        this.load.spritesheet('playerE', 'assets/images/BODY_EAST.png', {frameWidth: 64, frameHeight:64});
        this.load.spritesheet('playerW', 'assets/images/BODY_WEST.png', {frameWidth: 64, frameHeight:64});
        this.load.spritesheet('playerN', 'assets/images/BODY_NORTH.png', {frameWidth: 64, frameHeight:64});
        this.load.spritesheet('playerS', 'assets/images/BODY_SOUTH.png', {frameWidth: 64, frameHeight:64});
        this.load.image('gui', 'assets/images/panel_brown.png');
        this.load.image('ProjectUtumno_full', 'assets/images/ProjectUtumno_full.png');
        this.load.image('townTiles1', 'assets/images/town.png');
        this.load.image('backgroundTiles2', 'assets/images/trees_plants.png');
        this.load.image('backgroundTiles1', 'assets/images/trees_plants_rocks.png');
        this.load.image('title', 'assets/images/title.png');
        this.load.tilemapTiledJSON('forest', 'assets/tilemaps/forest.json');
        this.load.tilemapTiledJSON('town', 'assets/tilemaps/town.json');
        this.load.image('button', 'assets/images/buttonLong_blue.png');
        this.load.image('buttonPressed', 'assets/images/buttonLong_blue_pressed.png');
    }

    create(){
        this.time.delayedCall(3000, this.callMenu, [], this);


    }

    resize(){
        this.logo.setPosition(window.innerWidth/2, window.innerHeight/2-150);
        this.barLogo.setPosition(this.logo.x-(this.logo.displayWidth*.4), (this.logo.displayHeight)+75);
        let cam = this.cameras.main;

        cam.setViewport(0, 0, window.innerWidth, window.innerHeight);

        cam.zoom = Math.min(window.innerWidth/1799, window.innerHeight/800)
    }

    shutdown(){
        this.sys.game.events.off('resize', this.resize, this);
    }

    callMenu(){
        this.scene.start('MainMenu');
    };

}

