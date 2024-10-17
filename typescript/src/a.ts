let x:number=10;
console.log(x);

// function abc(namew:string){
//     console.log("hello "+namew);

// }
abc("hey 'Madhav Sahi");
function sum(a: number , b: number): number {
  return a + b;
}

let x = sum(1, 3); //type inference
console.log(x);

function RunAfter1Second(fxn: () => void): void {
  setTimeout(fxn, 1000);
}

// RunAfter1Second(function () {
//   console.log("hey there ");
// });
type Input = string | number;
function fxn(arr: Input[]): Input {
  return arr[0];
}
const value:Input = fxn(["hey", "hey2",1,2]);
// console.log(value.toUpperCase());
