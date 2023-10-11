import React from 'react';
import { Container, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'; 
import imagem from './imagens/imagem.webp';

const drawerWidth = 240;


const useStyles = {
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  content: {
    flex: 1,
    padding: '450px', 
    backgroundImage: `url(${imagem})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex', 
    flexDirection: 'column', 
  },
  systemName: {
    marginLeft: '0px', 
    marginTop: '0px', 

  },

};

function Homepage() {
  return (
    <div style={useStyles.root}>
      <Drawer
        style={useStyles.drawer}
        variant="permanent"
      >
        <List>
          <ListItem button>
            <ListItemText primary="Casa" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Apartamento" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Kitnet" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Avaliações" />
          </ListItem>
        </List>
      </Drawer>
      <main style={useStyles.content}>
        <Typography variant="h4" component="div" className={useStyles.systemName}>
          Imobiliária
        </Typography>
      </main>
    </div>
  );
}

export default Homepage;
