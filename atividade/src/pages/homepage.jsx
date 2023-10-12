import React, { useState } from "react";
import {Drawer,List,ListItem,ListItemText,Typography,Box,} from "@mui/material";
import imagem from "./imagens/apartamento2.jpeg";

const drawerWidth = 150;

const useStyles = () => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  content: {
    flex: 1,
    backgroundImage: `url(${imagem})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
  },
  systemName: {
    marginLeft: "0px",
    marginTop: "0px",
    color:"blue",
  },
});

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={useStyles().root}>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        style={useStyles().drawer}
        variant="permanent"
      >
        <Typography variant="h4" component="div" className={useStyles().systemName}>
          Imobiliária
        </Typography>
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
      <main style={useStyles().content}>
        <Box sx={{ mt: 30 }}>
          <img
            src={imagem}
            width="100%"
            height="400px"
            alt="Imagem de fundo"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ mt: 30 }}>
          <Typography variant="h5">
            Encontre o seu imóvel ideal
          </Typography>
          <Typography variant="body1">
            Aqui na nossa imobiliária você encontra uma ampla variedade de imóveis para todos os tipos de orçamentos.
          </Typography>
        </Box>
      </main>
    </div>
  );
}

export default Homepage;
