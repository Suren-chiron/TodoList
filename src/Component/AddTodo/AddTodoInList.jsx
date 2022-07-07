import React, { useContext } from "react";
import Context from "../../contexapi/Context";

const AddTodoInList = () => {

    const context = useContext(Context)

    return (
        <div className="container mt-3 mb-3 m-auto">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-12 col-lg-6">
                    <input type="text" placeholder="نام فعالیت مورد نظرتان" className="rounded p-3 mt-2 w-100" onChange={context.newnameset} value={context.TODOLISTcontext.addnamework} />
                    <input type="text" placeholder="توضیخات فعالیتتان را بنویسید" className="rounded p-3 mt-2 w-100" onChange={context.newdescriptionset} value={context.TODOLISTcontext.adddescriptionwork} />
                    <button className="btn btn-success mt-2 w-100" onClick={context.confirmaddtodoinlist}>اضافه کن</button>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}


export default AddTodoInList