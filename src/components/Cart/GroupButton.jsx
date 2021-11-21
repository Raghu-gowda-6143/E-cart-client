import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    component: {
        width:"130px",
        height:"40px"
    },
    button: {
        borderRadius: '50px'
    }
})

const GroupedButton = () => {
    const classes = useStyle();
    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1);
    };

    return (
        <ButtonGroup className={classes.component} >
            <Button className={classes.button} onClick={() => handleDecrement()} disabled={counter === 0}>-</Button>
            <Button disabled>{counter}</Button>
            <Button className={classes.button} onClick={() => handleIncrement()}>+</Button>
        </ButtonGroup>
    );
}

export default GroupedButton;