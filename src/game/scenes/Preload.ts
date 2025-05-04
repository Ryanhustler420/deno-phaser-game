import { Scene } from 'phaser';

export class Preload extends Scene
{
    constructor ()
    {
        super('Preload');
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.image('gound', 'ground.png');
    }

    create ()
    {
        this.scene.start("Play");
    }
}