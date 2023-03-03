import { useState } from "react";
const Todo = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, data]);
    setData("");
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <center>
        {/* <h1 className="text-primar">Add Your Task Here</h1> */}
        <div className="p-3 mb-2 bg-danger text-white">TODO Management</div>

        <br></br>
        <div>
          <input
            className="text "
            type="text"
            placeholder="Add Task"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></input>
          <button className="btn btn-success mx-2" onClick={addItem}>
            Add
          </button>
          {items.map((elem, index) => {
            return (
              <div className="eachItem" key={index}>
                <span className="text-capitalize">{elem}</span>{" "}
                <button
                  className="btn btn-danger mx-5 my-2 "
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </center>

      {/*<div className="main-div">
    <div className="child-div">
        <figure>
            <img src="  " alt="todologo">
                <figcaption>Add Your List Here</figcaption>
            </img>
        </figure>
        <div className="addItems">
            <input type="text" placeholder="Add Task"></input>
            <i className="fa fa-lus add btn" title="add itme"></i>
        </div>
    </div>
</div> */}
    </>
  );
};
export default Todo;
