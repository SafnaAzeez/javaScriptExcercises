/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
function findDup(input)
{
  for(var i=0;i<input.length;i++)
    {
      for(var j=i+1;j<input.length;j++)
        {
          if(input[i]===input[j])
            { console.log(input[i]);
              input.splice(j,1);
            }
        }
    }
}

findDup(['n','s','s','a','f','a','n','a','n']);

                           
/*
Exception: ReferenceError: removeDup is not defined
@Scratchpad/4:23:1
*/