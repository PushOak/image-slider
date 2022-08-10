# Create Image slider

# Step 1
Added html page from bootstrap

# Step 2
Added a basic bootstrap navbar 
https://getbootstrap.com/docs/5.2/components/navbar/#how-it-works
Also removed unnecessary links

# Step 3
Duplicated home page (index.html) and turned it into about.html 
Updated the links to show the right page.
About link - display the about page.
Home Page link - display the about page.

# Step 4 - Homepage clickable
When pressing homepage the homepage section is shown and hide the about section

# Step 5
Duplicated the homepage link code and adjusted it to the about page

# Step 6 - move script to separate file
copied and cut the javascript from index.html to app.js

# Step 7 - Add function to change pages in order to avoid code duplication
The function get a linkId and pageToHide and pageToShow and show the correct page

# Step 8 - Use currentPageId
Hold the shown page in a variable currentPageId
Hide the shown page using the variable
Show the page you want to display i.e. about page
Change the currentPageId with the new page

# Step 9 - add media link
first add media nav bar and media page
add the parameters corresponding to the media page classes

