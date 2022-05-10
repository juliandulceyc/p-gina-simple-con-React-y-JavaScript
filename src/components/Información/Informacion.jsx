import React from 'react'
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Informacion() {
  return (
    <div>
      <Typography variant="h1">Titulo</Typography>
          <Typography variant="h4">Subtítulo en React</Typography>
          <CardMedia 
            component="img" 
            image="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/cine.batanga.com/files/por-que-tobey-maguire-nunca-debio-haber-interpretado-a-spiderman.jpg"
            height="800"
          />
    </div>
  )
}

export default Informacion