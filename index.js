const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;
console.log('Hello');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greet = 'namaste' + ', ' + name;
  res.send(greet);
});
app.get('/check-num', (req, res) => {
  let number = parseInt(req.query.num);
  if (number % 2 == 0) {
    res.send('even Number');
  } else res.send('Odd Number');
});
function getMessage(uname) {
  return 'Welcome to code Daily Hub ' + uname;
}
app.get('/welcome', (req, res) => {
  let uname = req.query.uname;
  res.send(getMessage(uname));
});
function checkPswd(pswd) {
  console.log(pswd.length);
  if (pswd.length > 15) return 'Password is strong';
  else return 'Password is WEAK';
}
app.get('/check-paswd', (req, res) => {
  let paswd = req.query.pswd;
  res.send(checkPswd(paswd));
});
function sum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
app.get('/sum', (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  res.send(sum(num1, num2));
});
//calculate fuel cost
function getFuelCost(distance,fuelEfficiency,fuelPrice)
{
  let fuelCost = (distance / fuelEfficiency) * fuelPrice;
  return fuelCost;
}
app.get('/fuel-cost', (req,res) => {
  let distance = parseFloat(req.query.distance);
  let fuelEfficiency = parseFloat(req.query.fuelEfficiency);
  let fuelPrice = parseFloat(req.query.fuelPrice);
  res.send(getFuelCost(distance,fuelEfficiency,fuelPrice).toString());
});
//calculate the area of rectangle
function calculateRectangleArea(length,width)
{
  let area = length * width;
  return area;
}
app.get('/rectangle-area', (req,res) => {
  let length = parseFloat(req.query.length);
  let width = parseFloat(req.query.width);
  res.send(calculateRectangleArea(length,width).toString());
});

