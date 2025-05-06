import { Scene } from 'phaser';

export class Play extends Scene
{

    get canvasHeight () {
      return this.game.config.height as number;
    }

    constructor ()
    {
        super('Play');
    }

    create ()
    {
      this.add
        .tileSprite(0, this.canvasHeight, 88, 26, 'ground')
        .setOrigin(0, 1);
    }
}