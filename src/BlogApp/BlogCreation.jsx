import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
const CreateBlog=()=>{
    const [author,setAuthor]=useState("");
    const [title,setTitle]=useState("")
    const [images,setImages]=useState([])
    const [description,setDescription]=useState("")
    const [content,setContent]=useState("")
    
    const data={
        "author":author,
        "title":title,
        "images":images,
        "description":description,
        "content":content,
        "likes":"0"
    }

    const handleClick=async()=>{

        

          try{
             await axios.post("http://localhost:5000/posts",data)
          }
          catch(err){
            console.log("please try after some time")
          }
    }
    return(
        <>
        <h1>blog creation</h1>
        <input type="text" 
        placeholder="enter name"
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
         />
         <br></br><br></br>
         <input type="text"
          placeholder="enter title" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
          <br></br><br></br>
        
         <input type="text" 
         placeholder="enter description" 
         value={description}
         onChange={(e)=>setDescription(e.target.value)}
         />
         <br></br>
         <textarea 
         placeholder="write content here"
         rows="4" 
         cols="90" 
         value={content}
         onChange={(e)=>setContent(e.target.value)}
         />
         <br></br>
         <input
          type="text"
          multiple
          
          onChange={(e)=>setImages([...images,e.target.value])}
          />

         
       
       
         <button onClick={handleClick}>POST</button>

        </>
    )
   
}
export default CreateBlog;