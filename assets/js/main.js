// ------- 1.2 getElementsByClassName ----------
let example = document.getElementsByClassName("example")
console.log(example);
function myFunction() {
    for (let i = 0; i < example.length; i++) {
        console.log("test");
        example[i].style.backgroundColor = "black";
    }
}
// ------- 2.3 getElementsByTagName ----------
let art = document.getElementsByTagName("article")
console.log(art);
function change(){
    art[0].style.backgroundColor= "#f6c89f";
    art[1].style.backgroundColor= "#ffe7d1"
    art[2].style.backgroundColor= "#4b8e8d"
    art[4].style.backgroundColor= "#396362"
    console.log("test");
}
// ------- 2.4 DOM Background Colors ----------
const button = document.getElementById('button');
const changeColor = document.getElementById('farbeAuswahlen');

button.addEventListener('click', function () {
    event.preventDefault();
    let bgColor = changeColor.value.toLowerCase().replace(' ', '');
    document.body.style.backgroundColor = bgColor;
});