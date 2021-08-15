const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

//btn.onclick = function () {
//    alert('Click');
//};

//btn.addEventListener('click', () => {
//   alert('click');
//});

let i = 0;

const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
    //event.target.remove();
    //alert('Second click');
    //i++;
    //if (i == 1) {
    //    btns.removeEventListener('click', deleteElement);
    //}
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();

    console.log(event.target);
});

const div = document.querySelector(".click");
div.addEventListener('click', () => {
    console.log("OK")
});