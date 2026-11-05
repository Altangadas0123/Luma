// const main = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
//   const result = await response.json();
  
//   for(let i = 0; i < result.length; i++) {
//     console.log(`${i+1} ${result[i].name} - ${result[i].email}`);
//   }
// };

// main();

// ================================================================================================
// const userId = [1, 3, 5];
// userId.forEach(async (userId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

//   const result = await response.json();

//   result .forEach((post) => {
//     console.log(userId, post.title, post.body)
//   })
// });
// ================================================================================================