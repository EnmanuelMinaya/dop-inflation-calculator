import React from 'react'
import Typography from '@mui/material/Typography';


const Result = (props) => {

    const result = props.resultAmount;
    return (
        <div>
            <Typography variant="h6" color="inherit" component="div">
                Resultado:{result}
            </Typography>
        </div>
    )
}

export default Result