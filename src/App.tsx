import React, { useState, useRef } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { lightBlue, cyan, green } from '@material-ui/core/colors';

import Header from './components/Header';
import Footer from './components/Footer';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import LoopIcon from '@material-ui/icons/Loop';
import GetAppIcon from '@material-ui/icons/GetApp';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    selectTemplate: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    canvas: {
        width: '100%',
        height: '100%',
    },
}));

const LightBlueButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(lightBlue[600]),
      backgroundColor: lightBlue[600],
      '&:hover': {
        backgroundColor: lightBlue[700],
      },
    },
  })
)(Button);

const CyanButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(cyan[700]),
      backgroundColor: cyan[700],
      '&:hover': {
        backgroundColor: cyan[900],
      },
    },
  })
)(Button);


const GreenButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green[600]),
      backgroundColor: green[600],
      '&:hover': {
        backgroundColor: green[900],
      },
    },
  })
)(Button);


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

    const classes = useStyles();

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

                if (width > 1800) {
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
        <div className={classes.content}>
            <input type="file" style={{display: "none"}}
                multiple={false}
                accept="image/*"
                onChange={onUploadImage}
                ref={fileRef}
            />
            <Header />
            <Grid container direction="column" justify="center">
                <Box textAlign='center' m={1}>
                    <CyanButton onClick={selectImage} startIcon={<PublishIcon />}>Select Image</CyanButton>
                    <Box m={2} style={{color: "crimson"}}>
                        <em>
                            <div>
                                Don't worry,
                            </div>
                            <div>
                                We don't send your images anywhere
                            </div>
                        </em>
                    </Box>
                </Box>
                <Box textAlign='center' m={1}>
                    <LightBlueButton onClick={moveHair} startIcon={<LoopIcon />}>Move Hair</LightBlueButton>
                </Box>
                <Box textAlign='center' m={1}>
                    <GreenButton onClick={downloadImage} startIcon={<GetAppIcon />}>Download Image</GreenButton>
                </Box>
            </Grid>
            <Box my={4}>
                <Grid container direction="column" justify="center">
                    <Box textAlign='center'>
                        <Grid ref={gridRef} item xs={12} sm>
                            { 
                                imageName
                                ? <canvas ref={canvasRef} style={{maxWidth: '100%'}}></canvas>
                                :    <div>
                                        <ImageIcon style={{ fontSize: 100 }} /> 
                                        <div>Please select an image</div>
                                    </div>
                            }
                            {
                                isImageTooLarge === true &&
                                    <small>
                                        <em style={{color: "grey"}}>
                                            *image may be too large to show the hair.
                                        </em>
                                    </small>
                            }
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}
    
export default App;
                    