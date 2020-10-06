Welcome to this repository. Here you will find the resolution of the challenge designed by Temperies IT.

This first version doesn't have Page Object Model, is only a first approach to implement the two test cases proposed by Temperies. There is a lot of repeating code too, issue that
hope to solve in future version. 

In order to execute the test, the firsTest.js and secondTest.js correspond to the excercise 1 and 2 respectively. Into the file package.json, we have to change the value of the key
"testDemo" with the name of the test that we want to run. For example, to run firsTest.js, it will be:

"testDemo": "testcafe chrome tests/Session1/firstTest.js"

Instead, if we want to run secondTest.js, it will be:

"testDemo": "testcafe chrome tests/Session1/secondTest.js"

Save all changes and then, into the terminal we write:

npm run testDemo


