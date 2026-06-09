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
    
    */
    const events = xml.match(/<event[\s\S]*?<\/event>/g);
}