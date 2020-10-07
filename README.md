Welcome to this repository. Here you will find the resolution of the challenge designed by Temperies IT.

This version has a very first approach to POM in both test cases. Into "pages" folder you will find two files wich corresponds to the two pages tested in this challenge. This is a incomplete implementation o POM because there are still functions and constants in the test cases code. Only the selectors have been mooved to the page objects files.

In order to execute the test, the firsTest.js and secondTest.js inside of tests/Session1 folder, correspond to the excercise 1 and 2 respectively. Into the file package.json, we have to change the value of the key
"testDemo" with the name of the test that we want to run. For example, to run firsTest.js, it will be:

"testDemo": "testcafe chrome tests/Session1/firstTest.js"

Instead, if we want to run secondTest.js, it will be:

"testDemo": "testcafe chrome tests/Session1/secondTest.js"

Save all changes and then, into the terminal we write:

npm run testDemo


