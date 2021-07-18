const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  n1=Number(n1);
  n2=Number(n2);
  if(operator==='+'){
    result=n1+n2;
  }else if(operator==='-'){
    result=n1-n2;
  }else if(operator==='*'){
    result=n1*n2;
  }else{
    result=n1/n2;
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.    
      
      // firstOperend가 0이면 firstOperend에 buttonContent 할당s
        if(firstOperend.textContent==='0'){
          console.log('숫자 ' + buttonContent + ' 버튼'); 
          firstOperend.textContent=buttonContent;
          
        // }else if(firstOperend.textContent.indexOf('.')===-1){
        //   firstOperend.textContent+=String(buttonContent);
        
        }else// 0이 아니면  secondOperend에 buttonContent 할당
          {console.log('숫자 ' + buttonContent + ' 버튼'); 
          secondOperend.textContent=buttonContent;
        }        
      }
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent=buttonContent;
    }

    if (action === 'decimal') {
      //console.log('소수점 버튼');
      
        //firstOperend.textContent+='.';
        //console.log(firstOperend.textContent)      
      
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent='0';
      secondOperend.textContent='0';
      calculatedResult.textContent='0';
      operator.textContent='+';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      calculatedResult.textContent=calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent);    
    } // elelemt 이므로 tag에 textContent 를 넣어주여야 한다.
  
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;
console.log(display.textContent); 
console.log(typeof(display.textContent)); //계산기 화면에 출력되는 값은 문자열 이다. 

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  let calculatedTempVal;
  if (target.matches('button')) {
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      
        // 그리고 버튼의 클레스가 number이면
        // 아래 코드가 작동됩니다.
        console.log('숫자 ' + buttonContent + ' 버튼');
        
        if(display.textContent==='0'){ // 첫 화면이 0이면 다음의 코드를 실행한다.
          previousKey = 'number';
          display.textContent=buttonContent; // buttonContent를 계산기 화면에 출력한다.          
          previousNum=buttonContent; // previpusNum에도 할당한다.      
          console.log("PreNum1:",previousNum)

        }else if(previousKey==='operator'){ // 첫 화면이 0도 아니고 , 이전 action이 'operator' 라면 다음의 코드를 실행한다.          
          display.textContent=buttonContent; 
          //firstNum=previousNum;   
          previousNum=buttonContent;  // previpusNum에 button의 number로 초기화한다.
          previousKey='number'     
                    
        } else if(previousKey==='number'|| previousKey==='decimal'){     // 이전의 action이 'number' 또는 decimal 일 때                      
          display.textContent+=buttonContent; // buttonContent을 계산기 화면 문자열에 추가한다.  
          previousNum+=buttonContent;  // previpusNum에도 할당한다.                   
          console.log("PreNum3:",previousNum);
          previouskey='number'; 
        }             
    }
    if (action === 'operator') {

      console.log('연산자' + buttonContent +'버튼');            
      
      if(previousKey!=='operator'){

        if(firstNum!==undefined){
          console.log('llllll');
          //operatorForAdvanced = buttonContent; // 변수 operator 버튼의 텍스트(연산기호)를 할당합니다.
          firstNum=calculate(firstNum,operatorForAdvanced,previousNum); // firstNum을 계산하여 초기화한다 
          //operatorForAdvanced = buttonContent;    
          previousKey = 'operator';
          
          
        }else{
          firstNum=previousNum;   //previousKey를 firstNum에 할당하여 첫 번째 피연산자를 저장한다.
          //operatorForAdvanced = buttonContent; // 변수 operator 버튼의 텍스트(연산기호)를 할당합니다. 
          previousKey = 'operator';
          //operatorForAdvanced = buttonContent;
          console.log(firstNum);
        }

      }
      operatorForAdvanced = buttonContent;           
      
    }
    if (action === 'decimal') {
      console.log('소수점 버튼');
      
      // previpuse Key가 '.' 이 아니면 다음의 코드를 실행한다.
      if(previousKey!=='decimal'){
            
        // previouseNum 에 아무 값도 할당되지 않았다면 "0."을 할당한다.
        if(previousNum===undefined || previousKey==='operator'){
          //previousNum="0"+buttonContent;
          display.textContent=buttonContent;    
          previousNum='0'+buttonContent;
          previousKey='decimal'; 
          console.log(previousNum);
                
        }else{
          display.textContent+=buttonContent;
          previousNum+=buttonContent;
          previousKey='decimal'; 
        }
      }
    } 

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstNum=undefined; // undefined 로 초리화를 해주자.
      previousNum=undefined;
      operatorForAdvanced=undefined;
      display.textContent='0';
      previousKey='clear';
    }
    if (action === 'calculate') {
      // 연산 전에 enter를 누르면 아무런 코드도 실행되지 않는다.
      // operatorForAdvanced 가 true이면  (연산자가 할당되었다면) firstNum 과 previouseNum연산을 진행한다.
      console.log("계산 버튼");

      if(operatorForAdvanced){
        previousKey='calculate';
        display.textContent=calculate(firstNum,operatorForAdvanced,previousNum);     
        console.log(firstNum,operatorForAdvanced,previousNum);   
        firstNum=calculate(firstNum,operatorForAdvanced,previousNum);
              
      }     
    }
  }
});

// Enter Enter enter 연속으로 누른 경우
  // 계산 버튼을 누른 경우에서 작성
  // previousKey 변수 활용
  // Better comments라는 익스텐션으로 압니다
  //! 오 빨간색 좋군
  // ispressed 