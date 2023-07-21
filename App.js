import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (<h1>Namaste React Course</h1>);

const Heading = () => (
    <div className='container'>
    {Title()}
    <Title></Title>
    <Title/>
    <h2>Hello React by Bhushan Bobhate</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading/>);