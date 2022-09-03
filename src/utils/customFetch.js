let customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve(task)
            }, time);
        } else {
            reject("Error")
        }
    });
}

export default customFetch;