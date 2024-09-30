const t = (input, markers) =>{
    let result = input.split('\n').map(text => {
        for (let marker of markers){
            let index = text.indexOf(marker);
            if(index !== -1){
                text = text.slice(0, index);
            }
        }
        return text.trim();
    })

    return result.join('\n');
}


// console.log(t("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
console.log(t('aa bb cc', []));