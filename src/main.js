const sceneImports = import.meta.glob('./scenes/*.js');

async function init()
{
  const scenes = [];
  
  for (const path in sceneImports) {
    const module = await sceneImports[path](); // await the import
    scenes.push(module.default); // push the default export (your scene class)
  }

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // backgroundColor: '#000',
    physics: {
      default: 'arcade',
    },
    scene: scenes
  };
  
  return new Phaser.Game(config);
}

const game = init();