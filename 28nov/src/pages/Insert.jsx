import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import {message} from 'antd';


const Insert=()=>{
    const [input, setInput] =useState({});



    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }


    const handleSubmit=()=>{
        let api="http://localhost:3000/books";
        axios.post(api,input).then((res)=>{
            message.success("Book Inserted Successfully");
        });
    }


    return(
        <>
         <h1> Insert Books</h1>
         <Form style={{width:"50%", paddingLeft:"25%"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book name</Form.Label>
        <Form.Control type="text" name="name" value={input.name}  onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book price</Form.Label>
        <Form.Control type="text" name="price" value={input.price} onChange={handleInput}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Author name</Form.Label>
        <Form.Control type="text" name="author_name" value={input.author_name}   onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book Publish year</Form.Label>
        <Form.Control type="text"  name='publish_year' value={input.publish_year}  onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

        
        </>
    )
}

export default Insert;