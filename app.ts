const num1E= document.getElementById("num1") as HTMLInputElement;
const num2E= document.getElementById("num2") as HTMLInputElement;
const buttonE= document.querySelector('button')!;

const numResults : Array<number> = [];
const textResults : String[]=[];

type NumOrString = number | string;
type Result = { val : number; timestamp:Date};

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1:NumOrString,num2 :NumOrString){
    if (typeof num1 == 'number' && typeof num2 == 'number'){
    return num1 + num2;
    }

    else  if (typeof num1 == 'string' && typeof num2 == 'string'){
        return num1 + " " + num2;
        }

        return num1 + " " + num2;
}

function printResult(resultObj:ResultObj){
    console.log(resultObj.val)
}


buttonE.addEventListener('click',()=>{

    const num1= num1E.value;
    const num2= num2E.value;
    const result= add(+num1, +num2)
    

    numResults.push(result as number);
    const stringResult=add(+num1, +num2)
    textResults.push(stringResult as string);
    printResult({ val : result as number, timestamp : new Date()})
    console.log(numResults, textResults)

    //console.log(result)
    //console.log(stringResult)
})
//console.log(add(1,6));

//console.log(add("1","6"));


const myPromise =new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve('It Worked')
    },1000);
    
})

myPromise.then((result)=>{
    console.log(result.split('w'));
})