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

const getTimestampsByDescription (xml, description)=>{
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
    * mean zero or more of the preceding charater.
    ? makes it lazy(non-greedy), so it matches the smallest possible amount rather tht the largest
    <\/event> matches the leteral closing tag
    eg: <event id="1">Hello</event>
        <event id="2">World</event>

        
    */
    const events = xml.match(/<event[\s\S]*?<\/event>/g);

}