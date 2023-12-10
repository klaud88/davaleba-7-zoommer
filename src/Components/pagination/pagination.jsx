import React from 'react'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pages=({setPage})=>{

    const theme = createTheme({
        components: {
          // Name of the component
          MuiPaginationItem: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                '&:focus': {backgroundColor: "#fd3f00"},
                color: "black",
                fontSize: 20,
                fontWeight: 600,
              },
            },
          },
        },
      });
    return(
        <>
    <ThemeProvider theme={theme}>
    <Stack  spacing={2}>
      <Pagination count={5} onChange={(e, value)=> setPage(value)} />
    </Stack>
    </ThemeProvider>
        </>
    )
}
export default Pages