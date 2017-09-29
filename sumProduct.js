/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function sumProd(input)
{
  var sum=0; var product=1;
  input.forEach(function(element)
     
                {sum+=element;
                product*=element});
 
  console.log('sum is'+sum+'product is'+product);
}
sumProd([2,3,4]);