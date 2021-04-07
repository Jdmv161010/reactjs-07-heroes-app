import { heroes } from "../components/data/heroes";

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
