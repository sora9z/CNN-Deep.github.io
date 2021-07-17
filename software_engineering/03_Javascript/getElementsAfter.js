function getElementsAfter(arr,n){

    // slice를 사용하여 n+1 index 이후의 값을 갖는 새 배열을 리턴한다.
    return arr.slice(n+1);
}

let output=getElementsAfter(['a','b','c','d','e'],2)
console.log(output)