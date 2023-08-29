let myName = "Rushikesh Shinde";

let anotherName = myName; // Here another name gets copy of my name as it is in stak
anotherName = "sidbankar"; // here the valu get change

console.log(anotherName);
console.log(myName);

/* 
**                                  **
**                                  **
**                                  **
** anotherName=>addres of "sidba.." **
**                                  **
**                                  **
**   * * * * * * * * * * * * * *    **
**                                  **
**                                  **
** anotherName=>addres of "Rushi..."**
**                                  **
**                                  **
**   * * * * * * * * * * * * * *    **
**                                  **
**                                  **
** myName =>addres of "Rush...inde" **
**                                  **
**                                  **
************** STACK *****************
**************************************

*/

let userOne = {
  email: "user@google.com",
  upi: "abcd@ybl",
};

let userTow = userOne;

console.log(userOne.upi);
console.log(userTow.upi);

userOne.upi = "wxyz@ybl";
// userOne = {
//   email: "user@google.com",
//   upi: "wxyz@ybl",
// };
console.log(userOne.upi);
console.log(userTow.upi);

userOne = {
  email: "user@google.com",
  upi: "pqrst@ybl",
};
console.log(userOne.upi);
console.log(userTow.upi);

/*
*********************************************
************* NON-Primitive *****************
**                                         **
** userOne => address of {                 **
**    email =>  address of "user@goog..."  **
**    upi =>  address of "abcd@ybl"        **
**                        }                **
**                                         **
** userTwo => address of {                 **
**    email =>  address of "user@goog..."  **
**    upi =>  address of "abcd@ybl"        **
**                        }   /|\          **
**                             |           **
**          address update to "pqrst@ybl"  **
**************** HEAP ***********************
*********************************************

 */
