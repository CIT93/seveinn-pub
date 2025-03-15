 # My Understanding
 -  const movieEl = document.getElementById("movies"); is used to declare the html portion of the code as "movies" within the javascript and will be known as movieEl when we want to use movies.
 - the const table and row are declaring what we created will be called. for example the table is created by document.createElement ("table)" which will then be declared as table
 - movies.forEach is a for each loop that's within the movies data, function (movie) is saying a nested function looking within the movie data to grab the data.
 - if (movie.rating) >= 7 && movie.watched <= 3 is used to basically say, looking through the data i will look for any movie that has a rating of 7 or less and a movie watched more or equal to 3.
 - for (const key in movie) is another loop that is declaring the data selected from the array as key within the movie.
 - console.log displays the contents to the DOM, in this case the movie data since it's movie key.
 cell.textContent = movie [key] is saying that the cell will now be used to fill up with the movie data that follows the loop.
 - row and table are being appended (appendChild) which is used to push the information and be displayed. row.appendChild(cell) the cell is used to display the movie data since movie[key] creating a table with the the information within
 
