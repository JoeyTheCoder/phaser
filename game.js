var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: [ Bedroom ]
};

var game = new Phaser.Game(config);