import React,{useReducer, useState} from 'react'
import { reducer } from './reducer';

const initialState = {
  data:"",
  loading:false,
  error:""
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const{data,loading,error}=state;
  console.log({state});
  //const[data,setData]= useState("");
  //const[loading,setLoading]= useState(false);
  //const[error,setError]= useState("");
  const fetchDog=()=> {
     //setLoading(true);
    //setError("");
    //setData("");
    dispatch({type:"FETCH_START"})
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res)=>res.json())
      .then((res)=>{
        dispatch({type:"FETCH_SUCCESS",payload:res.message});
        //setLoading(false);
        //setData(res.message);;
      })
      .catch(()=>{
        dispatch({type:"FETCH_ERROR",payload: "Error fetching data."});
        //setLoading(false);
        //setError("Error fetching data");

      })
  }
  return (
    <div className="container">
      <div >
      <button className="btn btn-success" onClick={fetchDog} disabled={loading}>Fetch Dog</button>
      {data && (
        <div>
          <img src={data} alt="Random dog"/>
        </div>
      )}
      {error &&<p>{error}</p>}
    </div></div>
    
  )
}
//useReducer
export default App