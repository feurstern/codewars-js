const titleCase = (str) => {

    let newStr = [];

    str.split(' ').forEach(x=>{
        newStr.push(x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    })

    return newStr.join(' ');

};



const t = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

console.log(t)
