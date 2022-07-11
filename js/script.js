let searchByID = function () {
    const INPUT = document.querySelector('.input');
    const promise = new Promise(function (resolve, reject) {
        const SUBMIT = document.querySelector('.submit').addEventListener('click', function (e) {
            e.preventDefault();
            if (INPUT.value >= 1 && INPUT.value <= 100) {
                fetch(`https://jsonplaceholder.typicode.com/posts/${INPUT.value}`)
                    .then(response => response.json())
                    .then(json => {
                        RESULT_WINDOW.innerHTML = JSON.stringify(json);
                        resolve();
                    });
            };
        });
        const RESULT_WINDOW = document.querySelector('.result-output');
    });

    promise.then(() => {
        const COMMENTS_WINDOW = document.querySelector('.comments-output')
        fetch(`https://jsonplaceholder.typicode.com/posts/${INPUT.value}/comments`)
            .then(response => response.json())
            .then(json => {
                COMMENTS_WINDOW.innerHTML = JSON.stringify(json);
            });
    });
};
searchByID();