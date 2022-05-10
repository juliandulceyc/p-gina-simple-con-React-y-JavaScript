import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//Componente informacion 
import Informacion from "../Información/Informacion";

function Tarjeta() {
  return (
    <div>
      <Card>
        <CardContent>
          <Informacion/>
        </CardContent>
      </Card>
    </div>
  );
}

export default Tarjeta;