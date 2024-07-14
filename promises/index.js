//--------------------------------------------------------
let count = 0;
function makeAsyncOperations() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        count++;
        if (count)
            resolve(count);
        else
           reject("Couldn't perform operation");
    }, 3000); // takes some time

})

}
let prom = makeAsyncOperations();
prom
.then((result) => console.log(result))
.catch((err) => console.error(err));


//---------------------------------------------------------------
// get definition of word by making get request to dictionary api
let definition = '';
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/tomato')
    .then((result) => {
     // throw new Error('something went wrong');
         return result.json()
     
    })
    .then(data => {
        // Process the response data here
       definition = data;
      
    })
    .catch((err) =>
        console.error(err)
    )
    .finally(() => console.log(definition)) // finally is always executed

//--------------------------------------------------------------------
/*
Our app should get the comments under a user's post. We need three async operations
executed sequentially. Following order is needed:
1. get user
2. get posts for user
3. get comments on post 
*/

/*
-----------Using callbacks in ES5-----------------
function getUser(userId, callback) {
    setTimeout(() =>  {
        console.log("fetched user data");
        callback({ id: userId, name: 'John Doe' });
    }
    , 1000 );
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("fetched posts for user", userId);
        callback(([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]))
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log("fetched comments for post with Id", postId);
        callback([{ id: 1, text: 'Nice post!' }, { id: 2, text: 'Thanks for sharing!' }]);
    }, 1000);
}

getUser(1, function (user) {
    getPosts(user.Id, function(posts) {
        getComments(posts[0].id, function(comments) {
            console.log('Comments for first post:', comments);
        })
    })
})
*/
//-----------using promises in ES6---------------------
function getUserProm(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Got user data');
        resolve({ id: userId, name: 'John Doe' });
      }, 1000);
    });
  }
  
  function getPostsProm(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Got posts for user', userId);
        resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
      }, 1000);
    });
  }
  
  function getCommentsProm(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Got comments for post', postId);
        resolve([{ id: 1, text: 'Nice post!' }, { id: 2, text: 'Thanks for sharing!' }]);
      }, 1000);
    });
  }

getUserProm(1)
    .then((user) => {
        return getPostsProm(user.id);
    })
    .then((posts) => {
        return getCommentsProm(posts[0].id);
    })
    .then((comments) => console.log(comments))
    .catch((err) => console.error(err));