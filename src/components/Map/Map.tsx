import React from "react";
import { SVGLink } from "./utils";

import Background from "./layers/Background";
import Cars from "./layers/Cars";
import People from "./layers/People";
import Hedge from "./layers/Hedge";
import ParkDecorations from "./layers/ParkDecorations";
import * as Shop from "./layers/Shop";
import * as Fair from "./layers/Fair";
import * as Lector from "./layers/Lector";
import * as Cinema from "./layers/Cinema";
import * as GameZone from "./layers/GameZone";
import * as SandBox from "./layers/SandBox";
import * as RoundTable from "./layers/RoundTable";
import * as Consultations from "./layers/Consultations";
import * as MasterClasses from "./layers/MasterClasses";

import "./styles.css";

export const Map: React.FC = () => {
  return (
    <svg viewBox="0 0 1177 589" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Background />
      <Cars />
      <SVGLink to="/lector" className="group">
        <Lector.Building />
        <Lector.Badge />
      </SVGLink>
      <Lector.Trees />
      <SVGLink to="/cinema" className="group">
        <Cinema.Building />
        <Cinema.Badge />
      </SVGLink>
      <SVGLink to="/shop" className="group">
        <Shop.Building />
        <Shop.Badge />
      </SVGLink>
      <Hedge />
      <ParkDecorations />
      <SVGLink to="/consultations" className="group">
        <Consultations.Building />
        <Consultations.Badge />
      </SVGLink>
      <SVGLink to="/fair" className="group">
        <Fair.Building />
        <Fair.Badge />
      </SVGLink>
      <SVGLink to="/master-classes" className="group">
        <MasterClasses.Building />
        <MasterClasses.Badge />
      </SVGLink>
      <People />
      <SVGLink to="/round-table" className="group">
        <RoundTable.Building />
        <RoundTable.Badge />
      </SVGLink>
      <SVGLink to="/sandbox" className="group">
        <SandBox.Building />
        <SandBox.Badge />
      </SVGLink>
      <SVGLink to="/gamezone" className="group">
        <GameZone.Building />
        <GameZone.Badge />
      </SVGLink>
    </svg>
  );
};
