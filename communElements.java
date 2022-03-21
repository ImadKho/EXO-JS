function communElements(tab1, tab2)
{
    let k=0;
    let stop;
    var tab3 = [];
    for(let i=0; i<tab1.length; i++)
    {
        stop = false;
        for(var j=0; j<tab2.length && !stop ; j++)
        {
            if (tab1[i] == tab2[j])
            {
                tab3[k] = tab1[i];
                k++
                stop = true;
            }
        }
    }
    return tab3;
}

var tab1=[1,10,12,4];
var tab2=[1,2,3,4];

console.log(communElements(tab1, tab2));
