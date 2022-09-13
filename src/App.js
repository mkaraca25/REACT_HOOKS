import React, { useReducer, useState } from 'react'
import { reducer } from './reducer';
import './App.css'
const initialState = {
  data: "",
  loading: false,
  error: ""
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = state;
  console.log({ state });
  //const[data,setData]= useState("");
  //const[loading,setLoading]= useState(false);
  //const[error,setError]= useState("");
  const fetchDog = () => {
    //setLoading(true);
    //setError("");
    //setData("");
    dispatch({ type: "FETCH_START" })
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.message });
        //setLoading(false);
        //setData(res.message);;
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR", payload: "Error fetching data." });
        //setLoading(false);
        //setError("Error fetching data");

      })
  }
  return (
    <>
    <div className="container " >
      <div className="ana">
        <button className="btn-success" onClick={fetchDog} disabled={loading}>Fetch Dog</button>
        {data && (
          <div>
            <img id="img" src={data} alt="Random dog" />
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
    <div className="metin">
      <p>1. Ölü bir aslan olmaktansa, canlı bir köpek olmayı isterim. Heinrich Heine<br/><br/>
        2. Uzaktan havlayan köpek, ısırmaz. Thomas Muller<br/><br/>

3. Meydanı boş bulunca, geçen bir köpek bile büyük etki yapar. Paul Valery<br/><br/>

4. Köpekler boğuşurken, birbirlerini ne kadar çok ısırırlarsa o kadar kızarlar. Tolstoy<br/><br/>

5. Köpekle yatan, pireyle kalkar. İspanyol Atasözü<br/><br/>

6. Evli kalmak çok zor, eşim köpeğimizi dudağından öpüyor; ama kesinlikle benim bardağımdan bir şey içmiyor. Rodney Dangerfield<br/><br/>

7. Arayan köpek, eninde sonunda kemik bulur. Barrow<br/><br/>

8. Köpeğin ölümü de köpekçe olur. Anton Çehov<br/><br/>

9. Köpek, mamur olan yerde bulunur. Mevlana<br/><br/>

10. Ne kadar çok insanla tanışırsam, köpeğimi o kadar, daha çok seviyorum.</p>
    </div>
  </>
  )
}
//useReducer
export default App