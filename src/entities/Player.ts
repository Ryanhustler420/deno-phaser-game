export class Player extends Phaser.Physics.Arcade.Sprite
{
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "dino-idle");
        
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.init();

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
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
        
        this.registerAnimations();
    }
    
    update(): void {
        const isSpaceJustDown = Phaser.Input.Keyboard.JustDown(this.cursors!.space);
        const onFloor = (this.body as Phaser.Physics.Arcade.Body).onFloor();

        if (isSpaceJustDown && onFloor) {
            this.setVelocityY(-1600);
        }

        if (this.body!.deltaAbsY() > 2.0) {
            this.anims.stop();
            this.setTexture("dino-run", 0); // lock the sprite to 1st frame
        } else {
            this.playRunAnimation();
        }
    }

    playRunAnimation()
    {
        this.play("dino-run-anim", true);
    }

    registerAnimations()
    {
        this.anims.create({
            key: "dino-run-anim",
            frames: this.anims.generateFrameNumbers('dino-run', {
                start: 2,
                end: 3
            }),
            frameRate: 10,
            repeat: -1, // infinity
        });
    }
}