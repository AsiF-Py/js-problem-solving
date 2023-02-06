// Method 01
function reverse(text) {
    let reverse = []
    for (let i = text.length-1; i >= 0; i--) {
        const element = text[i];
        // console.log(element);
        reverse.push(element)
    }
    return reverse;
}
console.log(reverse('My Name Is Asif'));

// Method 02
function reverse(text) {
    let word = text.split(' ');
    let reverseWord = []
    for (let i = word.length - 1 ; i >= 0 ; i--) {
        const element = word[i];
        reverseWord.push(element)
    }
    return reverseWord

}
console.log(reverse('My Name Is Asif'));
