let qas = document.querySelectorAll('.question_answer_accordion');


qas.forEach(qa => qa.addEventListener('click',event => {
        let currentEvent = event.currentTarget;

        document.querySelectorAll('.answer').forEach(answer => {
            answer.classList.remove('show');
        })
        currentEvent.querySelector('.answer').classList.add('show');
    }))