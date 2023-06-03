/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import './index.css'

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function HideAppBar(props) {

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>

                <AppBar sx={{ backgroundColor: '#8a8f8f', }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src='Pe+ºas individuais principe+real/Logo + Simbolos/logo 1.png' style={{ width: '150px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
                        </Typography>
                        <Link to="/">
                            <Button id="navbar-btn">Home</Button>
                        </Link>
                        <ScrollLink to="about" smooth={true} duration={50}>
                            <Button id="navbar-btn">About Us</Button>
                        </ScrollLink>
                        <ScrollLink to="marketplace" smooth={true} duration={50}>
                            <Button id="navbar-btn">MarketPlace</Button>
                        </ScrollLink>
                        <ScrollLink to="neighborhood" smooth={true} duration={50}>
                            <Button id="navbar-btn">Neighborhood</Button>
                        </ScrollLink>
                        <Link to="/login">
                            <Button id="navbar-btn">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button id="navbar-btn">Sign Up</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

        </React.Fragment>

    );
}


