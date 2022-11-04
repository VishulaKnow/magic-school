import { Player } from "../../domain/player/player";

interface PlayerViewProps {
    player: Player;
}

export const PlayerView: React.FC<PlayerViewProps> = (props) => {
    const { player } = props;

    return (
        <div className="player-info">
            <span className="player-name">{player.getName()}</span>
        </div>
    );
};
