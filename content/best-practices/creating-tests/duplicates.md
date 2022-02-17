---
title: "Duplicates"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

In programming, duplication of code is generally considered a bad practice. In this respect, unit tests are no exception and same principle should apply to them.

The Best Practices for working with duplicates are as follows:

-   Extract repetitive parts of the test code

-   Extract repetitive test methods


# Extract duplicate parts of the test code

Extract code blocks that are duplicated across multiple tests into a *helper method*, *setup method*, *fixture method* or *teardown method*.
The methods should follow the same rule, and it should not share same code as well. [(Govindaraj 2015, chap. Making tests readable)](#978-1-78398-792-4),[(Martin 2009, chap. 9. Unit tests-Clean Tests)](#978-0-13-235088-4).

In addition to structural and literal duplicates you should also pay attention to so-called semantic duplicates, ie parts of the code that do not look the same but do the same thing [(Koskela 2013, chap. 5.1 Duplication)](#978-1-935182-57-3).

# Extract duplicate methods

Extract methods that are duplicated across several test files  into a separate file and import methods from the file [(Govindaraj 2015, chap. Making tests readable)](#978-1-78398-792-4).
