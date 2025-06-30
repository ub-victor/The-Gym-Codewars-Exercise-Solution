const input = document.getElementById('searchInput');
  const container = document.getElementById('textContainer');

  input.addEventListener('input', function() {
    // Reset the paragraph
    let text = container.textContent;
    // Clear previous highlights
    container.innerHTML = text;

    const searchTerm = this.value.trim();

    if (searchTerm !== '') {
      // Create a regex for the search term, case-insensitive
      const regex = new RegExp(`(${searchTerm})`, 'gi');

      // Replace matching words with span wrapping
      container.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
    }
  });