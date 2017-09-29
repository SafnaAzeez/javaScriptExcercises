/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function addDashes(num)
{
  var number=num.toString();
  var result=[];
  var i=0;
  while(i < number.length)
    {
      
        if(number[i]%2==0 && number[i+1]%2==0)
        {
          result += number[i] + '-';
        }
      else
        {
        result += number[i];
        }
      i++;
      
    }
  return result;
}

console.log(addDashes(25468));
