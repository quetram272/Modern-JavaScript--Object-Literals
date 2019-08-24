// 4.38//
// let user ={
//     name: 'crystal',
//     age : 30,
//     email:'crystal@thenetninja.co.uk',
//     location : 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with maeter']
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user['email']);
// user['name']='chun-li';
// console.log('name');
// console.log(typeof user);


// 4.39,40
// let user ={
//         name: 'crystal',
//         age : 30,
//         email:'crystal@thenetninja.co.uk',
//         location : 'berlin',
//         blogs: ['why mac & cheese rules', '10 things to make with maeter'],
//         login : function(){
//             console.log('the user logged in')
//         },
//         logout: function(){
//             console.log('the user logged out');
//         },
//         logBlogs : () => {
// console.log('this user has written the following blog:')
// this.blogs.forEach(blog =>{
//     console.log(blog);
// })
//         }

//     };
//     user.logBlogs();
//     console.log(this);


// 4.41

// let user ={
//             name: 'crystal',
//             age : 30,
//             email:'crystal@thenetninja.co.uk',
//             location : 'berlin',
//             blogs: [
//                 {title:'why mac & cheese rules', likes :30},
//                  {title:'10 things to make with maeter', likes :50}],
//             login(){
//                 console.log('the user logged in')
//             },
//             logout(){
//                 console.log('the user logged out');
//             },
//             logBlogs() {
//     console.log('this user has written the following blog:')
//     this.blogs.forEach(blog =>{
//         console.log(blog.title , blog.likes);
//     });
//             }
    
//         };
//         user.logBlogs();
       

4.42
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area =7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random =Math.random();
console.log(random);
console.log(Math.round(random * 100));


