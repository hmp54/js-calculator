 //Use a calculator class to store all the information we need for data currently being typed into our calculator
 class Calculator{
     constructor(previousOperandTextElement, currentOperandTextElement){
         this.previousOperandTextElement = previousOperandTextElement; 
         this.currentOperandTextElement = currentOperandTextElement; 
         this.clear(); //set all values to default settings whenever the calculator is initialized. 
     }

    //set all stored values to empty string/undefined. 
     clear(){
         this.currentOperand = ''; 
         this.previousOperand =''; 
         this.operation = undefined; 
     }

     delete(){}

     appendNumber(number){
         this.currentOperand = number; 
     }

     chooseOperation(operation){}
     compute(){}
     updateDisplay(){
         this.currentOperandTextElement.innertext = this.currentOperand; 
     }
 }

 const numberButtons = document.querySelectorAll('[data-number]'); 
 const operationButtons = document.querySelectorAll('[data-operation]'); 
 const equalButton = document.querySelectorAll('[data-equals]');
 const deleteButton = document.querySelector('[data-delete]');
 const allClearButton = document.querySelector('[data-all-clear]');
 const previousOperandTextElement = document.querySelector('[data-previous-operand]');
 const currentOperandTextElement = document.querySelector('[data-current-operand]');

//create a new calculator object 
 const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
 
 //loop through every single number button and add an event listener to them. 
 //Every time they're clicked on, the inner text of the button (AKA the button's respective number) populates to the top screen 
 numberButtons.forEach(button =>{
     button.addEventListener('click', () =>{
         calculator.updateDisplay(button.innerText); 
         calculator.updateDisplay();
     });
 });

 console.log("hi I'm connected"); 