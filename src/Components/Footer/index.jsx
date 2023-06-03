/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                py: 3,
                textAlign: 'center',
            }}
        >
            <Typography variant="h6" component="h2">
                Contactos
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    mt: 2,
                }}
            >
                <Typography variant="body1" sx={{ textDecoration: 'none' }}>

                    <a href="mailto:principemaisreal@gmail.com"  style={{textDecoration: 'none', color: 'rgba(154, 207, 255, 1.0)'}}> principemaisreal@gmail.com </a> |  +351 968 335 641 |  Praça do Príncipe Real 22 1º, 1250-184 Lisboa
                </Typography>

            </Box>

            <Box sx={{
                mt: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
            }}>
                <Typography variant="body1">Follow us</Typography>
                <a
                    href="https://www.instagram.com/principemaisreal/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon fontSize="medium" color="primary" />
                </a>
            </Box>
        </Box>
    );
}

export default Footer;
