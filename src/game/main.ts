import { Preload } from './scenes/Preload';
import { Play } from './scenes/Play';
import { AUTO, Game, Scale,Types } from 'phaser';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Types.Core.GameConfig = {
    type: AUTO,
    width: 1000,
    height: 340,
    pixelArt: true,
    transparent: true,
    physics: {
        default: 'arcade',
    },
    parent: 'game-container',
    // backgroundColor: '#028af8',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        Preload,
        Play
    ]
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;

// TypeKingGame
// TypeRaceGame

// create rough design for this game and how the screen should flow

// 10% of all collected amount - 10 x 3 = 30 = 3 rupees we'll take 27 13.5 will go to 1st and 2nd player and 3rd will lose the money
// open the side
// login/register with phone
// kyc validate the user
// deposit some amount into wallet
// click on start new game
// matchmaking started
// all will come together and match starts (their money on hold)
// match ends and result shows to each user
// credit their wallet and ends the match and show the join again.

// it's 100% skilled based game with T&C

// every key strok will be delayed to reach the server
// i think we need to ask gpt to figure out how to achive these
// also we need to design the UI with unity UI assets so that it look good
// we'll build the from raw, no major frameworks at all!


// we need 3 player to start this match
// user need to make sure they have above 30 WPM speed
// cheating will lead to account ban
// any bot uses will also lead to account ban
// you agree with our T&C

// Open site
// Loading Screen Show
// Click on login/signup - all on canvas
// once logged in user will redirect to a screen where
// user can click deposit at the top, and it will redirect
// user to razorpay page where they can click to deposit
// now user can click start match and it will start the 
// match making system and look for any one who is willing
// for x amount of match,

// player 1 selects a pool size and click join
// it will find another player which has same request
// if both found then new room gets created and 
// the prize money is deducted from each player account
// they start the match and when the match finished
// we'll show them the result
// this way we'll charge 10% of the prize pool
// rest will go to the player 1st and 2nd
// restart the game logic