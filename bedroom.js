class Bedroom extends Phaser.Scene {
    constructor(){
        super({key:"Example1"})
    }

    preload(){
        this.load.image('daredevil', 'assets/superman.jpg');
    }
    create(){
        this.image = this.add.image(500,400, 'daredevil');
    }
}