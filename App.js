import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import FaceDetection  from './src/components/FaceDetection';
import './index.css';



const App = () => {
    // document.body.style = 'background: red'
    return(
    <div class="app">
        <Header/>
        <FaceDetection/>
    </div>
)}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);