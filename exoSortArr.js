function sortArr(arr)
{
    let X;
    for(let i=0; i<arr.length-1; i++)
    {
        for(let j=i+1; j<arr.length; j++)
        {
            if (arr[j]<arr[i])
            {
                X = arr[i];
                arr[i] = arr[j];
                arr[j] = X; 
            }
        }
    }
}

function displayArr(Arr)
{
    for(let i=0; i<arr.length; i++)
    {
        console.log(arr[i]);
    }
}

var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
sortArr(arr);
displayArr(arr);
