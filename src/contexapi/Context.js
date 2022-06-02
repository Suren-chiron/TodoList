import {createContext} from "react";

const Context = createContext({
    TODOLISTcontext : [],
    Donetaskss : [],
    titlepage : "",
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
})

export default Context