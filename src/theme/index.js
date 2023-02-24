import { createTheme } from '@mui/material';

const MainAppThemes =  createTheme({


    components :{
        MuiContainer:{
            styleOverrides:{
                root:{
                    '&.MuiContainer-root': {
                    //    minWidth:'100%',
                    //    marginTop: '15px,
                        maxWidth:'1440px',
                       
                        backgroundColor:"#F5EBDD"
                    },
                    '@media(max-width:1440)':{
                        '&.MuiContainer-root':{
                            paddingLeft:'32px',
                            paddingRight:'32px'
                        }
                    },
                    '@media (max-width: 1024px)': {
                        '&.MuiContainer-root': {
                          // maxWidth: 'calc(100% - 64px )'
                        }
                      },
                      '@media (max-width: 767px)': {
                        '&.MuiContainer-root': {
                          paddingLeft: 16,
                          paddingRight: 16
                        }
                      }

                }            
            }
        }
    }
});

export default MainAppThemes;