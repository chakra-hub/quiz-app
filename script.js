let ques_ans_obj = [                  //an object of questions and answers
    {
        'que':'1. Which of these elements in HTML can be used for making a text bold?',
        'option1':'<a>',
        'option2':'<pre>',
        'option3':'<br>',
        'option4':'<b>',
        'answer': 'option1'
    },
    {
        'que':'2. Which tag do we use in HTML for inserting a line-break?',
        'option1':'<a>',
        'option2':'<br>',
        'option3':'<b>',
        'option4':'<pre>',
        'answer': 'option2'
    },
    {
        'que':'3. How to create a hyperlink in HTML?',
        'option1':'<a link = “www.thinkandlearn.com”> thinkandlearn.com </a>',
        'option2':'<a> www.thinkandlearn.com <thinkandlearn.com /a>',
        'option3':'<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>',
        'option4':'<a url = “www.thinkandlearn.com” thinkandlearn.com /a>',
        'answer': 'option3'
    }    
]

let index=0; 
let total=ques_ans_obj.length;
let right = 0;
let wrong =0;

const optionInputs = document.querySelectorAll('.options');     //to get value of radion buttons
let question_box=document.getElementById('question');           // to push questions dynamically from above object

const loadQuesAns=()=>{                      //to load question and options to the webpage
    if(index==total){
        return endQuiz();
    }
    reset();

    const data= ques_ans_obj[index];          //getting the first set of question and options
    question_box.innerText=data.que;         //pushing first question to webpage
        
        //pushing the option of the first question
    optionInputs[0].nextElementSibling.innerText = `${data.option1}`
    optionInputs[1].nextElementSibling.innerText = `${data.option2}`
    optionInputs[2].nextElementSibling.innerText = `${data.option3}`
    optionInputs[3].nextElementSibling.innerText = `${data.option4}`
}

const submitQuiz=()=>{
    let arr_data = ques_ans_obj[index]      //getting the first set of question and options
    let answer=getAnswer();                 //method to get the option selected by the user
    if(answer==arr_data.answer){
        right++;
    }                                       //checking the correct answer and updating the score
    else{
        wrong++;
    }
    index++;        //updated the index to go the the next question by calling the function again below
    loadQuesAns();
    return
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){      //getting the option of checked value of radio button where its true
            answer=input.id;
        }
    });
    return answer;
}

const reset=()=>{
    optionInputs.forEach((input)=>{     /*reseting the radio button true value so that 
                                        in next question the radio button is not automatically selected*/
    input.checked=false;  
    });
}

const endQuiz=()=>{     //displaying the score when the last question is submitted
    document.getElementById('box_body').innerHTML=`<h2>Quiz Completed !<h2><br><h3>Your Score is ${right}/${total}</h3>`;
}
                    //initial call to get the first question
loadQuesAns();