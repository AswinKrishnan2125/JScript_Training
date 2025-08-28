class FormatError extends SyntaxError{
    constructor(msg){
        super(msg);
        this.name = this.constructor.name;
    }
}

try{
    throw new FormatError("formatting error");
}catch(err){
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}