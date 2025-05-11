import { Scene } from 'phaser';
import { Player } from '../../entities/Player';

export class Play extends Scene
{

    player: Player;
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

      this.physics.add.overlap(this.startTrigger, this.player, () => {
        console.log("COLISION!");
      });
    }

    createPlayer()
    {
      this.player = new Player(this, 0, this.canvasHeight);
    }

    createEnvironment()
    {
      this.add
        .tileSprite(0, this.canvasHeight, 88, 26, 'ground')
        .setOrigin(0, 1);
    }

}