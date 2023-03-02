import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const TextConverter = () => {

const changeToUpper=()=>{
    let newText=text.toUpperCase();
    setText(newText);
}
const changeToLower=()=>{
    let newText =text.toLowerCase();
    setText(newText);
}

const clearText=()=>{
    setText('');
}

const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
}

const handleOnChange=(e)=>{ 
    // console.log("On change");
    setText(e.target.value);
}
    const [text,setText] =useState("Enter Text Here");

    
  return (
    <>
      <div className="container my-5">
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Text Converter</Form.Label>
          <Form.Control as="textarea" rows={3} value={text} onChange={handleOnChange} id="mybox"/>
        </Form.Group>
      </Form>
        <Button className="my-2 mx-2" onClick={changeToUpper} type="submit">ConvertToUpperCase</Button>
        <Button className="my-2 mx-2" onClick={changeToLower} type="submit">ConvertToLowerCase</Button>
        <Button className="my-2 mx-2" onClick={clearText} type="submit">Clear Text</Button>
        <Button className="my-2 mx-2" onClick={handleExtraSpaces} type="submit">Remove Extra Spaces</Button>
      
      </div>
        <div className="container my-3">
            <h1> Your Text Summary </h1>
            <p>{text.split(" ").length-1} words and {text.length-(text.split(" ").length-1)} characters </p>
        </div>

        <div className="container my-3">
            <h3> Preview</h3>
            <p>{text}</p>
        </div>
</>
  );
};

export default TextConverter;
