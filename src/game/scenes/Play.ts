import { Scene } from 'phaser';

export class Play extends Scene
{
    constructor ()
    {
        super('Play');
    }

    create ()
    {
      this.add
        .tileSprite(0, 340, 88, 26, 'ground')
        .setOrigin(0, 1);
    }
}