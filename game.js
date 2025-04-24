const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  backgroundColor: '#000',
  physics: {
    default: 'arcade',
  },
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);

function preload() { }
function create() { }
function update() { }