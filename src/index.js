import Phaser from "phaser";
import Game from "./scenes/game";

const config = {
    type: Phaser.AUTO,
    parent: "game-area",
    width: 1280,
    height: 780,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Game
    ]
};

const game = new Phaser.Game(config);
