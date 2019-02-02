# assignment5 on the NodeJS Master Class

A simple environment for practicing unit tests

In this project we use a ```lib.js``` file to hold simple functions which will be tested.

## The functions are: ##

1. **factorial** - Expects a number as an input. The function returns the factorial of a given number (example - ```factorial(5) == 1*2*3*4*5 = 120```).

2. **palindrome** - Expects a string as an input. The function returns ```true``` if the given string or number is a palindrome, otherwise a ```false``` is returned.

3. **randomString** - Expects a number indicating the string's length. The function generates a string containing only letters (```[a-z], [A-Z]```) and numbers (```[0-9]```).

4. **shift** - Expects a string and a number to indicate the desired number of shifts. The function returns a shifted string.
A **positive number** will shift the string to the **right**.
A **Negative number** will shift the string to the **left**.
A value of **zero** will return the string as is with **no shifts**.

5. **sort** - Expects a string as an input. The function returns a sorted string in an ascending order.

# unit.js #

## contains all the tests for all the functions: ##

1. Assert that the ```factorial``` function is returning the factorial of the given number.

2. Assert that the ```palindrome``` function returns true if the given string is actually palindrome.

3. Assert that the ```palindrome``` function returns true if the given number is actually palindrome.

4. Assert that the ```randomString``` function returns a string with the length equal to the given number.

5. Assert that the ```shift``` function returns a string shifted to the right when given a positive number of shifts.

6. Assert that the ```shift``` function returns a string shifted to the left when given a negative number of shifts.

7. Assert that the ```shift``` function returns the same input string when given a zero value as number of shifts.

8. Assert that the ```sort``` function returns a new sorted string in ascending order.
