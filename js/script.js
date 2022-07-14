let searchByID = function () {
    const INPUT = document.querySelector('.input');
    const COMMENTS_WINDOW = document.querySelector('.comments-output');
    const RESULT_WINDOW = document.querySelector('.result-output');
    const SUBMIT = document.querySelector('.submit').addEventListener('click', function (e) {
        e.preventDefault();
        if (INPUT.value < 1 || INPUT.value > 100) {
            RESULT_WINDOW.innerHTML = '<p>Something went wrong</p>';
            COMMENTS_WINDOW.innerHTML = '<p>Something went wrong</p>';
            throw new Error('Something went wrong');  
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${INPUT.value}`)
            .then(response => response.json())
            .then(json => {
                RESULT_WINDOW.innerHTML = JSON.stringify(json)
            })
            .then(() => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${INPUT.value}/comments`)
                    .then(response => response.json())
                    .then(json => {
                        COMMENTS_WINDOW.innerHTML = JSON.stringify(json);
                    });
            });
    });

};
searchByID();