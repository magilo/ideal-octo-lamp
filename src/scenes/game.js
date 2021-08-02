import Card from '../helpers/card';
import Zone from '../helpers/zone';
import Player from '../helpers/player';
import PlayArea from '../helpers/playarea';
import Deck from '../helpers/deck';

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
    const worldHeight = this.cameras.main.height;
    const worldWidth = this.cameras.main.width;
    // console.log('world size', worldWidth, worldHeight)
    let self = this;
    const allPlayers = ["Jessie", "James", "Meowth", "You"]
    const playerData = {};

    this.player = new Player(this);

    this.makePlayers = () => {
      for (let i = 0; i < allPlayers.length; i++) {
        let playerText = this.player.renderPlayer(90, 60 + (i * 60), allPlayers[i]);
        playerData[allPlayers[i]] = playerText;
      }
    }
    self.makePlayers();//call function above

    this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();




    this.playArea = new PlayArea(this);
    this.areaOutline = this.playArea.renderArea(worldWidth - 700, 50);

    this.newDeck = new Deck(this);
    this.deck = this.newDeck.getDeck();
    this.newDeck.shuffle(this.deck);
    // console.log(this.deck)
    //this.newDeck.renderCard(5, 650, this.deck[0]);




    this.dealCards = () => {
      for (let i = 0; i < this.deck.length; i += 13) {
        let section = this.deck.slice(i, i + 13);
        let playerIdx = i / 13;
        this.data.set(allPlayers[playerIdx], section);
        this.player.updateHand(this.data);

        //let playerCard = new Card(this);
        //playerCard.render(150 + (i * 20), 650, 'cyanCardFront');
      }

    }

    this.renderHand = () => {
      let yourHand = this.data.get('You')
      let playerCard = new Card(this);
      let counter = 0
      for (let i = 0; i < yourHand.length; i++) {

        //this.newDeck.renderCard(100 + (i * 100), 600, yourHand[i]);
        let card = playerCard.renderCard(50 + (i * 90), 600, yourHand[i]);
        card.on('pointerdown', function () {



          card.setColor('#ffa812');
          console.log(card)
        });
      }
    }


    this.dealText.on('pointerdown', function () {
      self.dealCards();
      self.renderHand();

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





    // this.input.on('dragstart', function (pointer, gameObject) {
    //   gameObject.setTint(0xff69b4);
    //   self.children.bringToTop(gameObject);
    // })

    // this.input.on('dragend', function (pointer, gameObject, dropped) {
    //   gameObject.setTint();
    //   if (!dropped) {
    //     gameObject.x = gameObject.input.dragStartX;
    //     gameObject.y = gameObject.input.dragStartY;
    //   }
    // })

    // this.input.on('drop', function (pointer, gameObject, dropZone) {
    //   dropZone.data.values.cards++;
    //   gameObject.x = (dropZone.x - 350) + (dropZone.data.values.cards * 50);
    //   gameObject.y = dropZone.y;
    //   gameObject.disableInteractive();
    // })

    // this.zone = new Zone(this);
    // this.dropZone = this.zone.renderZone();
    // this.outline = this.zone.renderOutline(this.dropZone);

  }

  update() {
  }
}
