import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { translate } from "../i18n";
import GameCard from "../components/GameCard";

const MyLibrary: React.FC = () => {
  const localUserTest = JSON.parse(localStorage.getItem("userData") || "");
  const { data } = useSelector((state: RootState) => state.data);
  const { language } = useSelector((state: RootState) => state.language);
  const [localUser, setLocalUser] = useState<any>(localUserTest);

  const renderList = (games: any): JSX.Element[] => {
    return games.map((game: any) => (
      <GameCard key={game.Id} game={game} purchased={true} />
    ));
  };

  return (
    <>
      <div>
        <h1>my purchased games</h1>
        <div>{renderList(localUser.purchasedGames)}</div>
        <h1>my installed games</h1>
        <div>{renderList(localUser.installedGames)}</div>
      </div>
      ;
    </>
  );
};

export default MyLibrary;
