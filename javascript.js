const messages = ['Happy New Year', 'You are awesome!', 'No pain, no gain', 'Your future is full of fortune!', 'The best is yet to be.', 'Try to be a rainbow in someone\'s cloud.', 'Do good and good will come to you.'];
function newMessage() {
    let randomNumber = Math.floor(Math.random() * messages.length);
    document.getElementById('messageDisplay').innerHTML = messages[randomNumber];
};