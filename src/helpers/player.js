export default class Player {
  constructor(scene) {
    this.renderPlayer = (x, y, name, gameData) => {
      //console.log('inside renderPlayer', gameData)
      let player = scene.add.text(x, y, '', { font: '16px Courier', fill: '#00ff00' });

      player.setText([
        name,
        "cards in hand: " + 0,
      ]);
      return player;
    }

    this.updateHand = (gameData) => {
      console.log('inside updateHand', gameData)
    }

  }
}


