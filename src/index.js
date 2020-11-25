// use CommonJS to import sum func from 'sum.js'
// const sum = require('./sum');

// use ES5 feature to import sum
import sum from './sum';
import './imageViewer';

const total = sum(10, 5);

console.log(total);