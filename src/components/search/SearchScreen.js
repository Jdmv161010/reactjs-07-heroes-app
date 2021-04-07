import React, { useMemo } from "react";
import queryString from "query-string";

import { useLocation } from "react-router-dom";
import { HeroesCard } from "../heroes/HeroesCard";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selector/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);

  const [{ searchText }, handelInputChange] = useForm({ searchText: q });

  const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              name="searchText"
              value={searchText}
              type="text"
              autoComplete="off"
              placeholder="Find your hero"
              className="form-control"
              onChange={handelInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="aler alert-info">Search a hero</div>}

          {q !== "" && heroesFiltrados.length === 0 && (
            <div className="aler alert-danger">No a hero</div>
          )}

          {heroesFiltrados.map((heroe) => (
            <HeroesCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};
