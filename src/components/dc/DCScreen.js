import React from "react";
import { HeroesList } from "../heroes/HeroesList";

export const DCScreen = () => {
  return (
    <div>
      <h1>DC</h1>
      <hr/>
      <HeroesList publisher="DC Comics" />
    </div>
  );
};
