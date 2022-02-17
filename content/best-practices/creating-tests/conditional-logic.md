---
title: "Conditional logic"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---
This subsection addresses the issue of using conditional logic inside test code.

Nejlepší postupy týkající se podmíněné logiky jsou následující:

-   Do not use if,switch, for or while blocks in a test

# Do not use if, switch, for or while blocks in a test

Conditional logic in the form of if, else, for, or while should not be part of part of the test code. It generally increases the complexity of the test method, making it difficult to read and makes it very difficult to determine what is actually being tested. It leads to skipping some verification methods and gives the illusion of correctness [(Koskela 2013, chap. 4.5 Split personality)](#978-1-935182-57-3). A general solution to this problem is to extract all conditional
branches into separate tests. Another possibility is to use the so-called *Parameterized tests,* each option is represented by a single set of parameters.*
