import { Scene } from 'phaser';

export class Play extends Scene
{

    player: SpriteWithDynamicBody;

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
      this.registerPlayerControl();
    }

    createPlayer()
    {
      this.player = this.physics.add.sprite(0, this.canvasHeight, "dino-idle").setOrigin(0, 1).setScale(.7);
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