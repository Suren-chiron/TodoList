import {createContext} from "react";

const Context = createContext({
    TODOLISTcontext : [],
    Donetaskss : [],
    showehideaddtodo: () => {},
    showehideedittodo: () => {},
    showehidedonetasktodo: () => {},
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
    fordarkthemetruefalse : () => {},
    classess : []
})


export default Context