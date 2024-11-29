import Table from 'react-bootstrap/Table';
import {message} from 'antd';
import { useState } from "react"
import axios from "axios";
const Search=()=>{  
    const [input,setinput]=useState("");
    const [mydata,setMydata]=useState([]);

    const hadleSubmit=()=>{
   let api=`http://localhost:3000/books?publish_year=${input}`;
   axios.get(api).then((res)=>{

    if(res.data.length<1){
        message.error("No books found for that year");
    }
    else{
    setMydata(res.data);}
    })
}


const ans=mydata.map((key)=>{
return(
<>

<tr>
    <td> {key.name}</td>
    <td> {key.price}</td>
    <td> {key.author_name}</td>
    <td>{key.publish_year}</td>
</tr>
</>
)

})
    return(
        <>
      <h1>Search book </h1>
      Enter year <input type="text" name="publish_year" onChange={(e)=>{setinput(e.target.value)}} />
      <button onClick={hadleSubmit}>Submit</button>

      <hr />

      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th> Book name</th>
          <th>Price</th>
          <th>Author Name</th>
          <th>Publish Year</th>
        </tr>
      </thead>
      <tbody>
    
      {ans}
    </tbody>
    </Table>
        </>
    )
}    

export default Search