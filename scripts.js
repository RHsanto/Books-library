const searchBook = () =>{

  const searchResult = document.getElementById('search-field')
  const searText = searchResult.value;
  searchResult.value= '';

  const url = `https://openlibrary.org/search.json?q=${searText}`
  fetch(url)
  .then(response => response.json())
  .then(data => displySearchResult(data.docs))
  .catch(error =>{
    
    document.getElementById('error').innerHTML = `<h2 class =" text-danger text-center"> some went is wrong try again later !!! </h2>`
  })

}

// display book result and details 

const displySearchResult = books => {

   console.log(books)

 const bookContainer = document.getElementById('book-container');
   bookContainer.textContent ='';

for(const book of books){

  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <div>
  <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" alt="" srcset="">
  <h3> Title : ${book.title}  </h3>
  <h4> Author : ${book.author_name}  </h4>
  <h4> Publisher : ${book.publisher}  </h4>
  <h5> First publish year: ${book.first_publish_year}  </h5>
  </div>
  `

bookContainer.appendChild(div)




 }








}










//   const div = document.createElement('div');
//   div.classList.add('card');
//   div.innerHTML = `
  
//   <h2> Title : ${books.title}  </h2>
//   <h2> First publish year: ${books.first_publish_year}  </h2>
//   <h2> Author : ${books.author_name}  </h2>
//   <h2> Publisher : ${books.publisher}  </h2>
  
//   `

// bookContainer.appendChild(div)




