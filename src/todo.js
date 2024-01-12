import React, { useState } from 'react'

function Todolist() {

  const [activity,setactivity]=useState("");
  const [listData, setlistdata]=useState([]);

  function handleinput(e){
    setactivity(e.target.value);
   
  }
  function removeactivity(i){
      const updatedlistdata = listData.filter((ele,id)=>{
        return i!=id;
      })
      setlistdata(updatedlistdata)
  }
  function addActivity(e){
    setlistdata((listData)=>{
      const updatedlist = [...listData,activity]
      // console.log(updatedlist)
      setactivity("")
      return updatedlist;
    }
    )
  }

  function removeall(){
    setlistdata([])
  }

  return (
    <>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' value={activity} placeholder='Add activity' onChange={handleinput}/>
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Your work Todo 📝</p>
        {
          listData!=[] && listData.map((data,i)=>{
            return(
              <>
                <p key={i}>
                  <div className='listData'>{data}</div>
                  <div className="btn-position" onClick={()=>removeactivity(i)}><button>Remove</button></div>
                </p>              
              </>
            )
          })
        }
        {listData.length>0 && <button onClick={removeall}>Remove all</button>}
        
      
      </div>
    </>
  )
}

export default Todolist
