/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function swapCase(string)
{
  var output='';
  for(var i=0;i<string.length;i++)
    {
      if(string[i]== string[i].toLowerCase())
        {
          output+=string[i].toUpperCase();
        }
      else
        {
          output+= string[i].toLowerCase();
        }
    }
 return output;
}

console.log(swapCase('The Quick Brown Fox'));

