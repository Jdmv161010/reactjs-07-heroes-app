import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selector/getHeroesByPublisher";
import { HeroesCard } from "./HeroesCard";

export const HeroesList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((heroe) => (
        <HeroesCard key={heroe.id} {...heroe}></HeroesCard>
      ))}
    </div>
  );
};
