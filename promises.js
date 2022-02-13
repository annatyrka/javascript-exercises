const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
};

const createPosts = (post) => {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Some error');
            }

        },2000);
    })
    

};

// createPosts({title:'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(error => console.log(error));


// Promise.add

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(()=> {
        
    })
})