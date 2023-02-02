//card name copied to the card from form element
const formname = document.getElementById('cardholder_name');
const cardname = document.getElementById('name');
const formnumber = document.getElementById('card_number');
const cardnumber = document.getElementById('number');
const mmElement = document.getElementById('exp_month');
const yyElement = document.getElementById('exp_year');
const cvvElement = document.getElementById('form_cvv');
const formWindow = document.getElementById('info-back');
const thankYouWindow = document.getElementById('Confirm_page');
const confirm_button_ele = document.getElementById("confirm_button");
const continue_button_ele = document.getElementById("Continue_btn");


formname.addEventListener('keyup',function(event){
    // event.target.value==="" ?
    cardname.innerText = event.target.value;
    // event.target.value==="" ? cardname.placeholder : event.target.value
})


// Card number error message issue
formnumber.addEventListener('keyup',function(event){
    // if(e.target.value.length)
    //pure string ko check karna padega bhai, user backspace karke sahi daal dega to bhi dikkat aayegi(Lmao)
    // Number('123') = 123     Number('abc') = nan
    let str =  event.target.value;
    // console.log(formnumber.value === '');
    const errorNumber = document.querySelector('#errorCardNumber');
    if(str === ''){
        if(!errorNumber.classList.contains("hidden")) errorNumber.classList.add("hidden");
    }

    else if(str.length !==0)
    {
    if(!Number(str)){
        errorNumber.innerHTML = "Character Not Allowed";
        // const errormsg = document.createElement('p');
        // errormsg.innerText = 'Number daalo bhai';
        // formnumber.append(errormsg);
        // console.error("Character Not Allowed");
        if(errorNumber.classList.contains("hidden")) errorNumber.classList.remove("hidden");
    }else{
        if(!errorNumber.classList.contains("hidden")) errorNumber.classList.add("hidden");
        // cardnumber.innerText = event.target.value;
        let left = 0;
        let right = 4;
        let length = event.target.value.length;
        let string = event.target.value;
        let newstring ='';
        while(right<=16)
        {
            newstring +=string.slice(left, right)+" ";
            left+=4;
            right+=4;
        }
        cardnumber.innerText = newstring;
    }
}
    // if(String(Number(str)) == 'NaN'){
    //     console.error("Character Not Allowed part2");
    // }

    // let currentChar = str[str.length - 1];
    // console.log(currentChar.charCodeAt(0));
    // if(currentChar.charCodeAt(0) >= 49 && currentChar.charCodeAt(0) <= 57){
    //     //card Print    
    // }else{
    //     console.error("Character Not Allowed");
    // }

    
    // event.target.value==="" ?
    // if(typeof Number(event.target.value) !== 'number')
    // {

    //     // Number --> Valid
    //     // Invalid --> Error
    //     // const errormessage = document.createElement('p');
    //     // errormessage.innerText='Wrong Format, Numbers Only';
    //     // formnumber.appendChild(errormessage);
    //     // console.log(errormessage);
    //     console.log('not number');
    // }
    // if(typeof Number(event.target.value) == 'number'){
    //     console.log('number');
    // // cardnumber.innerText = event.target.value;
    // }
})





// confirm button
// if cvv,mm or year is absent, give error beneath them
// const confirmBtn = document.querySelector('.form-btn');

// confirmBtn.addEventListener('click',function(event){
//     let flag = true;
//     const mmElement = Number(document.getElementById('exp_month'));
//     const yyElement = Number(document.getElementById('exp_year'));
//     const cvvElement = Number(document.getElementById('cvv'));

//     const messageaftermm = Number(document.getElementById("errorMonth"));
//     if(mmElement<1 || mmElement>12)
//     {
//         messageaftermm.innerText='Error month';
//     }
//     else{
//         messageaftermm.innerText='';
//     }
// })


mmElement.addEventListener('keyup',function(event){
    const mmElementval = Number(event.target.value);
    const messageaftermm = document.getElementById("errorMonth");
    if(event.target.value == '' || (mmElementval>=1 && mmElementval<=12))
    {
        messageaftermm.innerText='';
    }
    else{
        messageaftermm.innerText='Enter valid month';
    }
})



yyElement.addEventListener('keyup',function(event){
    const yyElementval = Number(event.target.value);
    const messageafteryy = document.getElementById("errorYear");
    if(event.target.value == '' || (yyElementval>=0 && yyElementval<=99))
    {
        messageafteryy.innerText='';
    }
    else{
        messageafteryy.innerText='Enter valid year';
    }
})


cvvElement.addEventListener('keyup',function(event){
    const cvvElementval = Number(event.target.value);
    const messageaftercvv = document.getElementById("errorCvv");
    if(event.target.value == '' || (cvvElementval>=0 && cvvElementval<=999))
    {
        messageaftercvv.innerText='';
    }
    else{
        messageaftercvv.innerText='Enter valid cvv';
    }
})




// month,year and cvv 
const cardmonth = document.getElementById('exp_month');
const carddate = document.getElementById('month');
const cardyear = document.getElementById('exp_year');
const yearnumb = document.getElementById('year');
const cvvnumber = document.getElementById('form_cvv');
const cvv = document.getElementById('cvv');

cardmonth.addEventListener('keyup',function(event){

    carddate.innerText = event.target.value+'/';
    
    if(event.target.value==''){
        carddate.innerText='00/';
    }
})

cardyear.addEventListener('keyup', function(event){
    yearnumb.innerText = event.target.value;
    
    if(event.target.value==''){
        yearnumb.innerText='00';
    }
})


cvvnumber.addEventListener('keyup', function(event){
     cvv.innerText = event.target.value;

     if(event.target.value== ''){
        cvv.innerText='000';
     }
})


// hides form & shows the thankyou screen




confirm_button_ele.addEventListener('click',function(e){
    e.preventDefault(); // <---- Stops Reloading(happens only when form is submitted)

    if(formname.value == "" || formnumber.value == "" || mmElement.value == "" || yyElement.value == "" || cvvElement.value == "" ){
//         console.log('');
        alert("Please fill out all the fields correctly");   
    }
    else{
    formWindow.style.display = 'none';
    thankYouWindow.style.display = 'block';
    console.log('confirm button is clicked');
    }
})


continue_button_ele.addEventListener('click',function(e){
    formWindow.style.display = 'block';
    thankYouWindow.style.display = 'none';
})
