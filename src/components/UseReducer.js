import { useState ,useReducer} from "react";


//reducer function usinfg useState
// const UseReducer=()=>{
//     const [count, setcount] = useState(0);
//     return(
//         <>
//          UseReducer using useState Hook
//             <p>{count}</p>
//             <button onClick={()=>setcount(count+1)}>Increment</button>
//             <button onClick={()=>setcount(count-1)}>Decrement</button>
//         </>
//     );
// }
// export default UseReducer;

//reducer function using useReducer hook

const UseReducer=()=>{
    const initialState =0;
    const reducer=(state, action)=>{

        switch(action.type){
            case "INCREMENT": return state +1;
            case "DECREMENT": return state -1;
            default: return state; 

        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
 return(
    <center>
         <div className="p-3 mb-2 bg-danger text-white text-center ">INCREMENT/DECREMENT USING USE REDUCER</div>

            <div className="container">
             <p className="mx-5">{state}</p>
             <button className="btn btn-primary mx-2" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
             <button className="btn btn-danger" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
         
    </div>
    </center>

 );   
}
export default UseReducer;