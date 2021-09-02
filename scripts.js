
const error = document.getElementById('error');
const totalResults = document.getElementById('totalResult');
const bookContainer = document.getElementById('book-container');

const searchBook = () =>{
  
  const searchResult = document.getElementById('search-field')
  const searchText = searchResult.value;

  //clear data
  searchResult.value= '';
  error.innerText ='';
  totalResults.innerText = '';
  bookContainer.textContent ='';

  // empty message
  if(searchText ===''){
    error.innerHTML = ` <h3 class= "text-danger text-center" > This field is  Empty </h3>`;
    totalResults.innerText = '';
    bookContainer.textContent ='';
  }

 // fetch the book url
else{
  const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displySearchResult(data.docs,data.numFound))
}
}

// display book result and details  
const displySearchResult = (books,totalBooks) => {

  // not fount message
   if(books.length === 0){
   error.innerHTML = ` <h3 class= "text-danger text-center" > Result not found </h3>`;
  }

  // total result here
  else{
totalResults.innerHTML = `<p class =" text-center my-5 border p-5 w-50 mx-auto"> Showing <strong> ${books.length} </strong> results of <strong>${totalBooks} </strong>`
}

// book container here
 const bookContainer = document.getElementById('book-container');
       bookContainer.textContent ='';
           books.forEach(book=>{

             // creat a new div
                const div = document.createElement('div');
                    div.classList.add('col');
                        div.innerHTML = `
                         <div class="card ">
                        <img src= "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="Not Found">
                      <div class="card-body">
                     <h5 class="card-title">${book.title}</h5>
                    <p> <strong> Author </strong>  : ${book.author_name? book.author_name[ 0] : 'Not Found'}  <p>
                  <p> <strong> Publisher </strong>  : ${book.publisher? book.publisher[0]:'Not Found'}  </p>
                  <p> First published in  <strong> ${book.first_publish_year? book.first_publish_year : 'Not Found' } </strong></p>
                     </div>
                         </div> `

  
bookContainer.appendChild(div)

 })

}















