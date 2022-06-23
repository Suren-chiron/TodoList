import React, {useContext} from "react";
import "../Css/ForComponent.css";

const ShowListWork = ({namework,description,deleted,edit,edit1,donetasks,showedit,classblock,iddd,confirm,classhidecontent,classchangecolordec,classediticon,classdeleticon}) => {

    return(
    <div style={{width:"1000px"}} className="m-auto container d-flex flex-column">
        <div style={{boxShadow: "0px 0px 2px 0px #ffffff"}} className="w-100 row mt-3 d-flex p-2 rounded justify-content-center align-items-center">

            <div className="col-lg-2 col-md-2 col-sm-6 order-lg-1 order-md-1 order-sm-2 d-flex justify-content-lg-center justify-content-md-right">
                <input type="button" placeholder="انجام شد" value="انجام شد" onClick={donetasks} className="btn btn-md btn-warning"/>
            </div>

            <div className={`d-flex flex-column col-lg-9 col-md-9 col-sm-12 order-lg-2 order-md-2 order-sm-1 ${classhidecontent}`}>
                    <h5 style={{color: "#db366b",textAlign: "right"}} className="mb-2">{namework}</h5>
                    <p className={`descriptiontodo ${classchangecolordec}`}>{description}</p>
            </div>

            <div className={`d-flex flex-column col-lg-9 col-md-9 col-sm-12 order-lg-2 order-md-2 order-sm-1 ${classblock}`}>
                    <input className="mb-3 border-1 p-2 rounded" type="text" onChange={edit} value={namework}/>
                    <input className="mb-3 border-1 p-2 rounded" type="text" onChange={edit1} value={description}/>
                    <button onClick={confirm} className={`btn btn-success`}>تایید</button>
            </div>

            <div className="col-lg-1 col-md-1 col-sm-6 justify-content-sm-end d-flex order-sm-3 mt-3">
                    <p onClick={iddd} className="mt-3">
                        <p onClick={showedit} className={`${classediticon} fs-5`}>&#9998;</p>
                    </p>
                    <p className="mt-3">
                        <p onClick={deleted} className={`${classdeleticon} fs-5`}>&#10006;</p>
                    </p>
            </div>

        </div>
    </div>
)
}


export default ShowListWork;