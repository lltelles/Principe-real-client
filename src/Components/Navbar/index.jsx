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

                <AppBar sx={{backgroundColor: 'rgba(154, 207, 255, 1.0)'}}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Principe + Real
                        </Typography>
                        <div>
                            <Link to='/'>
                                <Button id='navbar-btn'>Home</Button>
                            </Link>
                            <Link to='/about'>
                                <Button id='navbar-btn'>About Us</Button>
                            </Link>
                            <Link to='/marketplace'>
                                <Button id='navbar-btn'>MarketPlace</Button>
                            </Link>
                            <Link to='/neighborhood'>
                                <Button id='navbar-btn'>Neighborhood</Button>
                            </Link>
                            <Link to='/login'>
                                <Button id='navbar-btn'>Login</Button>
                            </Link>
                            <Link to='/signup'>
                                <Button id='navbar-btn'>Sign Up</Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

        </React.Fragment>

    );
}


