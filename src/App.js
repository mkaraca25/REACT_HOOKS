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
      <div className="container-md" >
        <div className="ana">
          <button className="btn-success" onClick={fetchDog} disabled={loading}><strong><em>Fetch Dog</em></strong></button>
          {data && (
            <div>
              <img id="img" src={data} alt="Random dog" />
            </div>
          )}
          {error && <p>{error}</p>}
        </div>
        <div className="metin">
          <p>1. <strong>Ö</strong>lü bir aslan olmaktansa, canlı bir köpek olmayı isterim. <u>Heinrich Heine</u><br /><br />
            2. <strong>U</strong>zaktan havlayan köpek, ısırmaz. <u>Thomas Muller</u><br /><br />

            3. <strong>M</strong>eydanı boş bulunca, geçen bir köpek bile büyük etki yapar. <u>Paul Valery</u><br /><br />

            4. <strong>K</strong>öpekler boğuşurken, birbirlerini ne kadar çok ısırırlarsa o kadar kızarlar. <u>Tolstoy</u><br /><br />

            5. <strong>K</strong>öpekle yatan, pireyle kalkar. <u>İspanyol Atasözü</u><br /><br />

            6. <strong>E</strong>vli kalmak çok zor, eşim köpeğimizi dudağından öpüyor; ama kesinlikle benim bardağımdan bir şey içmiyor. <u>Rodney Dangerfield</u><br /><br />

            7. <strong>A</strong>rayan köpek, eninde sonunda kemik bulur. <u>Barrow</u><br /><br />

            8. <strong>K</strong>öpeğin ölümü de köpekçe olur. <u>Anton Çehov</u><br /><br />

            9. <strong>K</strong>öpek, mamur olan yerde bulunur. <u>Mevlana</u> <br /><br />

            10. <strong>N</strong>e kadar çok insanla tanışırsam, köpeğimi o kadar, daha çok seviyorum.</p>
        </div>
      </div>
    </>
  )
}
//useReducer
export default App