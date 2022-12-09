
const buttons = document.querySelectorAll('button');
 const div = document.querySelector('.input-div');
// console.log(buttons);

let result = '';
for(let i=0;i<=buttons.length;i++){
   buttons[i].addEventListener('click',function(e){
       let buttonText = e.target.innerText;
       console.log(buttonText)
      if(buttonText=='X'){
        buttonText = "*";
        result+=buttonText
        div.value = result;
      }else if(buttonText=="÷"){
        buttonText = '/';
        result+=buttonText;
        div.value = result;
      }
      else if(buttonText == 'AC'){
        result="";
        div.value = result;
      }else if(buttonText == "C"){
        result = buttonText.replace(buttonText,'0')
        div.value = result;
      }
      else if(buttonText == '='){
        div.value = eval(result);
      }else{
        result+=buttonText
        div.value = result;
      }
    });
};


