export default class Player extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.inventory = [{'gold': 0}];
        this.container = this.scene.add.container(x-16, y-17);
        this.scene.physics.world.enable(this.container);
        this.container.body.setSize(32,48);
        }

    init(){
        this.scene.physics.add.existing(this);
        this.body.setSize(16,16);
        this.body.setOffset(24, 47);
    }

    move(cursors){
        this.equipUpdate();

        if((cursors.up.isDown || cursors.down.isDown) && cursors.left.isDown) {
            this.anims.play('left', true);
            if (cursors.up.isDown) {
                this.body.setVelocity(-100, -100);
            }else{
                this.body.setVelocity(-100, 100);
            }

        }else if((cursors.up.isDown || cursors.down.isDown) && cursors.right.isDown){
            this.anims.play('right', true);
            if(cursors.up.isDown){
                this.body.setVelocity(100, -100);
            }

            else{
                this.body.setVelocity(100, 100);
            }

        }else if(cursors.right.isDown){
            this.body.setVelocity(100, 0);
            this.anims.play('right', true);
        }else if(cursors.left.isDown){
            this.body.setVelocity(-100, 0);
            this.anims.play('left', true);
        }else if(cursors.up.isDown){
            this.body.setVelocity(0, -100);
            this.anims.play('up', true);
        }else if(cursors.down.isDown){
            this.body.setVelocity(0, 100);
            this.anims.play('down', true);
        }else{
            this.body.setVelocity(0,0);
            this.anims.play('stopped', true);
        }
    }

    equipUpdate(){
        this.container.setPosition(this.x - 16, this.y - 17);
        this.scene.add.text(this.container.x, this.container.y + 20, "Clothing" + this.item.x + " , " + this.item.y);
        this.scene.add.text(this.container.x, this.container.y + 40, "Container " + this.container.list.length);
        this.scene.add.text(this.container.x, this.container.y, "HERE IT IS" + this.container.x + " , " + this.container.y);
    }
    addToInventory(itemToAdd){

        for(let i = 0; i < this.inventory.length; i++){
            if(this.inventory[i].name === itemToAdd.name){
                this.inventory[i].quantity++;
            }else
                this.inventory.push(itemToAdd);
        }
    }

    equipItem(itemToEquip){
        for(let i = 0; i < this.inventory.length; i++){
            if(this.inventory[i].name === itemToEquip.name){
                this.inventory[i].equipped = true;
            }
        }
        this.buildEquipped();
    }

    buildEquipped(){
        //bump
        for(let i = 0; i < this.inventory.length; i++){
            if(this.inventory[i].equipped === true){
               this.item = this.scene.add.sprite(0, 0, this.inventory[i].image);
               this.container.add(this.item);
            }
        }
        console.log(this.container)

    }

}
