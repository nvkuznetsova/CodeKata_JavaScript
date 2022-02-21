# THIS keyword

[YDKJS: this (chapter 1)](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md)

[YDKJS: this (chapter 2)](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md)

When a function is invoked, an activation record, otherwise known as an execution context, is created. This record contains information about where the function was called from (the call-stack), how the function was invoked, what parameters were passed, etc. One of the properties of this record is the this reference which will be used for the duration of that function's execution.

Determining the `this` binding for an executing function requires finding the direct call-site of that function. Once examined, four rules can be applied to the call-site, in this order of precedence:

- Arrow function? Use `this` from the outer lexical scope. Ignore `call` or `apply` or `bind`.

- Called with `new`? Use the newly constructed object.

- Called with `call` or `apply` (or `bind`)? Use the specified object.

- Called with a context object owning the call? Use that context object.

- Default: `undefined` in `strict mode`, global object otherwise.
