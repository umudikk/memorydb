
/*
Bu fonksiyon gelen '<156' gibi verileri alır işlem '<' ve değer '156' olarak parçalar ve 
sonunda bir condition 'v < 156' döndürür.
*/
export function mwfilterparser(str,prop){ 

    let char=str.toString()[0]
    let value =str.substring(1,str.length)

    console.log(char)
    console.log(value)
    console.log(prop)
    
    return function filterparser(v){
        if(char=='<')      return v[prop] < value
        else if(char=='>') return v[prop] > value
        else if(char=='!') return v[prop] != value 
        else               return v[prop] == str
    } 
}

