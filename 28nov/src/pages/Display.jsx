import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata] = useState([]);


    const loadData=()=>{
        let api="http://localhost:3000/books";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    }, [])

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.name} </td>
                <td> {key.price} </td>
                <td> {key.author_name} </td>
                <td> {key.publish_year} </td>
              </tr>
            
            </>
        )
    })

    return(
        <>
         <h1> Display Books</h1>


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

export default Display;