import React from 'react'
import Typography from '@mui/material/Typography';


const Result = (props) => {

    const resultAmount = financial(props.resultAmount);
    const inflationRate = financial(props.inflationRate);

    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    return (
        <div>
            <Typography variant="h6" color="inherit" component="div">
                Resultado: RD${resultAmount}
            </Typography>
            <Typography variant="h6" color="inherit" component="div">
                Inflación:{inflationRate}%
            </Typography>
        </div>
    )
}

export default Result