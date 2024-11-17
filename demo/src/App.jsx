import React from 'react';


import ImageRecognizerComponent1 from './ImageRecognizerComponent1'
import ImageRecognizerComponent2 from './ImageRecognizerComponent2'
import ImageRecognizerComponent3 from './ImageRecognizerComponent3'
import ImageRecognizerComponent4 from './ImageRecognizerComponent4'
import ImageRecognizerComponent5 from './ImageRecognizerComponent5'
function App() {
  return (
    <div className='app-container'>
      <h2> Billedegenkendelse</h2>
      <div className='card-container'>
        <ImageRecognizerComponent1  />
        <ImageRecognizerComponent2  />
        <ImageRecognizerComponent3  />
        <ImageRecognizerComponent4  />
        <ImageRecognizerComponent5  />
      </div>
    </div>
  );
}

export default App;
