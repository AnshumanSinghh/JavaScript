// is there already a value for c in local storage
if (!localStorage.getItem('c')) {
    localStorage.setItem('c', 0);
}

function Counter() {
    let c = localStorage.getItem('c');
    c++;
    // alert(`Counter = ${c}`);
    document.getElementById("p").innerText = c;

    // if (c % 10 === 0) {
    //     document.querySelector('h1').innerHTML = `Goodbye! you have clicked ${c} times`;
    // }
    // else {
    //     document.querySelector('h1').innerHTML = "Welcome!";
    // }

    // // another way of doing the same thing
    // if (document.querySelector('h2').innerHTML === "Hello!") {
    //     document.querySelector('h2').innerHTML = "Goodbye!";
    // }
    // else {
    //     document.querySelector('h2').innerHTML = "Hello!";
    // }
    // update the c value with the new value
    localStorage.setItem('c', c);
}
// adding an event listener
document.addEventListener('DOMContentLoaded', function () {  // this will run only when the content is fully loaded.
    document.querySelector('#p').innerHTML = localStorage.getItem('c');
    document.querySelectorAll('button')[1].onclick = Counter;
    // document.querySelectorAll('button')[1].addEventListener('click', 'Counter');  // we can do the same using to addEventListener also.

    //setInterval(Counter, 1000); // after every 1sec or 1000 ms the Counter function will run.
});
