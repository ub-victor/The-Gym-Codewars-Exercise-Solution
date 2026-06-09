/*
Here is the idea to follow
1. Find each <event>
2. Get its `timestamp`
3. Get its `description`
4. Compare the description
5. Save the timestamp if it matches
*/

const xml = `
<data>
    <event timestamp="1614285589">
        <description>Intrusion detected</description>
    </event>

    <event timestamp="1614286432">
        <description>Intrusion ended</description>
    </event>
</data>
`;

const getTimestampsByDescription = (xml, description)=>{
    // Array for matching timestamps
    const timestamps = [];

    // Find all event blocks
    /*
    It will find all <event> ... </event>
    / /g = the g flag means "global" fins all matches, not just the fist one first one
    <event - Matches the literal opening tag
    [\s\S]*? - This is the key point
    [\s\S] = matches any character: \s Matches Whitespace spacee, tabs, newlines
    \S matches non-whitespace. Together with \s they match absolutely anything.
    * The * means "repeat the previous thing zero or more times". "1", "11"
    When ? comes after a quantifier like *, +, or {}, it flips the behavior from greedy to lazy (or non-greedy / minimal).
    <.*> = Matches the entire string: "<a>X</a><b>Y</b>"
    <.?> = Matches: "<a>" (stops at the first >)
    <\/event> matches the leteral closing tag
    eg: <event id="1">Hello</event>
        <event id="2">World</event>
        match returns: ["<event id=\"1\">Hello</event>", "<event id=\"2\">World</event>"]

    */
    const events = xml.match(/<event[\s\S]*?<\/event>/g);
    /*
    events = [
        '<event timestamp="1614285589">\n        <description>Intrusion detected</description>\n    </event>',
        '<event timestamp="1614286432">\n        <description>Intrusion ended</description>\n    </event>'
    ]
    Without the ?, the regex would be greedy and match everything from the first <event to the LAST </event>, giving you just one giant match:
    */

    // Loop through each event
    for (const event of events){
        // Extract timestamp
        /*
            timestamp = Matches the literal timestamp
            = Matches the literal = sign
            """ Matches the literal  opening/closing quote
            (\d+) Capturing group \d means any digit (0-9), + means one or more times
            and it will match the first digit only as we didn't make is global
            timestampMatch = [
                'timestamp="1614285589"',  // [0] — complete matched text
                '1614285589'               // [1] — just what's inside the capturing group ()
            ]
            Regex:    /timestamp="(\d+)"/
                                ↑___↑
                                Parentheses = capture group

            Input:    timestamp="1614285589"

            Match result:
            [0] = 'timestamp="1614285589"'   ← The ENTIRE matched pattern
            [1] = '1614285589'                ← ONLY what's inside the parentheses (\d+)

        */
        const timestampMatch = event.match(/timestamp="(\d+)"/);

        // Extract description
        /*
            () Capturing group = captures whatever matches inside for [1]
            . Any charater (except newline by default)
            * Zero or more times
            ? Lazy = match as few characters as possible
        */
        const descriptionMatch =
            event.match(/<description>(.*?)<\/description/);
    }

}