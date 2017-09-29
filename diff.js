/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function difference(a1,a2)
{ result=[];
  a1.forEach(function(element){
    if(a2.indexOf(element)==-1)
      {result.push(element);}});
    a2.forEach(function(nelement){
    if(a1.indexOf(nelement)==-1)
      {result.push(nelement);}
  });
  return result;
}
console.log(difference([1,2,3],[100,2,1,10]));

/*
Exception: ReferenceError: element is not defined
difference/<@Scratchpad/8:17:8
difference@Scratchpad/8:15:5
@Scratchpad/8:21:13
*/