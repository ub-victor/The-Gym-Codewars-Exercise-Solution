const input = document.getElementById('searchInput');
  const container = document.getElementById('textContainer');

  input.addEventListener('input', function() {
    // Reset the paragraph
    let text = container.textContent; // this will get the text without HTML tags if it could be innerHTML it would include HTML tags
    // Clear previous highlights
    container.innerHTML = text; // Reset to original text and the reason for this is that we want to keep the original text without any highlights
    const searchTerm = this.value.trim(); // Get the current value of the input field and trim whitespace and this is the search term in  longform we could use input.value.trim() but this is more concise

    if (searchTerm !== '') {
      // Create a regex for the search term, case-insensitive
      const regex = new RegExp(`(${searchTerm})`, 'gi'); // this creates a regular expression that matches the search term globally and case-insensitively

      // Replace matching words with span wrapping
      container.innerHTML = text.replace(regex, '<span class="highlight">$1</span>'); // the replace method is used to wrap the matching words in a span with the class "highlight" and $1 refers to the first capturing group in the regex which is the search term itself
    }
  });