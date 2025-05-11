export class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "dino-idle");
        
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.init();
    }

    init()
    {
        this
            .setOrigin(0, 1)
            .setGravityY(5000)
            .setScale(.7)
            .setCollideWorldBounds(true)
            .setBodySize(44, 92);
        
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }
    
    update(): void {
        
    }
}