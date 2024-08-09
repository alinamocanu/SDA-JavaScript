function User(firstName, lastName, email, password) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.email = email;
   this.password = password;
   this.posts = [];
   
   this.createPost = function(post) {
       this.posts.push(post);
   }

   this.changePassword = function(newPassword, oldPassword) {
       if(this.password === oldPassword) {
         this.password = newPassword;
       } else {
           console.warn('For security reasons password could not be reset');
       }

   }
   /*4, 20, 3, 10  ==> 20, 10*/
   this.getMostLikedPosts = function() {
       if (!this.posts.length) {
            console.log('There are no posts for this user');
       } else {
           let [max1, max2] = [-1, -1];
           for (let i = 0 ; i < this.posts.length; i++) {
                if (this.posts[i].noOfLikes > max1) {
                    max2 = max1;
                    max1 = this.posts[i].noOfLikes; 
                } else if (this.posts[i].noOfLikes > max2) {
                    max2 = this.posts[i].noOfLikes;
                }
           }

           if (max1 == max2 || max2 ==  -1) {
               console.log(`your most viral post has ${max1} no of likes`);
           } else {
               console.log(`your most viral post has ${max1}  & ${max2} no of likes`);
           }
       }
   }
}

function Post(u, noOfLikes, content, creationDate) {
    this.user = u;
    this.noOfLikes = noOfLikes;
    this.content = content;
    this.creationDate = creationDate;
    this.comments = [];

    this.addComment = function(c) {
        this.comments.push(c);
    }

    // definim o functie care afiseaza toate commurile pentru postarea curenta
    this.getAllCommentsForPost = function() {
        if (!this.comments.length) {
            console.log('There are no comments under this post');
        } else {
            console.log(`${this.user.firstName} said: ${this.content}`);
            for(let i = 0; i < this.comments.length; i++) {
                console.log(`${this.comments[i].user.firstName} replied: ${this.comments[i].content}`);
            }
        }
    }

}

function Comment(u, creationDate, content, noOfLikes, post) {
    this.user = u;
    this.creationDate = creationDate;
    this.content = content;
    this.noOfLikes = noOfLikes;
    this.post = post;
}

function Group(name, creationDate, isPrivate) {
    this.name = name;
    this.creationDate = creationDate;
    this.isPrivate = isPrivate;
    this.users = new Map();
    this.noOfUsers = 0;

    this.addUser = function(user) {
        //this.noOfUsers++;
        this.users.set(++this.noOfUsers, user);
    }

    this.getUserByRegistrationNo = function(registrationNo) {
        if (!this.users.has(registrationNo)) {
            console.log('There is no user with this registration number');
            return;
        } else {
            console.log(this.users.get(registrationNo));
        }
    }

}

let u = new User('Ion', 'Popescu', 'ion.popescu@gmail', '1Asd23#$%!');
let u1 = new User('Marian', 'Pop', 'marian.pop@gmail', '1Asd23#$asw');
u.changePassword('12345', '1asd23#$%!');
u.changePassword('GHa31@%pQ', '1Asd23#$%!');
console.log(u);

let g = new Group('Sneaker Market Romania', new Date(2016, 5, 15), false);
g.addUser(u);
g.addUser(u1);
g.getUserByRegistrationNo(2);

let p = new Post(u, 31, 'This is my first post', new Date(2024, 6, 19));
p.addComment(new Comment(u1, new Date(2024, 6, 20),'Congrats!!', 25, p));
p.getAllCommentsForPost();

let p2 = new Post(u, 5, 'Some knock knock joke', new Date(2024, 6, 19));
let p3 = new Post(u, 20, 'Another post', new Date(2024, 6, 19));

u.createPost(p);
u.createPost(p2);
u.createPost(p3);

u.getMostLikedPosts();

let m = new Map();
m.set(1, 'test');
m.set(2, 'sample');
m.set(3, 'string');
m.set(1, 'abcd');
//console.log(m);
//console.log(m.get(2));