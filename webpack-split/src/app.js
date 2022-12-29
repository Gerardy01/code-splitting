import changeContent from './utils/changeContent';


const button = document.getElementById("button");

button.addEventListener("click", function () {
    const test = document.getElementById("test")
    changeContent(test)
});

