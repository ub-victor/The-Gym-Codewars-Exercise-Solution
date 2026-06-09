const str = 'timestamp="1614285589"';

// Without parentheses:
str.match(/timestamp="\d+"/);
// Result: ['timestamp="1614285589"']  ← just [0], no [1]

// With parentheses:
str.match(/timestamp="(\d+)"/);
// Result: ['timestamp="1614285589"', '1614285589']  
//          ↑ whole match              ↑ just the grouped part