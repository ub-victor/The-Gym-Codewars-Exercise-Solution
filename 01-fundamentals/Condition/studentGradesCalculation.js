<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Student Grades Calculation</title>
</head>
<body>
<div>
    <h2>Student Grades Calculation</h2>
    <p>Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.</p>
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