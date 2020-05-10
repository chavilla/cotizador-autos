import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Parrafo=styled.p`
    text-align:center;
    margin-top:1rem;
    background-color:rgb(127,224,237);
    padding:1rem;
`;

const Resultado = ({cotizacion}) => {
    return ( 
        (cotizacion===0 
            ? <Parrafo>Elige marca, plan y año del modelo</Parrafo> 
            : <Parrafo>
                El total es $ {cotizacion}
              </Parrafo>
        )

     );
}

Resultado.propTypes={
    cotizacion:PropTypes.number.isRequired
}
 
export default Resultado;