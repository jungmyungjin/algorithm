function solution(strings, n) {
    strings= strings.sort((a,b)=>{
        if (a.charAt(n) < b.charAt(n))
            return -1;
        else if (a.charAt(n) > b.charAt(n))
            return 1;
        else if (a.charAt(n) === b.charAt(n))
        {
            if (a<b)
                return -1;
            else if (a<b)
                return 1;
        }
    })
    return strings
}