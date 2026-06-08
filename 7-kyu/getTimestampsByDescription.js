/*
Imagine a security monitoring system.

Whenever something happens, the system writes an event into an XML log file.

eg: 
        <event timestamp="1614285589">
        <description>Intrusion detected</description>
        </event>

        <event timestamp="1614286432">
            <description>Intrusion ended</description>
        </event>
Each event contains:
    1. A timestamp 
        - Store as an attribute.
        - eg: 1614285589
    2. A description
        - Store inside a <description> tag.
        eg: <description>Intrusion ended</description>

2. What does the function need to do?
    The function receives:
    getTimestampsByDescription(xml, description)
eg: getTimestampsByDescription(xmlData, "Intrusion ended")

The job is:
    Look through all events.
    Find events whose description matches : Intrusion ended
        Collect their timestamps
        Return them as an array.
    If it does not match we skip it

3. How Do we Solve it?

We need four major steps

Find every <event> inside the XML, loop through all events one by one 
Then extract Description for each event: <description>Intrusion ended</description> read the <description>Intrusion ended</description>
Then the important step here is to Compare  by checking eventDescription === description
So if eventDescription === description it will result true , when true  get the timestamp="1614286432"
then after getting the timestamps we store it timestamps.push(1614286432);

4. Algorithm Before Coding

Create empty array

Find all events

For each event
    Get description

    If description matches requested description
        Get timestamp
        Convert timestamp to number
        Save in array

Return array of timestamp retrieve

install = npm install @xmldom/xmldom

*/
const { DOMParser } = require('@xmldom/xmldom');
const xml =
        `<data>
            <event timestamp="1614285589">
                <description>Intrusion detected</description>
            </event>
            <event timestamp="1614286432">
                <description>Intrusion ended</description>
            </event>

        </data>`;
function getTimestampsByDescription(xml, description) {
    // Create an XML parser
    const parser = new DOMParser();

    // Convert the XML string into an XML document
    const xmlDoc = parser.parseFromString(xml, "text/xml");

    // Get all <event> elements from the XML
    const events = xmlDoc.getElementsByTagName("event");

    // Create an array that will store matching timestamps
    const timestamps = [];

    // Loop through every event found in the XML
    for (let i = 0; i < events.length; i++) {

        // Get the current event
        const event = events[i];

        // Find the <description> tag inside the current event
        const descriptionElement =
            event.getElementsByTagName("description")[0];

        // Extract the text from the description tag
        const eventDescription =
            descriptionElement.textContent.trim();

        // Check whether the description matches the target description
        if (eventDescription === description) {

            // Get the timestamp attribute from the event tag
            const timestamp =
                event.getAttribute("timestamp");

            // Convert the timestamp string into an integer
            const timestampNumber =
                parseInt(timestamp, 10);

            // Add the timestamp to the result array
            timestamps.push(timestampNumber);
        }
    }

    // Return all matching timestamps
    return timestamps;
}

console.log(getTimestampsByDescription(xml, "Intrusion ended"));