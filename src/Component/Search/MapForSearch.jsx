import React from "react";
import SearchInTodoList from "./SearchInTodoList";

const MapForSearch = ({valueevent,methodsearch}) => {
    return(
        <div>
            <SearchInTodoList
                valueevent = {event => valueevent(event)}
                methodsearch = {() => methodsearch()}
            >
            </SearchInTodoList>
        </div>
    )
}

export default MapForSearch