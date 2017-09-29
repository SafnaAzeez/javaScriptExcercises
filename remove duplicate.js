/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function removeDup(input)
{
  for(var i=0;i<input.length;i++)
    {
      for(var j=i+1;j<input.length;j++)
        {
          if(input[i]==input[j])
            {
              input.splice(j,1);
            }
        }
    }
  return input;
}
console.log(removeDup([2,3,4,4,5,7,8]));


/*
Exception: ReferenceError: input is not defined
@Scratchpad/7:24:1
*/
/*
Exception: ReferenceError: input is not defined
@Scratchpad/7:24:1
*/