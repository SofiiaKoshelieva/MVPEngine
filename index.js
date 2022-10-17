const form = document.querySelector('form')
const input = document.querySelector('input')
const divEl = document.querySelector('.array')
const omittedEl = document.querySelector('.omitted')
let numbers = [];
form.addEventListener('submit', (e) => {
    e.preventDefault()
    divEl.textContent = ''
    omittedEl.textContent = ''
    numbers = [];
    const amount = input.value
    let arr =[]
    for (let i = 1; i <= amount; i++){
arr.push(i)
    }
   
  const el1 = Math.floor(Math.random() * (input.value - 2)) + 1;
 const el2 = Math.floor(Math.random() * (input.value - 3)) + 1;
    arr.splice(el1, 1)
    arr.splice(el2, 1)
    divEl.textContent = arr
    omitted(arr)
    omittedEl.textContent = numbers;
});

function omitted(arr) {
    let counter = 0;
    
   arr.map((el, index) => {
  if (counter === 0) {
    if (el !== index + 1) {
        const number = index + 1;
        numbers.push(number)

        if (arr[index] !== number + 1) {
          numbers.push(number+1)
    
        counter += 2;
      } else {
        counter++;
      }
    }
  } else if (counter === 1) {
    if (el !== index + 2) {
      counter++;
        const number = index + 2;
        numbers.push(number)

    }
  } else {
    if (el !== index + 3) {
        const number = index + 3;
        numbers.push(number)

    }
  }
}); 
}


