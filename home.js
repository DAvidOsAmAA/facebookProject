
$(document).ready(function () {
  // Get references to the input field and the element where search results will be displayed.
  const searchInput = $('#searchInput');
  const searchResults = $('#searchResults');

  // Define a function to perform the search.
  function performSearch(query) {
      // Clear the previous search results.
      searchResults.empty();

      // Implement your search logic here. For demonstration purposes, we'll use a simple array.
      const data = [
          { name: 'John Doe', email: 'johndoe@example.com',imageUrl: 'images/person1.jpg' },
          { name: 'Jane Smith', email: 'janesmith@example.com' ,imageUrl: 'images/person2.jpg'},
          { name: 'Angle Smith', email: 'janesmith@example.com',imageUrl: 'images/person3.jpg' },
          // Add more data as needed
      ];

      const results = data.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase())
      );
      
      // Display the search results using Bootstrap's list-group class.
      results.forEach(result => {
          const resultItem = $('<li>').addClass('list-group-item').text(`${result.name}`);
          const imageElement = $('<img>').attr('src', result.imageUrl);
          imageElement.css({
            'border-radius': '50%',
            'width': '40px',
            'height': '50px',
            'position':'relative',
            'left':'40%',
          
            
        });
        resultItem.append(imageElement);
          searchResults.append(resultItem);
      });
  }

  // Add an event listener to the input field to trigger the search.
  searchInput.on('input', function () {
      const searchTerm = searchInput.val().trim(); // Get the trimmed search term.
      if (searchTerm.length > 0) {
          performSearch(searchTerm); // Perform the search.
      } else {
          searchResults.empty(); // Clear results if the input is empty.
      }
  });
});

$(document).ready(function() {
  // Handle the click event on the "Post" button
  $('#post-button').click(function() {
      // Get the text from the textarea
      var text = $('#post-text').val();

      // Create a new post element
      var postElement = $('<div class="post"></div>');
      var textElement = $('<p></p>').text(text);
      postElement.append(textElement);

      // Check if a photo was uploaded
      var photoInput = document.getElementById('photo-upload');
      if (photoInput.files.length > 0) {
          var photo = $('<img>');
          photo.attr('src', URL.createObjectURL(photoInput.files[0]));
          postElement.append(photo);
      }

      // Append the post to the posts container
      $('.posts').prepend(postElement);

      // Clear the textarea and photo input
      $('#post-text').val('');
      $('#photo-upload').val('');
  });
});
			

