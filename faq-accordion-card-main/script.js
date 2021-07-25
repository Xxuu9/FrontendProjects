let qas = document.querySelectorAll('.question_answer_accordion');


qas.forEach(qa => qa.addEventListener('click',event => {
        let currentEvent = event.currentTarget;
        if (currentEvent.querySelector('.answer').classList.contains('show')) {
            currentEvent.querySelector('.answer').classList.remove('show');
        }
        else{
            document.querySelectorAll('.answer').forEach(answer => {
                answer.classList.remove('show');
            })

            currentEvent.querySelector('.answer').classList.add('show');

        }


    }))