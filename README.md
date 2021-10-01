# internship_project

<b>How to run</b>

1) Open CMD
2) Navigate to the folder of the project
3) Run this command: <b>python -m http.server</b>. A localhost server will open in port 8000. (You must have installed Python in yor computer first).
4) Enter the following in your browser: http://localhost:8000/index.html

<b>Explanation</b>

First of all, i created a localhost server in order to parse and read the JSON file. After parsing the data, an array was created to store the JSON objects.
After that, the links of each order was created dynamically with HTML and by clicking at a link , a new window will appear with the details of each order.

Some details were inside an array, so i had to iterate through it and create(dynamically with HTML again) a row for every product of the order. 

This project was similar to another project i did as a student in university. In that project, main task was to search for books from a XML file and incorporate functionalities like edit,bookmark,delete.

<b>Note</b>

Only pure JavaScript is used in this project.

