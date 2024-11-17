import React, { useRef } from 'react';
import exampleImage from './assets/u4.jpg';
import * as tf from '@tensorflow/tfjs';

let model = null;
tf.loadLayersModel('/model.json').then(loadedModel => {
    model = loadedModel;
}).catch(error => console.error('Failed to load model', error));

function ImageRecognizerComponent4() {
    const imageRef = useRef(null);

    async function recognizeImage() {
        // 
        if (!model) {
            console.log('Model not loaded yet');
            return;
        }

        const tensor = tf.browser.fromPixels(imageRef.current)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims(0);

        try {
            const prediction = await model.predict(tensor);
            const probabilities = await prediction.data();
            // Get the class index with the highest probability
            const predictedIndex = prediction.argMax(1).dataSync()[0];
            
            if(predictedIndex === 1){
                document.getElementById('i4').value = 'Cat';
            }else{
                document.getElementById('i4').value = 'Not a cat';
            }
           
        } catch (error) {
            console.error('Error during prediction', error);
        }
    }

    return (
        <div className='card'>
            <h5>Ukendt billede #4</h5>
            <img ref={imageRef} src={exampleImage} width="224" height="224" style={{
                borderRadius: '50%'
            }}/> 
            <button onClick={recognizeImage}>Kør</button>
            <input id="i4" type="text"  readOnly style={{
                borderRadius: '4px'
            }}/>
        </div>
    );
}

export default ImageRecognizerComponent4;
