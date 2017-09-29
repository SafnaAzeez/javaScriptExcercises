/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function append(input,o)
{
  for(var i=0;i<input.length;i++)
    {   if(i>9&&i<20)
          o1=o[0];
     else if(i%10>0&&i%10<4)
       o1=o[i];
     else
       o1=o[0];
     
     console.log(i+o1+' colour is '+input[i]);
    }
}
append(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],["th","st","nd","rd"]);
