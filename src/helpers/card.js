export default class Card {
  constructor(scene) {
    // this.render = (x, y, sprite) => {
    //   let card = scene.add.image(x, y, sprite).setScale(0.2, 0.2).setInteractive();
    //   scene.input.setDraggable(card);
    //   return card;
    // }

    this.renderCard = (x, y, card) => {
      let color;
      //console.log(card)
      let unicode = card.unicode;

      let cardIcon = scene.add.text(x, y, [String.fromCodePoint(unicode)]).setFontSize(140).setFontFamily('Arial').setColor('#00ffef').setInteractive();
      scene.input.setDraggable(cardIcon);
      return cardIcon
    }
  }
}

// export default class Card {
//   constructor(scene) {
//     this.render = (x, y, sprite) => {
//       let card = scene.add.image(x, y, sprite).setScale(0.2, 0.2).setInteractive();
//       scene.input.setDraggable(card);
//       return card;
//     }
//   }
// }
