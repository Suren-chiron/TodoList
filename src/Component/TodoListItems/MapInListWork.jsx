import React, {useContext} from "react";
import ShowListWork from "./ShowListWork";
import Context from "../../contexapi/Context";


const MapInListWork = ({classeditblock,classhidecontent,classchangecolordec,classediticon,classdeleticon}) => {

    const context = useContext(Context)

    return(
       <div className="d-flex flex-column m-auto justify-content-center align-items-center">
          {context.TODOLISTcontext.map(o => (
              <ShowListWork
                 namework = {o.namework}
                 description = {o.descriptionwork}
                 deleted = {() => context.tododelitofthelist(o.id)}
                 edit = {(event) => context.editname(event,o.id)}
                 edit1 = {(event) => context.editdescription(event,o.id)}
                 donetasks = {() => context.partdonetask(o.id)}
                 showedit = {() => context.showehideedittodo()}
                 classblock = {classeditblock}
                 iddd = {() => context.Hidelistitemsexceptonea(o.id)}
                 confirm = {() => context.buttonconfirmforedit()}
                 classhidecontent = {classhidecontent}
                 classchangecolordec = {classchangecolordec}
                 classediticon = {classediticon}
                 classdeleticon = {classdeleticon}
             >
             </ShowListWork>
          ))}
       </div>
    )
}


export default MapInListWork;