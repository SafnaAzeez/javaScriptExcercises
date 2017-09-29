/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function arrayD(n)
{
  for(var i=0;i<n;i++)
    {
      let input=prompt("enter the elements");
      array.push(input);
    }
console.log(array);
  
}
arrayD(3)

/*
Exception: TypeError: input.forEach is not a function
arrayD@Scratchpad/6:12:3
@Scratchpad/6:16:1
*/
/*
Exception: ReferenceError: array is not defined
arrayD@Scratchpad/6:17:3
@Scratchpad/6:20:13
*/
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/6:17
*/