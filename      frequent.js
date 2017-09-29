/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function frequent(input)
{
  var count=0;
  var large=0;
  for(var i=0;i<input.length;i++)
    {
      for(var j=0;j<input.length;j++)
        {
          if (input[i]==input[j])
              count++;
              if(count>large)
            {
              large=count;
             var index=input[i];
            }
        }
      count=0;
    }
  console.log(index+"("+large+"times )");
}

frequent([3, 'a', 'a', 2, 3, ,'a','a', 3, 'a', 2, 4, 9, 3]);


/*
undefined
*/