---
title: "Testing exceptions"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---
This subsection contains best practices regarding testing exception which are thrown by system under test. It covers cases when we are testing that certain exception was thrown and also cases when exceptions are just part of the test code.

Best practices regarding testing exceptions are as follows:

-   Catch tested exceptions using framework or library tools

-   Set general level for the test exception

# Catch tested exceptions using framework or library tools

It is not recommended testing exceptions by using *try* and *catch* block. Using the blocks only is redundant and it make test method bigger and makes it harder to read and understand test [(Link a Fröhlich 2003, chap. 4. Test Ideas and Heuristics)](#978-0-08-052017-9-978-1-55860-868-9). Also as stated by [(Koskela 2013, chap. 6.3 Never-Failing Tests)](#978-1-935182-57-3), this approach can lead to so-called *Never failing tests* which happends in case when we fortget to fail test in case when exception has not been thrown.

Instead, it is recommended to use methods or tools provided by testing frameworks and testing libraries. For example annotation @expectException for testing framework JUnit version 4 or ExpectedException for testing framework
*Visual Studio Test System.* By using this method we ensure that test is easier to read and understand and we also ensure that the test will behave correctly in all occasions.

# Set general level for the test exception

In cases where throwing an exception is not part of the test but is a possible product of one of the executed methods, we should again not use *try catch* blocks, but the exception should be caught by the test method itself. The reason is again improving the readability of the test code by reducing its length and also ensuring correct behaviour in case of exception thrown. The exception will thus be caught
by the test framework itself and the test will fail.

In this respect, it is also very important to pay attention to the level of exception that the test method will catch. It should always be the level of the exception at the top of the hierarchy, for example for the c++ programming language it is the *exception* class. This approach ensures easier maintainability of the tests, because if the production code is modified and a certain method starts throwing a different type of exception, the tests will not need to be changed as the top level will catch this case [(Acharya 2014, chap. 10. Best Practices-Handling exceptions)](#978-1-78398-251-6-978-1-78398-250-9)
