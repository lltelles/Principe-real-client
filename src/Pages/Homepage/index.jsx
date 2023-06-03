/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';







function Homepage() {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        setShowButton(window.pageYOffset > 100);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Box
                id="banner"
                sx={{
                    height: '80vh',
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {/* <img src='Marca e Logos/logo P+R_ROSA_rgb-02.png'
                    style={{
                        width: '250px',
                        margin: 'auto',
                    }} /> */}
                <Carousel style={{ width: '90%' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Images/banner1.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Images/banner2.jpg"
                            alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Images/banner3.jpg"
                            alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    {/* Add more Carousel.Item components as needed */}
                </Carousel>

            </Box>
            <Box
                id="about"
                sx={{
                    height: '90vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    my: 2,
                    color: 'rgba(255, 255, 255, 1.0)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    textAlign: 'center'

                }}>

                <Typography variant='h2'>Sobre Nós</Typography>
                <Typography variant='body1'>
                    Nascida em 2021, a nossa Associação foi criada para promover uma cultura comunitária que potencia todo o potencial do bairro do Príncipe Real, em Lisboa.
                    Criamos e promovemos sinergias entre os vários intervenientes do bairro, como residentes, partes interessadas, proprietários de lojas, entidades públicas e todos aqueles que têm uma ligação direta ou indireta à nossa área - Príncipe Real.
                    É uma associação sem fins lucrativos regida por direito privado, com personalidade jurídica. Queremos contribuir para a qualidade de vida no Príncipe Real, preservando a sua essência e características tão singulares.
                </Typography>
                <Typography variant='body1'>
                    Queremos potenciar as dinâmicas comunitárias do bairro, cruzando atividades, interesses e necessidades.
                    Criar novas relações entre aqueles que aqui vivem, trabalham, as instituições e o comércio local, numa sinergia criativa e familiar. Queremos conhecer a todos.
                    Recuperar histórias de vida.
                    Resgatar as histórias do bairro.
                    Proteger os mais vulneráveis.
                    Ser uma voz de ligação com as várias entidades oficiais.
                </Typography>
                <Typography variant='body1'>
                    A Príncipe + Real será também uma plataforma de comunicação. Daremos a conhecer toda a riqueza, diversidade e atividade do bairro.
                    Faremos essa comunicação na página do Instagram e através de publicidade nas ruas.
                </Typography>
            </Box>
            
            <Box
                id="neighborhood"
                sx={{
                    height: '80vh',
                    backgroundColor: 'rgb(255, 255, 255)',
                    my: 2,
                }}>
                <Typography variant='h3'>SOBRE O BAIRRO</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    my: 2
                }}>
                    <Paper elevation={12} sx={{ borderRadius: 3 }}>
                        <Link to="https://lisboasecreta.co/10-sitios-principe-real/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Card id='card1' sx={{
                                maxWidth: 345,
                                height: 450,
                                borderRadius: 3
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="public/Images/sobre-img1.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            10 SÍTIOS IMPERDÍVEIS NO PRÍNCIPE REAL
                                        </Typography>
                                        <Typography  color="text.secondary">
                                            O Príncipe Real está cheio de coisas para ver, fazer... comer e beber. Acompanha-nos nesta viagem fantástica por este típico bairro lisboeta.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Paper>

                    <Paper elevation={12} sx={{ borderRadius: 3 }}>
                        <Link to="https://www.timeout.pt/lisboa/pt/compras/as-melhores-lojas-no-principe-real" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Card sx={{
                                maxWidth: 345,
                                height: 450,
                                borderRadius: 3
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="public/Images/sobre-img2.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            COMPRAS EM LISBOA: AS MELHORES LOJAS NO PRÍNCIPE REAL
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Há que ter a carteira bem recheada para andar às compras por estes lados. É que as melhores lojas do Príncipe Real são dignas de realeza.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Paper>

                    <Paper elevation={12} sx={{ borderRadius: 3 }}>
                        <Link to="https://descubralisboa.com/principe-real-em-lisboa/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Card sx={{
                                maxWidth: 345,
                                height: 450,
                                borderRadius: 3
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image="public/Images/sobre-img3.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            PRÍNCIPE REAL: O QUE VISITAR NO BAIRRO LISBOETA
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Repleto de prédios tradicionais portugueses, este simpático bairro lisboeta nos últimos anos atraiu diversas lojas, restaurantes e bares com apostas mais modernas e diferentes.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Paper>
                </Box>
            </Box>
            <Box
                id="marketplace"
                sx={{
                    height: '90vh',
                    backgroundColor: 'rgba(154, 207, 255, 1.0)',
                    my: 2
                }}>
                <Typography variant='h6'>market place</Typography>
                <Link to='/marketplace'>
                    <Button id='navbar-btn'>MarketPlace</Button>
                </Link>
            </Box>


            <hr />


            <Zoom in={showButton}>
                <Fab
                    color="rgba(255, 188, 255)"
                    size="small"
                    aria-label="scroll back to top"
                    onClick={handleScrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Zoom>

        </div>
    )
}

export default Homepage