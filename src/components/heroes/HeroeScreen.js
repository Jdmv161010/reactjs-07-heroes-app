import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroeById } from "../../selector/getHeroeById";

const heroeImgs = require.context("../../assets/heroes", true);

export const HeroeScreen = ({ history }) => {
  // const params = useParams();
  const { heroeId } = useParams();

  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  if (!heroe) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          //src={`../assets/heroes/${id}.jpg`}
          src={heroeImgs(`./${id}.jpg`).default}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {first_appearance}
          </li>
        </ul>
        <h5> Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-primary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
