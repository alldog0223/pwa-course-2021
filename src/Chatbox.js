<<<<<<< HEAD
import './Chatbox.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
=======
import { useState } from 'react';
>>>>>>> 25e06fd5d5c7e3f31bdba663914436ba27fb2cac
import App from './App';

function Chatbox() {

<<<<<<< HEAD
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = ()=>{
    setLines([...lines,text])
    setText("");
  };

  const keyPress = (event)=>{
    
    if(event.which === 13){
    onSend();
    }
  };
  return (
    <App>
    <div className="App">
      <div className="App-header">
          Neptune Chat
      </div>
      <div className="App-chatroom">
        {
        lines.map(x=> {
          return <div className="App-chatroom-text">
            {x}
          </div>
        })
      }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" value={text} onChange = {onTextChange} onKeyPress={keyPress} />
        <div className="App-textbox-send"onClick={onSend}>Send!</div>
      </div>
    </div>
    </App>
  );
=======
    const [text, setText] = useState('');
    const [lines, setLines] = useState([]);

    const onSend = () => {
        if (text.length < 1) return;
        setLines([...lines, text]);
        setText("");
    }

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const onKeyPress = (event) => {
        if (event.which === 13) {
            onSend();
        }
    }

    return (
        <App>
            <div className="App-chatroom">
                {
                    lines.map(msg => {
                        return <div key={msg} className="App-chatroom-text">
                            {msg}
                        </div>
                    })
                }
            </div>

            <div className="App-textbox">
                <input placeholder='Type something...' type="text" className="App-textbox-input" value={text} onKeyPress={onKeyPress} onChange={onTextChange} />
                <div className="App-textbox-send" onClick={onSend}>Send!</div>
            </div>
            <div>
            </div>
        </App>
    );
>>>>>>> 25e06fd5d5c7e3f31bdba663914436ba27fb2cac
}

export default Chatbox;
