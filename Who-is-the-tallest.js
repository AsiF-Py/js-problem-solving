function tallestFriend(height){
    let tallest = height[0];
    for(var i = 0; i < height.length;i++){
       let element = height[i]
       if (element > tallest){
        tallest = element
       }
    }
    return tallest;
}
let heightList = [90,20,30,50,40,60]
console.log(tallestFriend(heightList))
