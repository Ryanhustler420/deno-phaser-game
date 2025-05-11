import { Scene } from 'phaser';
import { Player } from '../../entities/Player';

export class Play extends Scene
{

    player: Player;
    ground: Phaser.GameObjects.TileSprite;
    startTrigger: SpriteWithDynamicBody;

    get canvasHeight () {
      return this.game.config.height as number;
    }

    get canvasWidth () {
      return this.game.config.width as number;
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

      this.physics.add.overlap(this.startTrigger, this.player, () => {
        if (this.startTrigger.y === 40) {
          this.startTrigger.body.reset(0, this.canvasHeight);
          return;
        }

        this.startTrigger.body.reset(9999, 9999); // outside the game window
        const rollOutEvent = this.time.addEvent({
          delay: 1000/60, // 16.66666... 60 FPS
          loop: true,
          callback: () => {
            this.player.setVelocityX(80);
            this.ground.width += (17*2);

            if (this.ground.width >= this.canvasWidth) {
              rollOutEvent.remove();
              this.ground.width = this.canvasWidth;
              this.player.setVelocityX(0);
            }
          }
        });
      });
    }

    createPlayer()
    {
      this.player = new Player(this, 0, this.canvasHeight);
    }

    createEnvironment()
    {
      this.ground = this.add
        .tileSprite(0, this.canvasHeight, 88, 26, 'ground')
        .setOrigin(0, 1);
    }

}