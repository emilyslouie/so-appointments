import React, { useState, useEffect } from 'react';
import { Button, Label, RadioGroup, Radio } from "../ontario-design-system/lib/index";

function RadioCounter(props) {
    const [size, setSize] = useState(1);
    const [sizeDisabled, setSizeDisabled] = useState(false);
    const [individual, setIndividual] = useState(true);
    const [groupService, setGroupService] = useState(false);

    useEffect(() => {
        if (props.service.size > 1) {
            setSize(props.service.size)
        }
    }, [])
    const decrementCount = () => {
        if (size > 1) {
            setSize(size - 1);
            props.saveUpdate(props.service.id, size);
            console.log(props.service);
        }
        if (size < 4) {
            setSizeDisabled(false);
        }
    };

    const incrementCount = () => {
        setSize(size + 1);
        props.saveUpdate(props.service.id, size);
        console.log(props.service);
        if (size >= 3) {
            setSizeDisabled(true);
        }
    };


    let groupSizeButtons = <div></div>;

    let buttons = (
        <div >
            <Label
                data={{
                    id: "group-size",
                    type: "text",
                    text: "How many people will need the same service? (maximum of 4)",
                }}
            />
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

    if (individual) {
        groupSizeButtons = <div></div>;
    } else if (!individual) {
        groupSizeButtons = buttons;
    }

    return (
        <div class="ontario-form-group">
            <label class="ontario-label" for="text-input-example">
                Service: {props.service.label}<span class="ontario-label__flag">(required)</span>
            </label>
            <RadioGroup >
                <Radio val="Yes, I am the only one who needs the service" defaultChecked={true} name={props.service.value} onChange={() => { setGroupService(false); setIndividual(true); setSize(1); setSizeDisabled(false) }} />
                <Radio val="No, there are other people who will need the same service" defaultChecked={false} name={props.service.value} onChange={() => { setGroupService(true); setIndividual(false) }} />
            </RadioGroup>
            {groupSizeButtons}
        </div>
    );
}

export default RadioCounter;