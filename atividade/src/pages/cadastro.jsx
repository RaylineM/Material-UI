import React, { useState } from 'react';
import imagem from "./imagens/apartamento2.jpeg";
import card from "./imagens/house.svg";
import './style.css'
import { Box, Container, Grid, Typography, Avatar, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const iconTextStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = () => {
    window.location.href = '/homepage';
  };
  const buttonStyle = {
    marginTop: "15px",
  };
  return (
    <>
      <div style={{
        backgroundImage: `url(${imagem})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#fffff",
      }}>
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundImage: `url(${card})`,
                  backgroundSize: "cover",
                  marginTop: "20px",
                  marginLeft: "15px",
                  marginRight: "15px",
                  height: "70vh",
                  color: "#fffff"
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                className="center-content"
                style={{
                  backgroundSize: "cover",
                  height: "80vh",
                  minHeight: "500px",
                  backgroundColor: "#5c58a5",
                }}
              >
                <Container>
                  <Box height={35} />
                  <Box sx={iconTextStyle}> 
                    <Avatar sx={{ ml: "35px", mb: "4px", bg: "#3b33d5" }} />
                    <Typography component="h1" variant='h4'>
                      Cadastro
                    </Typography>
                  </Box>
                  <TextField
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    sx={{  width:"350px", height: "40px", marginBottom: "10px" }}
                  />
                  <TextField
                    label="Senha"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="password"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    sx={{ width:"350px" , height: "40px", marginBottom: "10px" }}
                  />
                  <TextField
                    label="Confirmar Senha"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="password"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    sx={{width:"350px" , height:"40px",marginBottom:"10px"}}
                  />
                  <div className="form-group">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleRegister}
                      sx={buttonStyle}
                    >
                      Cadastre-se
                    </Button>
                  </div>
                  <Typography>
                    Já tem uma conta? <Link to="./login">Faça login</Link>
                  </Typography>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}
