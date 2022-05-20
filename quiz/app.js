const correctAnswers = ['A','A','A','A'];
const form = document.querySelector('.quiz-form');
const resultado = document.querySelector('.result');
//const porcentagem = document.querySelector('span');

form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    //Checar respostar
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;         
        }

    });

    scrollTo(0,0);
    resultado.classList.remove('d-none');
    

    let output = 0;
    const timer = setInterval(() => {
        resultado.querySelector('span').textContent = ` ${output}% `;
        if (output === score) {
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 20);

    //Alternativo
     
    // porcentagem.innerText = score;
    // console.log(score);

});