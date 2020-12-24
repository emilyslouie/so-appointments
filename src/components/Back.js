import React from 'react';
import { useHistory } from 'react-router-dom';
import chevronLeft from '../ontario-design-system/icons/svg/ontario-icon-chevron-left.svg'

function BackButton({ path }) {

    const history = useHistory();

    function handleUpdate() {
        history.push(path);
    }

    return (
        <div style={{ color: 'rgb(194, 194, 194)', paddingBottom: '24px', marginLeft: '-8px' }}>
            <a onClick={handleUpdate}><img src={chevronLeft} />Back</a>
        </div>
    );
}

export default BackButton;