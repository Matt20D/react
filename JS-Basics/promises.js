//   then is a callback function

// const fetchData = () => {
//   fetch('https://api.github.com').then(resp => {
//     resp.json().then(data => {
//       console.log(data);
//     });
//   });
// };


// modern way to do promises allows us to consumes promises without the .then syntax
// async / await

// fetchData is async and will return a promise object
const fetchData = async () => {
    const resp = await fetch('https://api.github.com');
    const data = await resp.json();
    console.log(data);
  };
  
fetchData();

