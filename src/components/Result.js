import React from 'react'
import TextField from '@mui/material/TextField';


const Result = (props) => {

    const resultAmount = financial(props.resultAmount);
    const inflationRate = financial(props.inflationRate);

    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }

    return (
        <div>
            <div>
                <TextField value={`RD$` + resultAmount} label='Monto final' style={{ width: 315 }}
                >
                </TextField>
            </div>
            <div>
                <TextField value={inflationRate} label='Índice de inflación' style={{ width: 315 }}
                >
                </TextField>
            </div>

        </div>
    )
}

export default Result