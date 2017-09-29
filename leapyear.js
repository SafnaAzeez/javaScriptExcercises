/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function leapYear(input)
{ var input1=[];
  for(var i=0;i<input.length;i++)
  { 
    if((input[i]%4==0 &&input[i]%100!=0)||input[i]%400==0)
       input1.push(input[i]);
}
return input1;
}
console.log(leapYear([2000,2001,2002,2004,2008,2010,2700]));
