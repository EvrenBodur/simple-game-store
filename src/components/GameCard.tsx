import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GameCardModal from "../components/GameCardModal";
import { purchase } from "../actions/purchase";
import { install } from "../actions/install";
import "../styles/GameCard.css";

interface GameCardProps {
  game: any;
  purchased?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, purchased }) => {
  const desc = game.Summary.slice(0, 75).concat("...");
  const dispatch = useDispatch<any>();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const gameCardModal = (): JSX.Element => {
    return (
      <GameCardModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        game={game}
      />
    );
  };

  const handlePurchase = (): void => {
    dispatch(purchase(game));
  };

  const handleInstall = (): void => {
    dispatch(install(game));
  };

  return (
    <div className="card-container">
      {isModalOpen && gameCardModal()}
      <div onClick={() => setIsModalOpen(!isModalOpen)} className="card-image">
        <img className="card-image" src={game.Cover} />
      </div>
      <div className="card-content">
        <h3>{game.Name}</h3>
        <p>{desc}</p>
      </div>
      <div className="card-sub-content">
        <span>
          {"Price :"} {game.Price} {"$"}
        </span>
        {purchased ? (
          <button onClick={handleInstall}>Install</button>
        ) : (
          <button onClick={handlePurchase}>Purchase</button>
        )}
      </div>
    </div>
  );
};

export default GameCard;
