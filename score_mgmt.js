scores=[40,99,12,56,19,65,88,93,34,55]

for(let i=0; i<scores.length; i++)
{
    if(scores[i]<=40)
    {
        scores[i]=scores[i]+20
        
    }
    else if(scores[i]>=90)
    {
        scores[i]=90
    }
    else{
       continue
    }
}

let count=0;
for(let i=0; i<scores.length; i++)
{
    if(scores[i]>=50)
    {
        count=count+1
    }
    else{
        continue
    }
}
console.log("The number of students passes are:", count)
console.log("the updated marks are: ",scores)