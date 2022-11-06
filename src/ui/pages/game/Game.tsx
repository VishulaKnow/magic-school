import { CardView } from "../../components/card/card";
import { PlayerBoard } from "../../components/player/playersBoard";
import "./game.css";
import { session } from "../../..";

export const Game: React.FC = () => {
    const players = session.game.getAllPlayers();
    const card = session.game.getCurrentPlayer().getCard();

    return (
        <div className="game-page">
            <div className="game-page-top">
                <div className="game-player-board">
                    <PlayerBoard players={players}></PlayerBoard>
                </div>
            </div>
            <div className="game-page-bottom">
                <div className="game-card">
                    <CardView card={card}></CardView>
                </div>
            </div>
        </div>
    );
};
