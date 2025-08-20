function checkSpam(str){
    if(str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx'))
        return true;
    return false;
}

console.log(checkSpam('shebiViagra'));
