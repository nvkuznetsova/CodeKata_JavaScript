//promisify a function with callback
function loadScript(src, cb) {
    let script = document.createElement(`script`);
    script.src = src;

    script.onload = () => cb(script);

    document.head.append(script);
}

//what will fire and what won't. why?
let promise = new Promise(function (resolve, reject) {
    resolve("done");

    reject(new Error("…"));
    setTimeout(() => resolve("…"));
});

//what wil be in console
{
    const job = () => new Promise(function (resolve, reject) {
        reject();
    });

    let promise = job();

    promise

        .then(function () {
            console.log('Success 1');
        })

        .then(function () {
            console.log('Success 2');
        })

        .then(function () {
            console.log('Success 3');
        })

        .catch(function () {
            console.log('Error 1');
        })

        .then(function () {
            console.log('Success 4');
        });
}

//what wil be in console
{
    const job = state => new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });

    let promise = job(true);

    promise

        .then(function (data) {
            console.log(data);

            return job(false);
        })

        .catch(function (error) {
            console.log(error);

            return 'Error caught';
        })

        .then(function (data) {
            console.log(data);

            return job(true);
        })

        .catch(function (error) {
            console.log(error);
        });
}

//what wil be in console
{
    const job = state => new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });

    let promise = job(true);

    promise

        .then(function (data) {
            console.log(data);

            return job(true);
        })

        .then(function (data) {
            if (data !== 'victory') {
                throw 'Defeat';
            }

            return job(true);
        })

        .then(function (data) {
            console.log(data);
        })

        .catch(function (error) {
            console.log(error);

            return job(false);
        })

        .then(function (data) {
            console.log(data);

            return job(true);
        })

        .catch(function (error) {
            console.log(error);

            return 'Error caught';
        })

        .then(function (data) {
            console.log(data);

            return new Error('test');
        })

        .then(function (data) {
            console.log('Success:', data.message);
        })

        .catch(function (data) {
            console.log('Error:', data.message);
        });
}

// Promise api
{
    const pr1 = new Promise((res, rej) => {
        setTimeout(() => {
            res("pr1");
        }, 5000);
    });

    const pr2 = new Promise((res, rej) => {
        setTimeout(() => {
            res("pr2");
        }, 3000);
    });

    const pr3 = new Promise((res, rej) => {
        setTimeout(() => {
            res("pr3");
            // rej("pr3!");
        }, 4000);
    });

    //predict result and execution time in different variations
    Promise.all([pr1, pr3, pr2])
        .then(r => console.log(r))
        .catch(e => console.log(e));

    Promise.race([pr1, pr2, pr3])
        .then(r => console.log(r))
        .catch(e => console.log(e));
}
