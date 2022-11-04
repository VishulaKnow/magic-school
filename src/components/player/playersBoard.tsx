import { Player } from "../../domain/player/player";
import { PlayerView } from "./player";
import "./playerBoard.css";

interface PlayerBoardViewProps {
    players: Player[];
}

export const PlayerBoard: React.FC<PlayerBoardViewProps> = (props) => {
    return (
        <div className="player-board">
            <h3 className="players-title">Players:</h3>
            {props.players.map((p) => (
                <PlayerView player={p} key={p.getName()}></PlayerView>
            ))}
        </div>
    );
};
