import React from "react";
import {render} from "react-dom";
import Globalstate from "./containers/Globalstate";
import App from "./containers/App";

render(
    <Globalstate>
        <App />
    </Globalstate>,
    document.getElementById('root')
)