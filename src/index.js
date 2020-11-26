// use CommonJS to import sum func from 'sum.js'
// const sum = require('./sum');

// use ES5 feature to import sum
// import sum from './sum';
// import './imageViewer';

// const total = sum(10, 5);

// console.log(total);

// try code splitting
const button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = () => {
    // function-like dynamic import, return a promise
    // import('./imageViewer').then( module =>
    //     console.log(module)
    // )
    // Dynamic imports
    import('./imageViewer');
};

document.body.appendChild(button);