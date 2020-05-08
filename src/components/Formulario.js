import React,{useState} from 'react';
import styled from '@emotion/styled';
import {getDiferenciaYear} from '../helpers';

//Use styled components

const Campo=styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
`;

const Label=styled.label`
    flex:0 0 100px;
`;

const Select=styled.select`
    display: block;
    width:100%;
    padding:1rem 0;
    border:1px solid #e1e1e1;
    -webkit-appearance:none;
`;

const InputRadio=styled.input`
    margin: 0 1rem;
`;

const Boton=styled.button`
    background-color:#00838F;
    font-size:16px;
    width:100%;
    padding:1rem;
    color:#fff;
    text-transform:uppercase;
    font-weight:bold;
    transition: background-color .3s ease; 
    border: none;
    margin-top:2rem;
    &:hover{
        background-color:#26C6DA;
        cursor: pointer;
    }
`;

const Error=styled.div`
background-color:red;
color:white;
width:100%;
margin-bottom:1rem;
padding:1rem;
`;

/* Fin styled components */

const Formulario = () => {

    /* Crear un objeto datos para almacenar marca, año, y plan */
    const [datos, setdatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    /* state paa el error */
    const [error, seterror] = useState(false);

    /* Extraemos primero los valores */
    const {marca,year,plan}=datos;

    /* Leer datos del formulario */
    const getInformacion=e=>{
        setdatos({
            ...datos,
            [e.target.name]:e.target.value
        });
    }

    /* Validar la información del formulario */
    const cotizar=e=>{
        e.preventDefault();
        if (marca.trim()==='' || plan.trim()==='' || year.trim()==='') {
           seterror(true);
           return;
        }
        seterror(false);

        /* Iniciamos con una base de 2000 */
        let resultado=2000;

        /* Obtener la diferencia de año */
        const diferencia=getDiferenciaYear(year);
        resultado-=((diferencia*3)*resultado)/100;
        console.log(resultado);
        
        
        /* por cada año restamos el 3% */
        /* americano 15% */
        /* asiatico 5% */
        /* europeo 30% */
        /* basico aumenta 20% */
        /* completo aumenta el 50% */
    }

    return ( 
        <form onSubmit={cotizar}>
            {error? <Error>Campos obligatorios</Error>:null}
            <Campo>
                <Label>Marca:</Label>
                <Select
                name="marca"
                value={marca}
                onChange={getInformacion}
                >
                    <option value="">--Seleccionar--</option>
                    <option value="americano">--Americano--</option>
                    <option value="europeo">--Europeo--</option>
                    <option value="asiatico">--Asiático--</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año:</Label>
                <Select
                name="year"
                value={year}
                onChange={getInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan==='basico'}
                    onChange={getInformacion}
                /> Básico
                 <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan==='completo'}
                    onChange={getInformacion}

                /> Completo
            </Campo>
            <Boton type="submit">Completar</Boton>
        </form>
     );
}
 
export default Formulario;