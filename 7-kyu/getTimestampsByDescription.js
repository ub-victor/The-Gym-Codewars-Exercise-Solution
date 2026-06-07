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

*/