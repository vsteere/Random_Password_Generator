# Random Password Generator
## Homework 3

Summary
This project contains an HTML file that generates a randomized password using several user entered parameters

User is prompted for the following parameters:
- Password length (8 - 128 characters)
- inclusion of lowercase characters
- inclusion of uppercse characters
- inclusion of numbers
- inclusion of special characters


Design
The project objective is to create an on-demand application that generates a password based on user prompts of length and character parameters. 

It was executed using four arrays that defined the different types of characters a user can choose, 
such as special characters, uppercase, lowercase, etc. 

Once the Generate button was clicked a function was executed which started out with user prompts to determine the pasword length and which parameters were to be included. The password length was converted to an integer and the four remaining parameters were stored as booleans. 

If statements were used to concat the arrays based on the user prompts; once the arrays were combined, a for loop was created to create the password based on the length requirements. 

Once the password with the correct length and parameter requirements was generated, it is converted to a string
and linked to the text box.

