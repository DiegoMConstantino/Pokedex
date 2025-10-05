import React from "react";
import Stat from "./Stat";

const Stats = ({stats}) => {
    return (
        <div className="stats">
            <Stat parameter={"Altura"} value={stats.height} units={"ft"} />
            <Stat parameter={"Peso"} value={stats.weight} units={"kg"} />
            <Stat parameter={"Base Exp"} value={stats.exp}  />
            <Stat parameter={"HP"} value={stats.hp} />
            <Stat parameter={"Ataque"} value={stats.attack} />
            <Stat parameter={"Defesa"} value={stats.defence} />
            <Stat parameter={"Spl Ataque"} value={stats.splAttack} />
            <Stat parameter={"Spl Defesa"} value={stats.splDefence} />
            <Stat parameter={"Velocidade"} value={stats.speed} />
        </div>
    );
};

export default Stats;