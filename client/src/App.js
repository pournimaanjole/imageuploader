import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [file,setfile] = useState()

  const uploeadfile = (e)=>{
const formdata = new FormData();
formdata.append('file',file)

    // console.log(file)
    try{
      axios.post('/api/v1/upload',formdata)
    }catch(e){
      console.log(e.message)
    }
    
  }
  return (
    <div>
      <div>

        <input type='file' onChange={(e)=>{setfile(e.target.files[0])}} />
        <button type='button' onClick={uploeadfile}>upload</button>
        </div>
    </div>
  )
}

export default App
