import React, {Fragment, useContext} from "react";
import {ToastContainer} from 'react-toastify'
import ContentHeader from "../component/Header/ContentHeader";
import AddAndShowDoneTask from "../component/Features/AddAndShowDoneTask";
import MapInListWork from "../component/TodoListItems/MapInListWork";
import Context from "../contexapi/Context";


const App = () => {

    const context = useContext(Context)

    return(
        <Fragment>
            <ContentHeader />
            <button onClick={context.fordarkthemetruefalse} style={{position:"fixed",bottom: "0",right: "0",zIndex: "10000"}} className={`${context.classess.map(p => p.changebgbutton)} m-5 border-0 p-2 rounded-circle shadow-lg`}>
                {context.classess.map(p => p.darkorlight)}
            </button>
            <ToastContainer />
            <div className="d-flex flex-column justify-content-center align-items-center">
                {/*todo : is this a box search*/}
                {/*    <MapForSearch*/}
                {/*        valueevent = {this.valueevent}*/}
                {/*        methodsearch = {this.methodsearch}*/}
                {/*    >*/}
                {/*    </MapForSearch>*/}
            <AddAndShowDoneTask />
            </div>
            {context.showhideaddtodolist}
            {context.showhidedontask}
            <MapInListWork />
        </Fragment>
    )
}

export default App;