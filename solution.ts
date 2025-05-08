function formateString(input:string, toUpper:boolean=true):string{
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}


function filterByRating(items: {title:string; rating:number}[]) : {title:string; rating:number }[]{
    return items.filter(item => item.rating >=4);
}


function concatenateArrays<T>(...arrays : T[][]) : T[]{
    const result : T[]=[];
    for (const arr of arrays){
        result.push(...arr)
    }
        return result;
    
}


