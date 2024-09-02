import { useState } from 'react';

import './App.css';
import axios from 'axios';

function App() {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");

 async function generateAnswer(){
  setanswer("Loading....")
    const response= await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDlwjXGulKabSOeSt6lsol8uz4vd_kaJMI",
      method: "POST",
      data: { contents :[{ parts :[{ text : question}]}]}
    })
    setanswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
  }

  return (
    <>
      <h1>How may I help you?</h1>
      <textarea className='border rounded w-full' value={question} onChange={(e)=>setquestion(e.target.value)} cols="30" rows="10" placeholder= "Ask anything"></textarea>
      <button onClick={generateAnswer}>Generate answer</button>
      <pre>{answer}</pre>
    </>
  )
}

export default App;
