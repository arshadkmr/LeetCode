// const removeDuplicates = (head) =>{
//     if(!head)return null
//     let current = head
//     while(current){
//         if(current.val===current.next.val){
//             current.next=current.next.next
//         }
//         current=current.next
//     }
//     return current
// }

let digits = [1,2,9]
const num = BigInt(digits.join('')) + 1n;
const numToString = num.toString();

console.log(num);
console.log(numToString);