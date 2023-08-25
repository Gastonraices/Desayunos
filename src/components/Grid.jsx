import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={12} columnSpacing={{ xs: 1, sm: 2, md: 9 }}>
        <Grid xs={12} sm={6} md={6}>
          <Link to={'categoria/aniversario'}>
            <Item Item className='img'>
                <Box p={15}>
                <h1>Aniversarios</h1>
                </Box>
            </Item>
          </Link>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <Link to={'categoria/cumpleaños'}>
            <Item Item className='img2'>
              <Box p={15}>
              <h1 >Cumpleaños</h1>
              </Box>
            </Item>
          </Link>
        </Grid>
        <Grid xs={12} sm={6} md={6}>
        <Link to={'categoria/enamorados'}>
          <Item Item className='img3'>           
            <Box p={15} >
            <h1 >Enamorados</h1>
            </Box>
          </Item>
        </Link>
        </Grid>
        <Grid xs={12} sm={6} md={6} >
        <Link to={'categoria/infantiles'}>
          <Item className='img4'>
            <Box p={15} >
              <h1 >Infantiles</h1>
            </Box>
          </Item>
        </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
