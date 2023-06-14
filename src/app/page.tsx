'use client'

import React, { useState, useRef } from 'react';

import { Grid, Box, Container } from '@mui/material';
import { lightBlue, cyan, green } from '@mui/material/colors';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button, { ButtonProps } from '@mui/material/Button';

import ImageIcon from '@mui/icons-material/Image';
import LoopIcon from '@mui/icons-material/Loop';
import GetAppIcon from '@mui/icons-material/GetApp';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';


const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles()((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    canvas: {
        width: '100%',
        height: '100%',
    },
}));

const LightBlueButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[600]),
  backgroundColor: lightBlue[600],
  '&:hover': {
    backgroundColor: lightBlue[700],
  },
}));

const CyanButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(cyan[800]),
  backgroundColor: cyan[600],
  '&:hover': {
    backgroundColor: cyan[700],
  },
}));

const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
  backgroundColor: green[600],
  '&:hover': {
    backgroundColor: green[900],
  },
}));

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function App() {
    const [image, setImage] = useState<HTMLImageElement>();
    const [imageName, setImageName] = useState('');
    const [isImageTooLarge, setIsImageTooLarge] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { classes } = useStyles();

    const selectImage = (e: any) => {
        fileRef?.current?.click();
    }
  
    const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (!e.target.files) return;

        const file = e.target.files[0];
        if (!file) return;
        setImageName(file.name);

        const reader = new FileReader();
        reader.onload = () => {            
            if (!canvasRef.current) return;
            let ctx = canvasRef.current.getContext('2d');
            
            let img = new Image();
            img.onload = (e: any) => {
                if (!ctx) return;
                if (!canvasRef.current) return;
                if (!gridRef.current) return;
                
                setImage(img);
                URL.revokeObjectURL(e.target.src)

                const width = e.target.width
                const height = e.target.height

                canvasRef.current.width = width;
                canvasRef.current.height = height;

                if (width > 1600) {
                    setIsImageTooLarge(true);
                }
                else {
                    setIsImageTooLarge(false);
                }

                draw(ctx, img);

            };
            img.src = URL.createObjectURL(file);

        };
        reader.readAsDataURL(file);
    };

    const draw = (ctx: CanvasRenderingContext2D, img: HTMLImageElement ) => {
        if (!canvasRef.current) return;

        ctx.resetTransform();
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);

        const angle = getRandomInt(360);
        ctx.beginPath();
        ctx.lineWidth = 0.4;
        
        const startX = Math.floor(canvasRef.current.width / 4 + getRandomInt(canvasRef.current.width) / 2);
        const startY = Math.floor(canvasRef.current.height / 4 + getRandomInt(canvasRef.current.height) / 2);
        const hairLength = getRandomInt(500) + 300;
        
        ctx.translate(startX, startY)
        ctx.moveTo(0, 0)
        ctx.rotate(angle * Math.PI / 180);
        ctx.bezierCurveTo(100, 80, 300, 80, hairLength, 0);
        ctx.stroke();
    }

    const moveHair = () => {
        if (!canvasRef.current) return;
        let ctx = canvasRef.current.getContext('2d');
        if (!ctx || !image) return;        

        draw(ctx, image);
    }

    const downloadImage = () => {
        if (!canvasRef.current) return;

        var link = document.createElement('a');
        link.download = 'hoi_' + imageName;
        link.href = canvasRef.current.toDataURL()
        link.click();
    }

    return (
      <>
        <ThemeProvider theme={defaultTheme}>
          <Container maxWidth="md">
          <div className={classes.content}>
              <input type="file" style={{display: "none"}}
                  multiple={false}
                  accept="image/*"
                  onChange={onUploadImage}
                  ref={fileRef}
              />
              <Header />
              <Box my={4}>
                  <Grid>
                      <Box textAlign='center'>
                          <Grid ref={gridRef} item xs={12} sm>
                              { 
                                  imageName
                                  ? <canvas ref={canvasRef} style={{maxWidth: '100%', border: '1px solid black'}}></canvas>
                                  : <img src="/assets/haired_logo_512.png" alt="example" width="50%" />
                              }
                              {
                                  isImageTooLarge === true &&
                                      <div>
                                        <small>
                                            <em>
                                                *image may be too large to draw the hair.
                                            </em>
                                        </small>
                                      </div>
                              }
                              {
                                  imageName !== '' && 
                                  <div>
                                      <Box m={1}>
                                          <GreenButton onClick={moveHair} startIcon={<LoopIcon />}>Move Hair</GreenButton>&nbsp;&nbsp;
                                          <CyanButton onClick={downloadImage} startIcon={<GetAppIcon />}>Download Image</CyanButton>
                                      </Box>
                                  </div>
                              }
                          </Grid>
                      </Box>
                  </Grid>
              </Box>
              <Grid container direction="column" justifyContent="center">
                  <Box textAlign='center' m={1}>
                      <LightBlueButton onClick={selectImage} size="large" startIcon={<ImageIcon />}>Select Image</LightBlueButton>
                      <Box m={2} style={{color: "crimson"}}>
                          <em>
                              <div>
                                  Don't worry,
                              </div>
                              <div>
                                  We don't send your images anywhere
                              </div>
                              <div>
                                  (It works even without internet)
                              </div>
                          </em>
                      </Box>
                  </Box>
              </Grid>
              <Footer />
          </div>
          </Container>
        </ThemeProvider>
      </>
    );
}
    
export default App;
                    