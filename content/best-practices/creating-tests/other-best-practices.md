---
title: "Other best practices"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

Other best practices in group creating tests are as follows:

-   Keep the tests reliable

-   Delete dead code

-   Separate data generating from its asserting

##  Keep the tests reliable

Tests should be consistent and should behave exactly same every time you run them. Tests that have from time to time different result are bad and are called "*Erratic tests*" [(Koskela 2013, kap. 2.4 Independent tests run easily in solitude)](#978-1-935182-57-3).

## Delete dead code

Dead code is a redundant part that just makes test files bigger and confuses other programmers. Example of dead code is commented out test methods [(Koskela 2013, chap. 6.1 Commented-out tests)](#978-1-935182-57-3). It is recommended to analyze why was a certain test commented out and if there was no particular reason it should be deleted.
není, tak test vymazat.

## Separate data generating from its asserting

If there are a lot of testing data then its generating should be separated from its asserting. Testing method should accept just parameters and data itself should be generated separately [(Brader et al. 2012, chap. Separate test data generation from verification)](#978-1-62114-018-4). Each combination of parameters is then one test case. An example of this are parameterized tests in JUnit version 5(see img.6)

img.6 Example of separating data generation from asserting
![separate_data_generating_From_verification_example.png](./separate_data_generating_from_verification_example.png)
