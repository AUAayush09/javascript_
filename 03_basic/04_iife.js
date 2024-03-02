// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined

// ==> This prevents accessing variables within the IIFE idiom as well as polluting the global scope


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
