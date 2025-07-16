
import { useEffect } from 'react';
import './App.css';

// import WebSocket from 'ws';

function App() {

  useEffect(()=>{
     const ws = new WebSocket("ws://localhost:8080");

     ws.onopen = ()=>{
      console.log("Connected to ws server");
    }

    ws.onclose = () => {
      console.log("WS server disconnected");
    }


  }, [])
     
}

export default App
