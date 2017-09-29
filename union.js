/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function union(a1,a2)
{
  a2.forEach(function(element){
    if(a1.indexOf(element)==-1)
      {a1.push(element);}
  });
  return a1;
}
console.log(union([1,2,3],[100,2,1,10]));