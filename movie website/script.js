
async function getData(){
 let res = await fetch('https://ghibliapi.vercel.app/films');
 res = await res.json();
 console.log(res);
 res.forEach(function(movie){
    displayData(movie);
 });
}

getData();

let movieBox = document.getElementById('movies');

function displayData(movie){
  let div = document.createElement('div');
  div.classList.add('col-sm-4');
  div.classList.add('p-3')
  div.innerHTML = `
  <div onclick="window.location.href='pages/movie1.html';">
    <img src="${movie.image}" class="img-fluid" />
    <h3>${movie.title}</h3>
    <p>${movie.description}</p>
</div>
  `
  movieBox.appendChild(div)
}