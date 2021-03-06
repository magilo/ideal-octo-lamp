export default class Deck {
  constructor(scene) {
    //const suits = ["spades", "diamonds", "clubs", "hearts"];
    //const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suitsUnicode = {
      spades: 'A',
      diamonds: 'C',
      clubs: 'D',
      hearts: 'B'
    }
    const valuesUnicode = {
      A: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 'A',
      J: 'B',
      Q: 'D',
      K: 'E'
    }

    this.getDeck = () => {
      const deck = new Array();
      for (const s in suitsUnicode) {
        for (const v in valuesUnicode) {
          const card = {
            value: v,
            suit: s,
            unicode: '0x1F0' + suitsUnicode[s] + valuesUnicode[v]
          }
          deck.push(card);
        }
      }
      return deck
    }

    // this.getDeck = () => {
    //   const deck = new Array();
    //   for (let s = 0; s < suits.length; s++) {
    //     for (let v = 0; v < values.length; v++) {
    //       const card = { value: values[v], suit: suits[s] };
    //       deck.push(card);
    //     }
    //   }
    //   return deck
    // }

    this.shuffle = (deck) => {
      // for 1000 turns
      // switch the values of two random cards
      for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
      }
      return deck;
    }

    // this.renderCard = (x, y, card) => {
    //   let color;
    //   console.log(card)
    //   let unicode = card.unicode;

    //   let cardIcon = scene.add.text(x, y, [String.fromCodePoint(unicode)]).setFontSize(140).setFontFamily('Arial').setColor('#00ffef').setInteractive();
    //   scene.input.setDraggable(cardIcon);
    // }

    this.renderDeck = (deck) => {
      let base = '0x1F0'

      let input = base + suitsUnicode.spades + valuesUnicode.A
      console.log('input', input)

      // let cardIcon = scene.add.text(5, 5, [String.fromCodePoint(input)]).setFontSize(150).setFontFamily('Arial').setColor('#e51a4c').setInteractive();

      for (let i = 0; i < deck.length; i++) {
        //let icon = '';
        let card = deck[i]
        //console.log('card', card)
        let cardUnicode = base + suitsUnicode[card.suit] + valuesUnicode[card.value]
        let cardIcon = scene.add.text(5 + (i * 60), 650, [String.fromCodePoint(cardUnicode)]).setFontSize(150).setFontFamily('Arial').setColor('#e51a4c').setInteractive();
        scene.input.setDraggable(cardIcon);
      }

      //return cardIcon;
    }

  }
}

