import React, {useState, useEffect} from 'react';
import randomcolor from "randomcolor";
import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-code-sprites';
import './App.css';

const App = () => {
  const [numb, setNumb] = useState(1);
  const [color, setColor] = useState('');
  let avatars = new Avatars(sprites, {background: '#fff'});
  let svg = avatars.create(color);

  useEffect(() => setColor(randomcolor()), [numb]);

  return (
    <div className="App" style={{backgroundColor: color}}>
      <div className="cvr">
        <div className="svg" dangerouslySetInnerHTML={{__html: svg}}></div>
        <button onClick={() => setNumb(numb + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
