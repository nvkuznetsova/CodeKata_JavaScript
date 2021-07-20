## Scope
<hr>
The key idea of "lexical scope" is that it's controlled entirely by the placement of functions, blocks, and variable declarations, in relation to one another.

Scope ассоциирует блоки, функции и переменные по отношению друг другу.

## Closure
<hr>
For closure to be observed, a function must be invoked, and specifically it must be invoked in a different branch of the scope chain from where it was originally defined.

Closure is observed when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) wouldn't be accessible.
The key parts of this definition are:
- Must be a function involved;
- Must reference at least one variable from an outer scope;
- Must be invoked in a different branch of the scope chain from the variable(s).