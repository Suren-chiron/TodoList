import React from "react";

const SearchInTodoList = ({valueevent,methodsearch}) => {
  return(
      <div style={{width: "100%"}}>
          <input placeholder="فعالیتتان را سرچ کنید" type="search" onChange={valueevent} style={{textAlign: "right",marginBottom: "30px",marginLeft:"8px",width: "70%"}} className="rounded border border-danger p-2 shadow-lg"/>
          <button className="btn btn-success w-25" onClick={methodsearch}>سرچ</button>
      </div>
  )
}

export default SearchInTodoList