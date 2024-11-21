import axios from "axios"
import { useState,useEffect } from "react"
const Display=()=>{
    const [da,setda]=useState([])
    const displaydata=()=>{
        let api="http://localhost:3000/Student";
        axios.get(api).then((res)=>{
            setda(res.data)
        })
    }

const ans=da.map((key)=>{
return(
    <>
    <tr>
        <td  style={{padding:"10px"}}>{key.rollno}</td>
        <td  style={{padding:"10px"}}>{key.name}</td>
        <td  style={{padding:"10px"}}>{key.city}</td>
        <td  style={{padding:"10px"}}> {key.fees}</td>
    </tr>
    </>
)
})

useEffect(()=>{
    displaydata()
},[])

    return(
        <>
        <h1>Display Page</h1>
         <table border="2px solid">
            <tr>
                <th  style={{padding:"10px"}}>Roll no</th>
                <th  style={{padding:"10px"}}>Name</th>
                <th  style={{padding:"10px"}}>City</th>
                <th  style={{padding:"10px"}}>Fees</th>
            </tr>
            {ans}
         </table>
        </>
    )
}
export default Display;