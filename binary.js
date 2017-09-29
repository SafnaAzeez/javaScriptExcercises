/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function binary(input,n)
{
  var mid=input.lenth/2;
  var first=0;
  var last=input.length-1;
  mid=Math.floor((first+last)/2);
  while(input[mid]!=n && first<last)
 {
  if(input[mid]>n)
    {
      last=mid-1;
    }
  else
    {
      first=mid+1;
    }
   mid=Math.floor((first+last)/2);
 }
  return mid
}
console.log(binary([1, 2, 3, 4, 5, 7, 8, 9],5));

