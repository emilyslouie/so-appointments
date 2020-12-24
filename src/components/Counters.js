import React, { useState, useEffect } from 'react';
import { Button, Label, RadioGroup, Radio } from "../ontario-design-system/lib/index";

function Counters(props) {
    const [size, setSize] = useState(1);
    const [sizeDisabled, setSizeDisabled] = useState(false);

    useEffect(() => {
        if (props.service.size > 1) {
            setSize(props.service.size + 1); // + 1
        }
    }, [])
    const decrementCount = () => {
        if (size > 1) {
            setSize(size - 1);
            props.saveUpdate(props.service.id, size);
        }
        if (size < 4) {
            setSizeDisabled(false);
        }
    };

    const incrementCount = () => {
        setSize(size + 1);
        props.saveUpdate(props.service.id, size);
        if (size >= 3) {
            setSizeDisabled(true);
        }
    };

    return (
        <div>
            <label class="ontario-label" for="text-input-example">
                {props.service.label}
            </label>

            <button className="counter-button left" onClick={decrementCount} ><strong>–</strong></button>
            <input
                class="counter-input counter-input--2-char-width"
                type="number"
                name="clicks"
                value={size}
                disabled={sizeDisabled}
                onChange={(event) => {
                    setSize(event.target.value);
                }}
            />
            <button className="counter-button right" onClick={incrementCount} disabled={sizeDisabled}><strong>+</strong></button>
        </div>
    );
}

export default Counters;