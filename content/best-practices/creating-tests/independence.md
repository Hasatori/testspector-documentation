---
title: "Independence"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

This subsection contains best practices ensuring test independence.
Test independence is one of the essential characteristics of a unit test.
It means that tests should not depend on each other. One test should not set the conditions for the next test, and each test should be able to run independently and in any order [(Martin 2009)](#978-0-13-235088-4). Beyond the scope of this definition, the subsection also covers the broader aspect of test independence in terms of independence from environment or production code

Best practices regarding independence are as follows:

-   Do not use global static properties

-   Do not use domain knowledge

-   Use relative paths

-   Keep tests platform independent

-   Keep tests independent of the production code

-   Create your own data and resources

# Do not use global static properties

We should not use and modify global static variables across tests. Tests share a reference to the same variable, and if one modifies it, it will change the conditions for the following test [(Acharya 2014, Ch. 10. Best Practices-Configuring tests)](#978-1-78398-251-6-978-1-78398-250-9). If a variable is so-called Immutable, i.e., its internal set values cannot be changed, the solution is to make the variable a constant. Then individual tests cannot change its reference or its content (an example is the final keyword in Java). If it is possible to change the internal values of a variable, it is recommended to convert it at the test class level and set it either in the test itself or using the hook method that is run before each test.  When using the hook method, the variable must be reinitialized.

# Do not use domain knowledge

This is the case when we use the domain on which we create tests to determine
the result of the test. A simple example is a class that has a method for adding two
numbers. The wrong way to test the method is to sum the input parameters in the test
and then expect them as the result (see img. 10). However, the correct way is to
calculate the result ourselves and directly insert it as the expected result (img. 11).

![img.png](./breaking_rule_using_domains_knowledge_example.png)

img. 10 Example of using a domain knowledge [(Khorikov 2020, Ch. 11. Unit testing anti-patterns)](#978-1-61729-627-7)

![img.png](./correct_test_not_using_domains_knowledge_example.png)

img.11 Example of a correct test where domain knowledge is not used [(Khorikov 2020, Ch. 11. Unit testing anti-patterns)](#978-1-61729-627-7)

#  Use relative paths

Tests should never include absolute paths to the resources being used. Resources should be stored in a common place in a shared project and referenced by relative paths [(Koskela 2013, ch. 5.4 Clipping File Path)](#978-1-935182-57-3).

# Keep tests platform independent

There is often conditional logic in the test that differentiates what and how to test depending on the platform used. An example of a bad test that is platform-dependent is shown in Figure 12. As can be seen, the verification methods of the test change depending on the operating system.

![img.png](./platform_dependent_test_example.png)

Figure 12 Example of a platform dependent test [(Koskela 2013, ch. 6.6 Platform prejudice)](#978-1-935182-57-3)

Instead of this approach, it is recommended to split the test into separate tests
and provide a means to run the test independently of the platform. An example is to create a custom class to represent the operating system and then run the test on it (see Figure 13).

![img.png](./test_not_dependent_on_operation_system_example.png)

img. 13 Example of an operating system independent test [(Koskela 2013, ch. 6.6 Platform prejudice)](#978-1-935182-57-3)

# Keep tests independent of the production code

The test code should never be part of the production code. Anyway nor should the production code contain a method that is only called as part of the tests.  If the system behaves differently when it is tested, how can we be sure that it really works. A proper system should allow each part of the system to be isolated and tested
[(Meszaros 2007, Ch. 5. Principles of Test Automation)](#978-0-13-149505-0), [(Bowes et al. 2017)](#978-1-5386-2807-2).

# Create your own data and resources

We should generate sources and data for tests [(Meszaros 2007)](#978-0-13-149505-0). Examples are constants that are part of the code under test and decide the behavior of the system. If we need to work with this constant in tests and verify the correct behavior of the system based on it, we need to recreate it here.
