# PasswordGenerator

After clicking the "Generate Password" button, user is given 4 prompts. 

1. "How many characters for your password (8-128)"
2. "Do you want UpperCase letters?"
3. "Do you want Numbers?"
4. "Special Characters?")

The alorithm used here is I placed all possible options in 4 sepearate arrays. An array for lower case letters, upper case, special characters and numbers. 

I then used randomizers to randomly pick the character in each array. 

After the character is randomly chosen I then append this to the "generatedPasswordHolder" array.

Here I implemented a do-while loop, and after the loop I attempted to convert the array to a string to then return, and display in the form. 

However, at the time or writing this, the function "toString" is placing additional unwanted characters after the randomly chosen ones. 
