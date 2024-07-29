// using let for a variable that needs to be updated
let clickCount = 0;
function countClicks(){
    clickCount++;
    document.getElementById('clickCount').innerText = 'You have clicked' + " " + clickCount + " " + 'times';
}