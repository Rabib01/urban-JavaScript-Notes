// motherfucker lost all of my progress till now

{
  /**
   * Primitives Vs References
   * here when we do y = 7 after doing let y = 5, we are changing hte value to y
   * we are not changing the reference to hte objectg
   * const a = ["JS", "Python"]
   *
   * at fitrst both of them are 6
   * 
        let alpha = 5;
        let beta = 6;
        alpha = beta;
        // beta = 7;
        console.log(`The value for alpha: ${alpha} and 
        The balue for beta: ${beta}`);
   * 
   * bit if I cahnge the beta to 7, then only beta will hcange, alpha will reamin the same 
   * This is the case for primitive types, we are changing the values of the primitives only and we are not changing hte references to these primitives 
   *
      let a = ["JS", "Python"];
      let b = ["HTML", "CSS"];

      b = a;
      console.log(a, b);

      b.push("C-Sharp");
      b.push("C++");

      console.log(`The result of a and b after the two pushed on b :`);
      console.log(a, b); 
   * Hpwever if we are dpomg tjs 
   * changing or im tjs case if wer are pushng some new values onto b, it is changign a as well 
   * This proves that wer are not onlu changing the values for b but the values for a as well 
   * this prtovbes that we are infacv whe we did a = b we copeid the referece of b to that of a, 
   * we are copying the reference to the memporu address of those vairables in hte heap so that both of htem are now pointingv to the same objextg
   * therefore this is the main difdfernce betweenm primitives and references in js 
   * 
   * Howerer there is no true pass by reference in jsm we are acually copying tghye va;ie to the block of memory adderss and not the memory sddress itself, we are just changing one primitive for anot her
   * 
   * in primitives changing one does not changfe tghe othger 
   *  
   * ig it was actia; pass by reference we cpi;d ckange the pomter point to som,ethoig else
   */
}

const x = 5;
let y = 5;
y = 7;
console.log(y);

let alpha = 5;
let beta = 6;
alpha = beta;
beta = 7;
console.log(`The value for alpha: ${alpha} and 
    The balue for beta: ${beta}`);

let a = ["JS", "Python"];
let b = ["HTML", "CSS"];

b = a;

console.log(a, b);

b.push("C-Sharp");
b.push("C++");

console.log(`The result of a and b after the two pushed on b :`);
console.log(a, b);

// a.push("Go-Lang");

{
  /**
   * array methods
   * can sjupt this part - practising these basic problems a lot
   * will be practising leet code from now on
   */
}

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Bedana"];
