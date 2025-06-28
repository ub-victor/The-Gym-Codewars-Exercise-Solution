<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Odd or Even Loop</title>
</head>
<body>
<div>
    <h2>Odd or Even Loop</h2>
    <p>Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.</p>
    <div id="results"></div>
</div>
<script>
    const resultsDiv = document.getElementById('results');
    for (let i = 0; i <= 15; i++) {
        const message = (i % 2 === 0) ? `${i} is even` : `${i} is odd`;
        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        resultsDiv.appendChild(paragraph);
    }
</script>
</body>
</html>