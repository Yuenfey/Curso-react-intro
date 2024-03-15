import { useState } from "react"
function TodoSearch() {
  const [valueSearch, setValueSearch] =useState('')
  return (
    <>
      <form action="">
        <label htmlFor="Search">Search your ask:</label>
        <input id="Search" placeholder="Find your tasks" value={valueSearch} onChange={(event)=>{setValueSearch(event.target.value)}}></input>
      </form>
    </>
  )
}

export { TodoSearch }