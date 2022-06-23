import {createContext} from "react";

const Context = createContext({
    TODOLISTcontext : [],
    Donetaskss : [],
    classess : [],
    showehideaddtodo: () => {},
    showehideedittodo: () => {},
    newnameset : event => {},
    newdescriptionset : event => {},
    confirmaddtodoinlist : () => {},
    tododelitofthelist : id => {},
    Hidelistitemsexceptonea : id => {},
    buttonconfirmforedit : () => {},
    editname : (event,id) => {},
    editdescription : (event,id) => {},
    partdonetask : id => {},
    deletitemfordonetask : id => {},
    fordarkthemetruefalse : () => {}
})


export default Context