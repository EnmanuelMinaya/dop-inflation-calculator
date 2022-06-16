import React from 'react'
import Typography from '@mui/material/Typography';


const Result = (props) => {
    return (
        <div>
            <Typography variant="h6" color="inherit" component="div">
                Resultado:{props.result}
            </Typography>
        </div>
    )
}

export default Result