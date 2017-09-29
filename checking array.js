/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */


var is_arrays= (input) =>
{
  return Array.isArray(input);
    
}
console.log(is_arrays('w3resource'));
console.log(is_arrays([1,2,4,0]));
console.log(is_arrays(true));
console.log(is_arrays(false));

/*
Exception: SyntaxError: redeclaration of let is_array
@Scratchpad/12:1:1
*/
/*
Exception: SyntaxError: redeclaration of let is_array
@Scratchpad/12:1:1
*/
/*
Exception: ReferenceError: isArray is not defined
is_array@Scratchpad/11:12:1
@Scratchpad/12:16:13
*/