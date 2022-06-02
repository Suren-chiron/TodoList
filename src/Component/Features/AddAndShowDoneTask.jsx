import React, {useContext} from "react";
import Context from "../../contexapi/Context";
import '../Css/ForComponent.css';

const AddAndShowDoneTask = () => {

    const context = useContext(Context)

    return(
        <div className="d-flex">
            <button style={{marginLeft: "2px"}} className="fs-7 p-3 border-0 btnadvanced" onClick={context.showehideaddtodo}>اضافه کردن</button>
            <button style={{marginRight: "2px"}} className="fs-7 p-3 border-0 btnadvanced" onClick={context.showehidedonetasktodo}>کارهای انجام شده</button>
        </div>
    )
}

export default AddAndShowDoneTask