# Code Challenge TestCafe

_Welcome to this repository. Here you will find the resolution of the challenge designed by Temperies IT._

## Description

This version has a POM implementation in both test cases. Into "pages" folder you will find two files wich corresponds to the two pages tested in this challenge. Selectors, URLs and functions have been mooved to this page objects files. I had some troubles declaring the client function outside of the test files, so I had to live it there. Also, TestCafe returns two warnings _"You passed a DOM snapshot property to the assertion's 't.expect()' method"_ probalby related with a malfunction of the Snapshot Property Warning with loops (See [#5389](https://github.com/DevExpress/testcafe/issues/5389)).

## Pre-Requirements

You have to have some IDE, in my case Visual Studio Code. Also, node.js (LTS version recommended) has to be installed. Then, in the Visual Studio terminal we write:

`npm install -g testcafe`

## Instalation and Test Execution

In order to execute the test, the _firsTest.js_ and _secondTest.js_ inside of _tests/Session1_ folder, correspond to the excercise 1 and 2 respectively. Into the file _package.json_, we have to change the value of the key _"testDemo"_ with the name of the test that we want to run. For example, to run _firsTest.js_, it will be:

`"testDemo": "testcafe chrome tests/Session1/firstTest.js"`

Instead, if we want to run _secondTest.js_, it will be:

`"testDemo": "testcafe chrome tests/Session1/secondTest.js"`

Save all changes and then, into the terminal we write:

`npm run testDemo`


