function removeDuplicateItema(name) {
    let items = []
    for (let i = 0; i < name.length; i++) {
        const names = name[i]
        if(items.includes(names)=== false){
            items.push(names);
        }
    }
    return items;   
}
itemsList = ['asif','sakib','robin','adama','asif','sakib']
console.log(removeDuplicateItema(itemsList));