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
        this.load.image('ground', 'ground.png');
        this.load.image('dino-idle', 'dino-idle-2.png');
        this.load.spritesheet('dino-run', 'dino-run.png', {
            frameWidth: 88, // 352/4
            frameHeight: 94,
        });
    }

    create ()
    {
        this.scene.start("Play");
    }
}