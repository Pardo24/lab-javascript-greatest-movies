// The `movies` array from the file `src/data.js`.
const movies= require("./data")

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((film)=>{ 
   return film.director})
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
if(movies===0){
  return 0;
}
  let stevenSpill = movies.filter((pelis) => { return pelis.director === "Steven Spielberg" && pelis.genre.includes("Drama")})
  return stevenSpill.length }

      
  
  


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
  return 0
}
  let punctuation = movies.reduce((acc, elem)=> {
    
    if(elem.score)
    { return elem.score+acc}
    else
    {return acc}    }, 0);


  let average = (punctuation / movies.length)
  return Number(average.toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
let dramas = movies.filter((peli) => {
return peli.genre.includes("Drama")
})

return scoresAverage(dramas)

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
let cloneMovies= JSON.parse(JSON.stringify(movies))
return orderedPelis = cloneMovies.sort((a,b)=>{
if(a.year>b.year){
  return 1
}
else{
  return -1
}
})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
let arrayTitulo= [] 
let titulos= movies.map((elem)=>
 elem.title)
 arrayTitulo.push(titulos)
 return titulos.sort().slice(0,20)

}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
