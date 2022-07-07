import React, { Fragment } from "react";
import "../Css/ForComponent.css";

const DoneTasks = ({ name, description, delet1, classchangeopacity }) => {

    return (
        <Fragment>
            <div className={`${classchangeopacity} container m-auto`}>
                <div style={{ background: "#a0fea0" }} className="row d-flex mt-3 p-2 shadow rounded">
                    <div className="col-11 col-lg-11 col-md-11 col-sm-11">
                        <div className="w-75 divnametodof">
                            <h5 className="w-100 nametodof rounded p-2 shadow">{name}</h5>
                        </div>
                        <p className="descriptiontodo p-1">{description}</p>
                    </div>

                    <div className="col-1 col-lg-1 col-md-1 col-sm-1">
                        <p onClick={delet1} className="deleticonlight fs-5">&#10006;</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DoneTasks