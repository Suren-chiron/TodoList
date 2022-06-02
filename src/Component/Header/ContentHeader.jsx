import React, {useContext} from "react";
import './stylecontent.css';
import Context from "../../contexapi/Context";


const ContentHeader = () => {

    const context = useContext(Context)

    return(
        <div className="flexdivheader">
            <div className="divheaderpage">
                <h1 className="headerpage">{context.titlepage}</h1>
            </div>
        </div>
    )
}

export default ContentHeader;