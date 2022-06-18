import React from "react";

const HigherOrderComponent = (RootComponent) => {
    return props => (
        <div>
            <RootComponent {...props} />
        </div>
    );
};

export default HigherOrderComponent;
