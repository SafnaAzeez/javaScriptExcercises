/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function sum(a1,a2)
{ var sum=[];
  for(var i=0;i<a1.length;i++)
    {
      for (j=0;j<a2.length;j++)
        {
          sum[i]=a1[i]+a2[i];
        }
    }
 
 if(a1.length>a2.length)
   {
     d=a1.length-a2.length;
     for(i=0;i<d;i++)
       {
        sum[a2.length+i]=a1[a2.length+i]
       }
   }
 else
   {
     d=a2.length-a1.length;
     for(i=0;i<d;i++)
       {
        sum[a1.length+i]=a2[a1.length+i]
       }
   }
 return sum;
}
console.log(sum([1,0,2,3,4],[3,5,6,7,8,13]));