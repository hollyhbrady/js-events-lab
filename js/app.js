document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const textInputTitle = document.querySelector('#title');
  textInputTitle.addEventListener('input', handleTitleInput);

  const textInputAuthor = document.querySelector('#author');
  textInputAuthor.addEventListener('input', handleAuthorInput);

  const selectInput = document.querySelector('#category');
  selectInput.addEventListener('change', handleSelectChange);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});


const handleTitleInput = function (event) {
  const resultInput = document.querySelector('#reading-list');
  const title = resultInput.textContent = `${event.target.value}`
  // console.log(event.target.value)
};

const handleAuthorInput = function (event) {
  const resultInput = document.querySelector('#reading-list')
  resultInput.textContent = `${event.target.value}`
  // console.log(event.target.value)
};

const handleSelectChange = function (event) {
  const selectCategory = document.querySelector('#reading-list')
  selectCategory.textContent = `${event.target.value}`
  // console.log(event.target.value)
};

const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultForm = document.querySelector('#reading-list');
  // const resultFormAuthor = document.querySelector('#reading-list');
  // const resultFormCategory = document.querySelector('#reading-list');
  // const selectCategory = document.querySelector('#reading-list')
  resultForm.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
  // resultForm.reset()
  // resultForm.textContent = `${event.target.author.value}`;
  // resultForm.textContent = `${event.target.category.value}`;
  // resultForm.textContent = "Here is the res"

  // formTextInput.textContent = `It will be: ${event.target.first_name.value} ${event.target.last_name.value}`;
};

const readingListItem = function (form) {

  const newListItem = document.createElement('li');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  readingListItem.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.author.value;
  readingListItem.appendChild(author);
  
  const category = document.createElement('h4');
  category.textContent = form.category.value;
  readingListItem.appendChild(category);
  
  return newListItem;

  // title.textContent = `${event.target.title.value}`;

  // list.appendChild(newListItem);

};


// const title = document.createElement('h2');
//   title.textContent = form.title.value;
//   readingListItem.appendChild(title);