export class Player extends Phaser.Physics.Arcade.Sprite
{
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "dino-idle");
        
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.init();
    }

    init()
    {
        this.cursors = this.scene.input.keyboard?.createCursorKeys();
        this
            .setOrigin(0, 1)
            .setGravityY(5000)
            .setScale(.7)
            .setCollideWorldBounds(true)
            .setBodySize(44, 92);
        
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
    }
    
    update(): void {
        const isSpaceJustDown = Phaser.Input.Keyboard.JustDown(this.cursors!.space);
        const onFloor = (this.body as Phaser.Physics.Arcade.Body).onFloor();

        if (isSpaceJustDown && onFloor) {
            this.setVelocityY(-1600);
        }
    }
}