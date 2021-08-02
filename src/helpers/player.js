export default class Player {
  constructor(scene) {
    this.renderPlayer = (x, y, name) => {
      let player = scene.add.text(x, y, '', { font: '16px Courier', fill: '#00ff00' });

      player.setText([
        name,
        "cards in hand: " + 0,
      ]);
      return player;
    }
    
  }
}


