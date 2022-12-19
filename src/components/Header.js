import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <Box sx={{
            backgroundColor: '#192841',
            marginTop: '17px'
        }}>
            <Typography variant="h6" color="#D3D3D3">
                Calculadora de inflación
            </Typography>
        </Box>
    );
}
