import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ImageListItem from '@mui/material/ImageListItem'
import ItemDescriptionList from './ItemDescriptionList'

const ItemDetail =({item}) => {
  return (
    <Box sx={{ margin: '5%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={6}>
          <ImageListItem >
            <img
              src={process.env.PUBLIC_URL + `/${item.name}.jpg`}
              alt={item.name}
              style={{objectFit: 'scale-down', height: 400}}
            />
          </ImageListItem>
        </Grid>
        <Grid item xs={6}>
          <ItemDescriptionList item={item}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ItemDetail