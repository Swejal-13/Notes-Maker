import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
  
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
   // console.log(copyTask[idx])
   copyTask.splice(idx,1)
   setTask(copyTask)

  }


  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) => {
        submitHandler(e)
      }}

        className="flex items-start lg:w-1/2 p-10 gap-4 flex-col">
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/*first Input */}
        <input type="text"
          placeholder="Enter Notes Heading:"
          className="px-5 py-2 w-full font-medium border-2 rounded"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        {/*detailed Input */}
        <textarea type="text"
          className="px-5 h-32 py-2 font-medium border-2 flex items-start flex-row rounded w-full"
          placeholder="Write Details:"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className="bg-white text-black active:scale-95 rounded px-5 py-2 w-full">Add Note</button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 bg-gray-900">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5  h-[90%] overflow-auto ">
          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black py-6 px-4 bg-white">
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="leading-tight text-sm font-medium text-gray-500">{elem.details}</p>
              <button onClick={() => {
                deleteNote(idx)
              }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
