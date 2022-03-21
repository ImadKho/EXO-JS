function isEquivalent(o1, o2)
{
    for(key in o1)
    {
        if(o1[key] !== o2[key])
            return false;
    }
    return true;
}

var o1 = {
    firstName : "Imad",
    lastName : "BELAIDI",
    age : 19
}

var o2 = {
    firstName : "Imad",
    lastName : "BELAIDI",
    age : 19
}

console.log(isEquivalent(o1,o2));
