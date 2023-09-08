// IIFE => Immediately Invoked Function Expressions

(function chi() {
  console.log(`DB Connected`);
})()(
  // in this case the function will not remain in the storage of compiler for long it will exicute and get collaps

  (name) => {
    console.log(`hello lets have chai with ${name}`);
  }
)("rusi");
// here if you are using two iife it will be sepreted by *******;******* otherwise it will throw errore
(() => console.log("hello"))();
