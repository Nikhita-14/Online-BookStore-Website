document.addEventListener('DOMContentLoaded', () => {
  const bookInput = document.getElementById('book-input');
  const addBookBtn = document.getElementById('add-book-btn');
  const bookList = document.getElementById('book-list');

  addBookBtn.addEventListener('click', addBook);
  bookInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBook();
  });

  function addBook() {
    const bookTitle = bookInput.value.trim();
    if (bookTitle === '') {
      alert('Please enter a book title!');
      return;
    }

    const listItem = document.createElement('li');
    listItem.style.cssText = 'background-color: #e9ecef; padding: 10px; margin-bottom: 10px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;';
    listItem.innerHTML = `
      <span style="font-weight: 500;">${bookTitle}</span>
      <div>
        <button class="mark-btn" style="margin-right: 0.5rem; background-color: #007bff; color: white; border: none; padding: 6px 10px; border-radius: 4px;">Read</button>
        <button class="delete-btn" style="background-color: #dc3545; color: white; border: none; padding: 6px 10px; border-radius: 4px;">Delete</button>
      </div>
    `;

    const markBtn = listItem.querySelector('.mark-btn');
    markBtn.addEventListener('click', () => {
      listItem.classList.toggle('completed');
      markBtn.textContent = listItem.classList.contains('completed') ? 'Undo' : 'Read';
      listItem.style.textDecoration = listItem.classList.contains('completed') ? 'line-through' : 'none';
      listItem.style.color = listItem.classList.contains('completed') ? '#6c757d' : '#000';
    });

    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      bookList.removeChild(listItem);
    });

    bookList.appendChild(listItem);
    bookInput.value = '';
  }
});
