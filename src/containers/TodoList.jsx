import React, {Fragment, useContext} from "react";
import ContentHeader from "../component/Header/ContentHeader";
import {ToastContainer ,toast} from "react-toastify";
import AddAndShowDoneTask from "../component/Features/AddAndShowDoneTask";
import Context from "../contexapi/Context";

const TodoList = () => {

    const context = useContext(Context)

    return(
        <Fragment>

            <ContentHeader />
            <button onClick={context.fordarkthemetruefalse} style={{position:"fixed",bottom: "0",right: "0",zIndex: "10000"}} className={`${context.classess.map(p => p.changebgbutton)} m-5 border-0 p-2 rounded-circle shadow-lg`}>
                {context.classess.map(p => p.darkorlight)}
            </button>
            <ToastContainer />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <AddAndShowDoneTask/>
            </div>
            {context.showhideaddtodolist}

        </Fragment>
    )
}

export default TodoList;