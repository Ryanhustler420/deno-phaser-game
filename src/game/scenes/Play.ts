import { Scene } from 'phaser';

export class Play extends Scene
{
    constructor ()
    {
        super('Play');
    }

    create ()
    {
        this.add.image(512, 384, 'gound');
    }
}