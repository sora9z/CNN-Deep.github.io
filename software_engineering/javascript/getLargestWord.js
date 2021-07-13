function getLargestWord(str){
    
    // 문자열의 각 단어를 입력 받을 빈 배열을 선언하고 문자열을 split 을 사용하여 각 단어로 초기화를 한다.
    let strToarr=str.split(" ")
    
    // max 값을 넣기 위한 변수를 선언하고 arr[0].lentgh으로 초기화를 해준다.
    let maxLen=strToarr[0].length 
    
    // 배열의 길이만큼 반복문을 실행시킨다.
    
    for(let i of strToarr){
        
        // maxLen 과 비교하고 더 크면 값을 재할당 한다.
        if(strToarr[i].length>maxLen){
            maxLen=strToarr[i].length
        // 작으면 아무 동작도 하지 않는다
        }
    }
    return maxLen
}

str1="Sora is an Deep learning Enginner"
str2="Sora love Taeng"
getLargestWord(str1)
