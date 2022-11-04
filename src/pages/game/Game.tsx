import { CardView } from "../../components/card/card";
import { PlayerBoard } from "../../components/player/playersBoard";
import { SupremeSorcer } from "../../domain/card/supremeSorcer";
import { PlayerImpl } from "../../domain/player/player";
import "./game.css";

export const Game: React.FC = () => {
    const players = [
        new PlayerImpl({ name: "Supreme sorcer", initialCard: new SupremeSorcer() }),
        new PlayerImpl({ name: "Black bird", initialCard: new SupremeSorcer() })
    ];
    const card = new SupremeSorcer();

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
