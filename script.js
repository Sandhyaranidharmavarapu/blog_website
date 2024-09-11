// Simulate comments being added in real-time
let comments = [];

// Handle form submission
document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  const currentDate = new Date().toLocaleString();

  // Create a new comment object
  const newComment = {
    name: name,
    date: currentDate,
    text: comment,
  };

  // Add the new comment to the comments array
  comments.push(newComment);

  // Clear form
  document.getElementById('commentForm').reset();

  // Display comments in real-time
  displayComments();
});

// Function to display all comments
function displayComments() {
  const commentSection = document.getElementById('commentSection');

  // Loop through the comments array and display each comment
  comments.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const author = document.createElement('p');
    author.classList.add('comment-author');
    author.textContent = comment.name;

    const date = document.createElement('p');
    date.classList.add('comment-date');
    date.textContent = comment.date;

    const commentText = document.createElement('p');
    commentText.classList.add('comment-text');
    commentText.textContent = comment.text;

    const replyButton = document.createElement('button');
    replyButton.classList.add('reply-button');
    replyButton.textContent = 'Reply';

    commentDiv.appendChild(author);
    commentDiv.appendChild(date);
    commentDiv.appendChild(commentText);
    commentDiv.appendChild(replyButton);

    commentSection.appendChild(commentDiv);
  });
}

  
