import React from "react";
import "../Css/ForComponent.css";


const DoneTasks = ({name, description, delet1}) => {
  return(
      <div style={{width:"800px"}} className="container m-auto  d-flex flex-column">
          <div style={{background: "#a0fea0"}} className="w-100 row d-flex mt-3 p-2 shadow rounded">
              <div className="col-lg-11 col-md-11 col-sm-11">
                  <div className="w-75 divnametodof">
                     <h5 className="w-100 nametodof rounded p-2 shadow">{name}</h5>
                  </div>
                  <p className="descriptiontodo p-1">{description}</p>
              </div>

              <div className="d-flex align-items-center justify-content-center col-lg-1 col-md-1 col-sm-1">
                  <p onClick={delet1} className="unicode fs-5">&#10006;</p>
              </div>

          </div>
      </div>
  )
}


export default DoneTasks