import React from "react";
import styled from "@emotion/styled";
import {primerMayuscula} from '../helpers';
import PropTypes from 'prop-types';

const Contenedor=styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838F;
    color:#FFF;
    margin-top:1rem;
`;

const Resumen = ({ datos }) => {
  const { marca, plan, year } = datos;
  if (marca === "" || year === "" || plan === "") return null;

  return (
    <Contenedor>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)} </li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año: {primerMayuscula(year)}</li>
      </ul>
    </Contenedor>
  );
};

Resumen.propTypes={
    datos:PropTypes.object.isRequired
}

export default Resumen;
