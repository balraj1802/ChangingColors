// generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
};
   let IntervalID
const startChangingColor = function () {
   IntervalID = setInterval(changeBG,500);
  function changeBG(){
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
 clearInterval(IntervalID);
  };
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)