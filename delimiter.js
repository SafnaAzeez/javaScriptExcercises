/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function delimiter(input,d)
{
  var res='';
  for(var i=0;i<input.length;i++)
    {
      if(i!=input.length-1)
        {
          res+=input[i]+ d;
        }
      else
        res+=input[i];
    }
  return res;
}
console.log(delimiter([2,3,6,3],'+'));