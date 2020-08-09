function check(){
    var result_mark = document.getElementById('result_marks');
    var q1 = document.QuizApp.q1.value;
    var q2 = document.QuizApp.q2.value;
    var q3 = document.QuizApp.q3.value;
    var q4 = document.QuizApp.q4.value;
    var q5 = document.QuizApp.q5.value;


    var count = 0;

    if(q1 == "b")
    {
        count += 5;
    }
    if(q2 == "c")
    {
        count += 5;
    }

    if(q3 == "c")
    {
        count += 5;
    }
    if(q4 == "b")
    {
        count += 5;
    }
    if(q5 == "d")
    {
        count += 5;
    }

    alert("Your Score is : " + count + "/25");
    result_mark.textContent = count;
}