import React, {useContext} from "react";
import DoneTasks from "./DoneTasks";
import Context from "../../contexapi/Context";

const MapInDoneTasks = () => {

    const context = useContext(Context)

    return(
       <div className="d-flex flex-column m-auto justify-content-center align-items-center">
           {context.Donetaskss.map(p => (
               <DoneTasks
                   name = {p.namework}
                   description={p.descriptionwork}
                   delet1={() => context.deletitemfordonetask(p.id)}
                   classchangeopacity = {context.classess.map(p => p.changeopacitydonetasks)}
               >
               </DoneTasks>
           ))}
       </div>
  )
}


export default MapInDoneTasks