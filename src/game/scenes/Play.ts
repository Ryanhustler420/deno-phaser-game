import { Scene } from 'phaser';

export class Play extends Scene
{

    player: SpriteWithDynamicBody;
    startTrigger: SpriteWithDynamicBody;

    get canvasHeight () {
      return this.game.config.height as number;
    }

    constructor ()
    {
        super('Play');
    }

    create ()
    {
      this.createEnvironment();
      this.createPlayer();

      this.startTrigger = this.physics.add.sprite(0, 40, "null")
        .setAlpha(0)
        .setOrigin(0, 1);

      this.registerPlayerControl();

      this.physics.add.overlap(this.startTrigger, this.player, () => {
        console.log("COLISION!");
      });
    }

    createPlayer()
    {
      this.player = this.physics.add.sprite(0, this.canvasHeight, "dino-idle").setOrigin(0, 1).setScale(.7);
      this.player
        .setGravityY(5000)
        .setCollideWorldBounds(true)
        .setBodySize(44, 92);
    }

    createEnvironment()
    {
      this.add
        .tileSprite(0, this.canvasHeight, 88, 26, 'ground')
        .setOrigin(0, 1);
    }

    registerPlayerControl() {
      const spaceBar = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      spaceBar?.on("down", () => {
        this.player.setVelocityY(-1600);
      });
    }
}