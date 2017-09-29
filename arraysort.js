/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function sort(array1)
{
  for(var i=0; i<array1.length; i++)
    {
      for (var j=0; j<array1.length;j++)
      {
        if(array1[i]<array1[j])
        {
        var x= array1[i];
        array1[i]=array1[j];
        array1[j]=x;
         } 
        
      }
    }
  return array1;
};
console.log(sort([3,8,7,6,5,-4,3,2,1]));
