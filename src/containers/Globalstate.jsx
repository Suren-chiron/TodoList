import React, {useState} from "react";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import MapForSearch from "./Component/Search/MapForSearch";
import AddTodoInList from "../component/AddTodo/AddTodoInList";
import MapInDoneTasks from "../component/ListDoneTasks/MapInDoneTasks";
import Context from "../contexapi/Context";

import '../App.css';
import '../component/Css/ForComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/fontawesome-free-solid'


const Globalstate = ({ children }) => {

    // todo : this is a statee
    const [getvaluetodolist, changevaluetodolist] = useState([{
        id: 1,
        namework: "یادگیری زبان انگلیسی",
        descriptionwork: "من باید هر روز در ساعت 10:30 به یادگیری زبان انگلیسی بپردازم"
    },{
        id: 2,
        namework: "یادگیری ری اکت",
        descriptionwork: "هر روز در ساعت 15 تا 23 به یادگیری و تمرین و تکرار ری اکت میپردازم"
    }])
    const [getvalueaddnamework, changevalueaddnamework] = useState("")
    const [getvalueadddescriptionwork, changevalueadddescriptionwork] = useState("")
    const [getvalueDonetaskss, changevalueDonetaskss] = useState([])
    const [getvalueaddtodoshowhide, changevalueaddtodoshowhide] = useState(false)
    const [getvalueedittodoshowhide, changevalueedittodoshowhide] = useState(false)
    const [getvaluedonetaskshowhide, changevaluedonetaskshowhide] = useState(false)
    const [getvalueforconfirmedit , changevalueforconfirmedit] = useState([])
    const [gettruefalsedarktheme, changetruefalsedarktheme] = useState(false)

    // todo : methdos under is for show and hide or true and false state
    const addtodoshowhide = () => {
        changevalueaddtodoshowhide(!getvalueaddtodoshowhide)
    }
    const edittodoshowhide = () => {
        changevalueedittodoshowhide(!getvalueedittodoshowhide)
    }
    const donetaskshowhide = () => {
        changevaluedonetaskshowhide(!getvaluedonetaskshowhide)
    }


    // todo : 3 method under is for add todo in list
    const setnewnametodo = event => {
        changevalueaddnamework(event.target.value);
    };
    const setnewdescriptiontodo = event => {
        changevalueadddescriptionwork(event.target.value)
    };
    const addtodolist = () => {
        const todobefore = [...getvaluetodolist];
        const contentnewtodo =
            {
                id: Math.floor(Math.random() * 100),
                namework : getvalueaddnamework,
                descriptionwork : getvalueadddescriptionwork,
            }
        if (getvalueaddnamework !== "" && getvalueadddescriptionwork !== "" && getvalueaddnamework !== " " && getvalueadddescriptionwork !== " " ) {
            todobefore.push(contentnewtodo);
            toast.success("فعالیت جدید با موفقیت اضافه شد",{position:"top-right"})
            changevaluetodolist(todobefore)
            changevalueaddnamework("")
            changevalueadddescriptionwork("")
            changevalueaddtodoshowhide(!getvalueaddtodoshowhide)
        } else {
            toast.info("لطفا نام و توضیحات فعالیت را کامل کنید",{
                position : "top-right",
                onClick: true,
                closeOnClick: true
            })
        }
    }


    // todo : 1 method under is for delet
    const delettodolist = id => {
        const todobeforee = [...getvaluetodolist];
        const filterr = todobeforee.filter(p => p.id !== id)
        toast.error(` با موفقیت حذف شد`,{position:"top-right"})
        changevaluetodolist(filterr)
    }


    // todo 4 method under is for edit
    const Hidelistitemsexceptone = id => {
        const todobefore = [...getvaluetodolist]
        const filter1 = todobefore.filter(p => p.id === id)
        changevalueforconfirmedit(todobefore)
        changevaluetodolist(filter1)
        changevalueedittodoshowhide(!getvalueedittodoshowhide)
    }
    const confirm = () => {
        toast.success(`با موفقیت ویرایش شد`,{position:"top-right"})
        changevalueedittodoshowhide(!getvalueedittodoshowhide)
        changevaluetodolist(getvalueforconfirmedit)
    }
    const edit = (event,id) => {
        const todobefore = [...getvaluetodolist]
        const findindex = todobefore.findIndex(p => p.id === id)

        const editcontent = todobefore[findindex]
        editcontent.namework = event.target.value;

        const editsignd = [...todobefore];
        editsignd[findindex] = editcontent;
        changevaluetodolist(editsignd)
    }
    const edit1 = (event,id) => {
        const todobefore = [...getvaluetodolist]
        const findindex = todobefore.findIndex(p => p.id === id)

        const editcontent = todobefore[findindex]
        editcontent.descriptionwork = event.target.value;

        const editsignd = [...todobefore];
        editsignd[findindex] = editcontent;
        changevaluetodolist(editsignd)
    }


    // todo : part Done Tasks And Delet az page Main show in button Done Tasks
    const partsdonetask = id => {
        const todobefore = [...getvaluetodolist]
        const filterr = todobefore.filter(p => p.id !== id)
        const findindex = todobefore.findIndex(p => p.id === id)
        const YsePropertyFindIndex = todobefore[findindex]
        const pushhh = {
            id : Math.floor(Math.random() * 1000),
            namework : YsePropertyFindIndex.namework,
            descriptionwork : YsePropertyFindIndex.descriptionwork
        }
        const todobefore2 = [...getvalueDonetaskss]
        todobefore2.push(pushhh)
        toast.success(`تبریک میگوییم.فعالیت به لیست کارهای انجام شده منتقل شد`,{position:"top-right"})
        changevaluetodolist(filterr)
        changevalueDonetaskss(todobefore2)
    }
    const deletDoneTask = id => {
        const todobefore = [...getvalueDonetaskss];
        const filtertask = todobefore.filter(p => p.id !== id)
        toast.error(`با موفقیت حذف شد`,{position:"top-right"})
        changevalueDonetaskss(filtertask)
    }

    // todo : search
    // todo : The search section must be completed
    // valueevent = event => {
    //     this.setState({search_valueEvent : event.target.value})
    // }
    //
    // methodsearch = (id) => {
    //     const copyTodoList = [...this.state.TodoList]
    //     const copyintodo = copyTodoList.findIndex(p => p.id === id)
    //     const nameooo = copyTodoList[copyintodo]
    //     console.log(id)
    //     if (copyintodo.namework.toLowerCase().includes(this.state.TodoList.toLowerCase()) === this.state.search_valueEvent) {
    //     this.setState({TodoList : nameooo})
    //     console.log(this.state.TodoList)
    //     } else {
    //         this.setState({TodoList : copyTodoList})
    //         console.log(this.state.TodoList)
    //     }
    // }

    // todo : change theme page to dark or light
    const changetheme = () => {
        changetruefalsedarktheme(!gettruefalsedarktheme)
    }

    // todo : finished functions

    let showcomponentadd,editpush,listdonetasks,edithidecontent;
    // -------------------
    if(getvalueaddtodoshowhide === true) {
        showcomponentadd = <AddTodoInList />
    }

    let changebgbutton = ""
    let darkorlight = "";
    let changecolordescription = ""
    let editicon = ""
    let deleticon = ""
    let changeopacitydonetasks = ""
    if(gettruefalsedarktheme === true) {
        darkorlight = <FontAwesomeIcon icon="sun" color="#c77f00" className="p-2 mt-1"/>
        changecolordescription = "text-white"
        editicon = "editdark"
        deleticon = "deleticondark"
        changeopacitydonetasks = 'donetask-dark'
        changebgbutton = "bg-light"
        document.querySelector("body").style.background = "#212529"
    } else {
        darkorlight = <FontAwesomeIcon icon="moon" color="#c77f00" className="p-2 mt-1"/>
        changecolordescription = "text-dark"
        editicon = "editlight"
        deleticon = "deleticonlight"
        changeopacitydonetasks = ''
        changebgbutton = "bg-dark"
        document.querySelector("body").style.background = "white"
    }

    editpush = "";
    edithidecontent = "";
    if(getvalueedittodoshowhide === true) {
        editpush = ("d-flex flex-column")
        edithidecontent = ("d-none")
    } else {
        editpush = ("d-none")
        edithidecontent = ("d-flex d-column")
    }
    if (getvaluedonetaskshowhide === true) {
        listdonetasks =
            <MapInDoneTasks />
    }

    const classes = [{
        editpush : editpush,edithidecontent : edithidecontent, changebgbutton : changebgbutton, darkorlight : darkorlight, changecolordescription : changecolordescription, editicon : editicon, deleticon : deleticon , changeopacitydonetasks : changeopacitydonetasks
    }]


    return(
        <Context.Provider value={{
            TODOLISTcontext : getvaluetodolist,
            Donetaskss : getvalueDonetaskss,
            testforapp : getvalueaddtodoshowhide,
            showehideaddtodo : addtodoshowhide,
            showehideedittodo : edittodoshowhide,
            showehidedonetasktodo : donetaskshowhide,
            newnameset : setnewnametodo,
            newdescriptionset : setnewdescriptiontodo,
            confirmaddtodoinlist : addtodolist ,
            tododelitofthelist : delettodolist,
            Hidelistitemsexceptonea : Hidelistitemsexceptone,
            buttonconfirmforedit : confirm,
            editname : edit,
            editdescription : edit1,
            partdonetask : partsdonetask,
            deletitemfordonetask : deletDoneTask,
            showhideaddtodolist : showcomponentadd,
            showhidedontask : listdonetasks,
            fordarkthemetruefalse : changetheme,
            classess : classes
        }}>
            {children}
        </Context.Provider>
    )
}

export default Globalstate;