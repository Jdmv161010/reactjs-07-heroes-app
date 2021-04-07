import { heroes } from "../components/data/heroes";

export const getHeroesByName = (superhero = "") => {
  if (superhero === "") {
    return [];
  }

  superhero = superhero.toLowerCase();
  return heroes.filter((heroe) =>
    heroe.superhero.toLowerCase().includes(superhero)
  );
};
