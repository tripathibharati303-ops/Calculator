 const display = document.querySelector('.multiply');
    let currentValue = '';
    let storedValue = '';
    let operator = '';

    function calculate(event){
        const clicked = event.target;
        

        const text = clicked.innerHTML;

        if(clicked.classList.contains('btn') && text !== '=' && text !== 'Clear'){
            currentValue += text;
            display.innerHTML = currentValue;
        }
        else if(clicked.classList.contains('btnop')){
            storedValue = currentValue;
            operator = text;
            currentValue = '';
        }
        else if(text === '='){
            const a = Number(storedValue);
            const b = Number(currentValue);
            let result;
            if(operator === '+') result = a + b;
            else if(operator === '-') result = a - b;
            else if(operator === '*') result = a * b;
            else if(operator === '/') result = a / b;
            display.innerHTML = result;
            currentValue = String(result);
        }
        else if(text === 'Clear'){
            currentValue = '';
            storedValue = '';
            operator = '';
            display.innerHTML = '';
        }
    }