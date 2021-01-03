import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'auto', borderTop: '1px solid white', height: 'calc(100vh - 173px)' }}>
            {props.children}
        </div>
    );
};

export default Scroll;