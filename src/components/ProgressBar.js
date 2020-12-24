import React from "react";

import { Line } from "rc-progress";

const ProgressBar = ({ percent, step, phrase }) => {
    return (
        <div className="bar">
            <h6 className="ontario-margin-bottom-0-!">Step {step} of 6: {phrase}</h6>
            <Line percent={percent} strokeWidth="1" strokeColor="#006C40" />
        </div>
    );
};

export default ProgressBar;
