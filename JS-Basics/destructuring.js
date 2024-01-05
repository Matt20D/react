// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const {PI, E, SQRT2}  = Math;

// Somewhere in a React App
// const {Component, Fragment, useState} = require('react');
// useState();

// const circle = {
//   label: 'circleX',
//   radius: 2,
// };

// named args

// optional arg is signified `by = {}`
// const circleArea = ({radius}, {precision = 2} = {}) =>
//   (PI * radius * radius).toFixed(precision);

// console.log(
//   circleArea(circle, { precision: 5 })
// );

// positional values

// const [first, second,, forth] = [10, 20, 30, 40];

// const [value, setValue] = useState(initialValue);

const [first, ...restOfItems] = [10, 20, 30, 40];

// console.log(first);
// console.log(restOfItems);

const data = {
	temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const {temp1, temp2, ...person} = data;

// shallow copies, any nested references will be shared.

// spread items into a new array, will be a copy of restOfItems
const newArray = [...restOfItems];

// can also do spread with objects
const newObject = {
  ...person
}