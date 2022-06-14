import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import GameCard from "../components/GameCard";
import { getGamesData } from "../actions/data";
import * as actions from "../actions/interfaces";
import "../styles/Store.css";

const Store: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { data } = useSelector((state: RootState) => state.data);
  const { user } = useSelector((state: RootState) => state.auth);

  const renderList = (): JSX.Element[] => {
    return data.map((game: any) => <GameCard key={game.Id} game={game} />);
  };

  useEffect(() => {
    dispatch(getGamesData());
  }, []);

  return (
    <div className="store-container">
      <div className="game-card-container">{renderList()}</div>
      <div className="category-container">kategoriler</div>
    </div>
  );
};

export default Store;
