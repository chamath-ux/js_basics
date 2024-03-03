
function regexDefine(regex)
{
    var newRegex = new RegExp(regex,'i');
    return newRegex;
}

function usingTestMethod(str){

    return regexDefine('abc').test(str);
}

function usingExecMethod(str)
{
    return regexDefine('test').exec(str)
}

console.log(usingTestMethod('Abc'));
console.log(usingTestMethod('abc'));
console.log(usingExecMethod('01 test test test'));
console.log(usingMatchMethod('test6'));