/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function array_Clones(input)
{
  return Array.from(input);
}

console.log(array_Clones([1,2,4,0]));
console.log(array_Clones([1,2,[4,0]]));


/*
Exception: SyntaxError: redeclaration of let array_Clones
@Scratchpad/13:1:1
*/
/*
Exception: SyntaxError: redeclaration of let array_Clones
@Scratchpad/13:1:1
*/