/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function fibonacci(n) 
{
  if(n===1)
    {return [0];}
  else if (n===2)
   {
     return [0,1];
   }
  else
  { var res= fibonacci(n-1);
   res.push(res[res.length-1]+res[res.length-2]);
   return res;
   }
}

console.log(fibonacci(4));

/*
Exception: ReferenceError: fibanocci is not defined
fibonacci@Scratchpad/1:16:9
@Scratchpad/1:22:13
*/
/*
Exception: ReferenceError: fibanocci is not defined
fibonacci@Scratchpad/1:16:9
@Scratchpad/1:22:13
*/