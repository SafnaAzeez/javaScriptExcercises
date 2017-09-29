/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function shuffle(input)
{
  for(var i=0;i<input.length;i++)
  {var temp;
  var random=Math.floor(Math.random()*input.length);
    temp=input[i];
   input[i]=input[random];
   input[random]=temp;
  }
  return input;
}
console.log(shuffle([1,2,6,4,8,9]));