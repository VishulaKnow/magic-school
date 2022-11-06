import { Card } from "../../../domain/card/card";
import "./card.css";

interface CardViewProps {
    card: Card;
}

export const CardView: React.FC<CardViewProps> = (props) => {
    return (
        <div className="card">
            <div className="card-name">Card Name</div>
        </div>
    );
};
