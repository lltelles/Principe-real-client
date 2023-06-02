import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function Homepage() {
    return (
        <div>
            <h1>
                
                    <Box sx={{
                            height: 500,
                            backgroundColor: 'rgba(255, 188, 255, 1.0)',
                            my: 2
                        }}>
                        <Typography variant='h1'>Banner</Typography>

                    </Box>
                    <Box
                        sx={{
                            height: 500,
                            backgroundColor: 'rgba(145, 209, 207, 1.0)',
                            my: 2
                            // '&:hover': {
                            //     backgroundColor: 'primary.main',
                            //     opacity: [0.9, 0.8, 0.7],
                            // },
                        }}>
                        <Typography variant='h1'>about us</Typography>
                    </Box>
                    <Box sx={{
                            height: 500,
                            backgroundColor: 'rgba(154, 207, 255, 1.0)',
                            my: 2
                        }}>
                        <Typography variant='h1'>market place</Typography>

                    </Box>
                    <Box sx={{
                            height: 500,
                            backgroundColor: 'primary.dark',
                            
                        }}>
                        <Typography variant='h1'>neighborhood</Typography>
                    </Box>
                
            </h1>
        </div>
    )
}

export default Homepage