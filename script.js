console.log("Hello world!");
function computerPlay () {

}
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 3));