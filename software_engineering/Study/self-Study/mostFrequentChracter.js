function mostFrequentCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 가장 많이 반복되는 문자가 다수 : 객체 1을 선언하여 반복 횟수를 넣는다
  // 가장 먼저 해당 횟수에 도달한 문자 : 객체 2를 선언하여 str에서 가장 마지막으로 key가 있는 index를 저장
  // 반복횟수를 넣을 객체(obj1)와 인덱스를 넣을 객체를(obj2) 각 각 선언한다.
  // 최댓값을 넣을 객체(obj3)를 선언한다.

  let countOfletter={} // 반복 횟수를 넣을 객체
  let indexOfletter={} // index를 넣을 객체
  let maxRepeatedLetter={ } // 최대 반복된 문자들의 index를 넣을 객체
  let maxValue=0; // 반복 횟수의 max 값을 넣어줄 변수
  let minVal=0; // 제일 먼저 도달한 문자의 인덱스
  let result=""; // 결과를 넣어줄 변수

  // str 길이만큼 반복한다.
    // obj1에서  key로 해당 문자가 없다면, key에 문자를 넣고 값을 1로 넣는다.
    // obj2 객체에도 key로 문자가 속해있는 index를 넣는다.
    // 만약 문자가 key로 있다면, 값에 ++를 해준다.
    // obj2 객체에도 key로 문자가 속해있는 index를 넣는다.
  // 먼저 문자열의 공백을 제거한다 

str=str.replace(/(\s*)/gi, "");
if(str.length===0){
    return "";
  } 
for(let i=0;i<str.length;i++){
  if(!(str[i] in countOfletter)){
    countOfletter[str[i]]=1;      
   }else{
    countOfletter[str[i]]+=1;
        }
   indexOfletter[str[i]]=i;
   }
  
  // obj1 에서 최대값을 찾기 위해 Math.max() 와 ...Object.values(obj1)을 사용한다.
  maxValue=Math.max(...Object.values(countOfletter));

  // for let key in obj1을 사용하여  obj3에 최댓값을 갖는 obj를 키로 갖고, obj2[key]를 값으로 넣는다.
  // 반복문이 끝나고 obj3의 값이 가장 작은 문자를 리턴한다.
for(let key in countOfletter){
  if(countOfletter[key]===maxValue){
    maxRepeatedLetter[key]=indexOfletter[key];
  }
}
//Object.keys(object).find(key => object[key] === value);
minVal=Math.min(...Object.values(maxRepeatedLetter));
result=Object.keys(maxRepeatedLetter).find(key=>maxRepeatedLetter[key]===minVal);
return result;
}

let output=mostFrequentCharacter("apples not oranges");
console.log(output);

// ref code
// function mostFrequentCharacter(str) {
//   let obj = { mostCount: 0, mostFrequent: '' };
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       continue;
//     }

//     if (obj[str[i]] === undefined) {
//       obj[str[i]] = 0;
//     }
//     obj[str[i]] += 1;

//     if (obj[str[i]] > obj['mostCount']) {
//       obj['mostCount'] = obj[str[i]];
//       obj['mostFrequent'] = str[i];
//     }
//   }
//   return obj['mostFrequent'];
  
// }
