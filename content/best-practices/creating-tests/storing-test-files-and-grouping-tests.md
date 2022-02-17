---
title: "Storing test files and grouping tests"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

Tato podsekce obsahuje nejlepší postupy týkající se uložení testů a testovacích
souborů ve vývojovém prostředí.

Nejlepší postupy týkající se uložení testovacích souborů a seskupování testů jsou
následující:

-   Keep tests outside of production code

-   Store tests for one system under test in one place

# Keep tests outside of production code

Unit tests should always be placed outside of production code. One of the common
problem is to store tests in the same class as the code under test, but this leads to
a number of problems:

- The class becomes very long and unreadable over time.

- Tests require importing additional dependencies, and that affects
  the size of the final package when building the application

- Execution of tests is more challenging

Similarly, saving tests in a separate file that is in the same package as the code under test leads to problems:

- Package clutter, difficult to find files

- Inflating the size of the resulting package when building the application

It is recommended to store tests in a separate folder hierarchy that is completely
separate from the production code. [(Govindaraj 2015, Ch. 6. Maintaining Your Test Suite-Organizing tests)](#978-1-78398-792-4) lists two popular ways
storing tests. The first is to store the tests in a separate package that is
part of the main code package (see img. 7).

![img.png](./save_tests_into_production_code_sub_package_example.png)

img. 7 Example of saving tests as a sub package of production code [(Govindaraj 2015, Ch. 6. Maintaining Your Test Suite-Organizing tests)](#978-1-78398-792-4)

The second way is shown in img. 8, and in this case the tests are stored in
separate package, outside of the production code package.

![img.png](./save_tests_into_separate_package_outside_production_code_package.png)

img. 8 Saving tests in a separate package outside the production code package
[(Govindaraj 2015, Ch. 6. Maintaining Your Test Suite-Organizing tests)](#978-1-78398-792-4)

In addition to these two methods, however, there is a third method that is specific to
certain systems, such as Java. The latter places tests and production code in
the same package, but in different physical locations, i.e. it sets them to different
root folder (see img. 9).

![img.png](./save_tests_into_same_package_under_different_root_folder.png)

img. 9 Saving tests and code into the same packages with different root folder
[(Govindaraj 2015, Ch. 6. Maintaining Your Test Suite-Organizing tests)](#978-1-78398-792-4)

# Store tests for one system under test in one place

It is generally recommended storing all tests related to a particular system under test in one place. However, the book [(Link and Fröhlich 2003, Ch. 4. Test Ideas and Heuristics) ](#978-0-08-052017-9-978-1-55860-868-9) presents cases where
it is appropriate to violate this rule:

- The number of tests in the test suite is too large and the class becomes very
  cluttered, we should separate tests with the same characteristics into
  separate test files. The huge number of tests may also indicate a violation of the principle of one responsibility in the system under test, and thus is is a good idea to consider splitting the system under test into multiple parts.

- Preliminary steps, e.g. in the setUp method, are repeated for many tests and for others
  do not. These tests should be separated into a separate test class.
