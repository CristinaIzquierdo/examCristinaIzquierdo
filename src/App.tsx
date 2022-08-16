import { Container } from "inversify";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Board } from "./Board";
import { Game } from "./Game";
import { Player } from "./Player";

export const App = <>Hello world!</>;

export function runApp(container: Container) {
  ReactDOM.render(App, document.getElementById("root"));
  const newGame = new Game(
    new Board(),
    new Player("Player A"),
    new Player("Player B")
  );
  newGame.getBoard().setBottomRightCell(1);
  newGame.getPlayerA().setPiecesForPlayer(1);
  newGame.getPlayerB().setPiecesForPlayer(2);
  newGame.setGameOver(false);
  newGame.getPlayerA().setPiecesInBoard(newGame.getBoard());
  newGame.getPlayerB().setPiecesInBoard(newGame.getBoard());
}
