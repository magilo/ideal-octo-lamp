import Card from '../helpers/card';
import Zone from '../helpers/zone';
import Player from '../helpers/player';

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'Game'
    });
  }

  preload() {
    this.load.image('cyanCardFront', 'src/assets/CyanCardFront.png');
    this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
    this.load.image('magentaCardFront', 'src/assets/MagentaCardFront.png');
    this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
  }

  create() {
    this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();

    let self = this;
    const worldHeight = this.cameras.main.height;
    const worldWeidth = this.cameras.main.width;
    console.log('world size', worldWeidth, worldHeight)

    this.dealCards = () => {
      for (let i = 0; i < 13; i++) {
        let playerCard = new Card(this);
        playerCard.render(150 + (i * 60), 650, 'cyanCardFront');
      }
    }

    this.dealText.on('pointerdown', function () {
      self.dealCards();
    })

    this.dealText.on('pointerover', function () {
      self.dealText.setColor('#ff69b4');
    })

    this.dealText.on('pointerout', function () {
      self.dealText.setColor('#00ffff');
    })

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    })

    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff69b4);
      self.children.bringToTop(gameObject);
    })

    this.input.on('dragend', function (pointer, gameObject, dropped) {
      gameObject.setTint();
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    })

    this.input.on('drop', function (pointer, gameObject, dropZone) {
      dropZone.data.values.cards++;
      gameObject.x = (dropZone.x - 350) + (dropZone.data.values.cards * 50);
      gameObject.y = dropZone.y;
      gameObject.disableInteractive();
    })

    this.zone = new Zone(this);
    this.dropZone = this.zone.renderZone();
    this.outline = this.zone.renderOutline(this.dropZone);

    const allPlayers = ["Jessie", "James", "Meowth", "You"]

    this.makePlayers = () => {
      for (let i = 0; i < allPlayers.length; i++) {
        let player = new Player(this);
        // playerCard.render(150 + (i * 60), 650, 'cyanCardFront');
        player.renderPlayer(90, 60 + (i * 60), allPlayers[i]);

      }
    }
    self.makePlayers();

  }

  update() {

  }
}
