---
title: "Creating tests"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

This section contains best practices for creating unit tests. It basically answers the question "What should the tests and test code look like?". In other words what should
the code of the tests look like to follow Best Practices be easy to maintain and understand.

# Duplicates

In programming, duplication of code is generally considered a bad practice. In this respect, unit tests are no exception and same principle should apply to them.

The Best Practices for working with duplicates are as follows:

-   Extract repetitive parts of the test code

-   Extract repetitive test methods

## Extract duplicate parts of the test code

Extract code blocks that are duplicated across multiple tests into a *helper method*, *setup method*, *fixture method* or *teardown method*.
The methods should follow the same rule, and it should not share same code as well. [(Govindaraj 2015, chap. Making tests readable)](#978-1-78398-792-4),[(Martin 2009, chap. 9. Unit tests-Clean Tests)](#978-0-13-235088-4).

In addition to structural and literal duplicates you should also pay attention to so-called semantic duplicates, ie parts of the code that do not look the same but do the same thing [(Koskela 2013, chap. 5.1 Duplication)](#978-1-935182-57-3).

## Extract duplicate methods

Extract methods that are duplicated across several test files  into a separate file and import methods from the file [(Govindaraj 2015, chap. Making tests readable)](#978-1-78398-792-4).

# Speed

High speed is one of the basic qualities that unit tests should have. Based on the "Agile testing pyramid" unit tests are created first and they are the most numerous type of test. Therefore it is very important to make sure each unit test will be very fast and should avoid executing any actions that might prolongate its run.

The Best Practices regarding speed are as follows:

-   Using in-memory resources and mocking

-   Avoid actions that are blocking the main thread

## Using in-memory resources and mocking

In case we are working with a database, need to call HTTP requests, execute soap operations, read data from files, etc., it is important to run such actions in memory and avoid actions that slow things down [(Acharya 2014, chap. Configuring tests)](#978-1-78398-251-6-978-1-78398-250-9). For example, you can use an in-memory database instead of a typical one. The in-memory database system does not work with actual files but it keeps everything in memory. Operations like reading or writing are much faster. Similarly, mocking can be used. The principle is exactly the same so actions which in the real system take a very long time will be much faster and due to that test itself will take less time to finish.

## Avoid actions that are blocking the main thread

This is mostly connected to cases when we are waiting for actions to finish in separate threads and therefore we are putting the main thread to sleep. This approach is not efficient because actions on side threads might take different time to finish each time. Therefore it is recommended to ensure that we will directly wait till actions on separate threads will finish and then we can continue in the main thread. By using this approach we will ensure that the main thread is going to wait the least time possible.

# Assertions

This section contains best practices regarding working with assertions, how to use them, and generally how to evaluate expected behaviour.

Best practices regarding assertions are as follows:

-  At least one assertion per test

-  Only one assertion per test

-   Do not use Guard Assertions

-   Keep the right order of the assertion method parameters

-   Use  messages describing the error

-   Create custom assertions methods

-   Keep the assertions simple

## At least one assertion per test


Each test should contain at least one assertion method. You should avoid cases when the body of a test contains no assertion method or is empty. Unit test frameworks usually report such tests as passed which leads to false results.

## Only one assertion per test

Opinions on this best practice are not uniform and a lot of authors have different opinions on it. Books [(Meszaros 2007, chap. 5. Principles of Test Automation)](#978-0-13-149505-0), [(Powerhouse 2018, chap. 6. Why JUnit does not report all the failures in a single test)](#978-1-976900-84-6) and [(Acharya 2014, chap. 10.Best  Practices-Working with assertions)](#978-1-78398-251-6-978-1-78398-250-9) are quite strict about it and they always require only one assertion per test. In their mind, if a test contains multiple assertions it should be split into multiple test methods. Generally, they think that having multiple assertions in a test has an impact on readability and also makes maintenance trickier.

On the other hand authors [(Martin 2009, chap. 9. Unit Tests)](#978-0-13-235088-4), [(Khorikov 2020, chap. 3.1.5 How many assertions should the assert section hold?)](#978-1-61729-627-7), [(Langr a Swaine 2013, chap. 7. Quality Tests-One Assert per Test) ](#978-1-937785-48-2) a
[(Tarlinder 2016)](#978-0-13-429106-2), [(Turnquist a Das 2018, chap. What is the right size for a test method?)](#978-1-78728-150-9) think that the rule is way too strict and that we should think about the whole thing differently. Rather than aiming for one assertion method, we should aim for testing one behaviour per test. Testing one behaviour per test can lead to multiple different outputs and it is ok to use multiple assertions to check them. In other words, a number of assertion methods should not be caused by mixing multiple test cases together but more of an unavoidable thing to test one behaviour. In general, however, the authors hold the view that a number of assertions should not be mindlessly increased and it should be kept as low as possible.

Regarding multiple assertion methods it is also important to realize one additional problem. A lot of unit testing frameworks, for example JUnit, will fail the whole test even if just one assertion method fails. This is a big problem, because even if the test is testing just one behaviour using multiple assertion methods, the result of it is misleading and it does not provide overview of all the errors. In order to get information about all the errors assertions has to be commented out one by one and test has to be repeatedly executed. Solution is either limit number of assertion errors to one or use special assertions which allow asserting multiple things in a batch. One example is the method assertAll(), that is available for the testing framework JUnit version 5 [(García 2017, chap. Jupiter assertions)](#978-1-78712-439-4).

## Do not use Guard Assertions

One of the most common errors in the code is sudden exception like *NullPointerException* or *IndexOutOfBoundsException*. For this reason programmers add extra check which would prevent such situations. In tests such checks are redundant because the test would fail and the error message would be part of the result report. Therefore it is recommended to avoid such redundant checks, because they add no value to the test and they make the whole test longer and harder to understand [(Koskela 2013, chap. 4.9. Overprotective tests)](#978-1-935182-57-3).

## Keep the right order of the assertion method parameters

Expected value should always be custom test data and actual value the value returned by the system under the test. It is a small mistake but can lead to big problems [(Acharya 2014, chap. 10. Best Practices-Working with assertions)](#978-1-78398-251-6-978-1-78398-250-9).

## Use messages describing the error

If it is possible it is recommended to add some additional messages exaplaining the error to the assertion methods. The message will then make it easier to understand what is the error about [(Hamill 2004, chap. 4. Writing Unit Tests-Types of Asserts)](#978-0-596-00689-1).

## Create custom assertions methods

In specific cases it is recommended to create a custom assertion methods. This approach helps readibility of the tests and prevents code duplications[(Hamill 2004, kap. 4. Writing Unit Tests-Defining Custom Asserts)](#978-0-596-00689-1). It is recommended to use this approach if there is same sequence of assertions across multiple tests. Such sequence can be then extracted into a separate class or method [(Govindaraj 2015, kap. 6. Maintaining Your Test Suite-Writing tests closer to the domain)](#978-1-78398-792-4).

## Keep the assertions simple

It is recommended to avoid overly complicated assertion methods, that do not imply what is asserted. It is very hard to understand such methods and they are also very unstable and even simple change can lead to a failure. Book [(Koskela 2013, chap. 4.2 Hyperassertions) ](#978-1-935182-57-3) calls such assertions Hyperassertions and
gives an example of an assertions that compares content of a file with content of a file produced filed after transformation (img. 2).

![hyperassertion_example.png](./hyperassertion_example.png)

img. 2 Example of Hyperassertion [(Koskela 2013)](#978-1-935182-57-3)

# Structure of the test method

This subsection contains best practices regarding structure of the test.

Best practices regarding structure of the test method are as follows:

-   3-phase test design

-   4-phase test design

-   Do not repeat the test phases

-   Separate the test phases

## 3-phase test design

It is a simple, but very effective way of structuring test code into three parts. The first part includes creating necessary objects and setting necesarry properties which are required for the test. The second part is about executing action which should invoke tested functionality. The third part then checks expected behaviour. There are many names for this kind of approach for example **Given-When–Then** [(Khorikov 2020, chap. 3. The anatomy of a unit test)](#978-1-61729-627-7), **Build–Operate–Check** [(Tarlinder 2016, chap. 7. Unit Testing-Structuring Tests)](#978-0-13-429106-2) or **Arrange–Act–Assert (AAA)** [(Brader et al. 2012, chap. 2. Unit Testing: Testing the Inside)](#978-1-62114-018-4), but the principle is exactly the same. The first part is usually the longest one and if it is significantly longer than other two parts, it is recommended to extract it into a separate helper method or class  [(Khorikov 2020, chap. 3.1.4. How large should each section be?)](#978-1-61729-627-7). Same approach is recommended for other two parts.

## 4-phase test design

It is basically the 3-phase test design but it has extra 4th phase which is responsible for cleaning the testing environment. The phases are known by names
**Setup-Execute-Verify-Teardown** [(Tarlinder 2016, chap. 7. Unit Testing-Structuring Tests)](#978-0-13-429106-2). This approach is recommended in case when we are sharing certain objects between multiple tests or if we are creating some artifacts (for example files, directories), or if we are updating some data in a database. Without the 4th phase there we would make tests dependent on each other or influence next run of same tests. If used testing framework supports so called hook operations, it is possible to clean the testing environment by operation which is executed after each test or after all tests. Example of these hook operations is available for testing framework JUnit version 5 and are called AfterEach(after each test) or AfterAll(after all tests).

## Do not repeat the test phases

Regardless of if we decide to use 3-phase test design or 4-phase test design, each test should always contains each phase just once. Breaking this rule makes tests way to complicated and hard to understand [(Khorikov 2020, chap. 3.1.2 Avoid multiple arrange, act, and assert sections)](#978-1-61729-627-7).

## Separate the test phases

In order to make test easier to read it is recommended to separate each phase. For small tests the separation can be done by empty line. For big tests it is better to use comments [(Khorikov 2020, chap. 3.1.8 Dropping the arrange, act, and assert comments from tests)](#978-1-61729-627-7).
Img.3 shows what the separation by empty line looks like.

![alt text](./test_part_separation_for_better_readability.png "Title")

img. 3 Separation of the tests parts by empty line [(Khorikov 2020)](#978-1-61729-627-7)

# Variables

This section describes best practices regarding working with variables.

Best practices regarding variables are as follows:

-   Replace fixed values with constants

-   Do not use magic numbers

## Replace fixed values with constants

Instead of using fixed or direct values it is recommended to use constants.

Namísto pevných, nebo přímých hodnot, je doporučováno používat konstanty. This contributes to better readability, easier understanding and it also prevents duplications that would be repeated between tests  (see img. 4)

![alt text](./use_constant_instead_value_example.png "Title")

img. 4 Example of using constants instead of fixed values [(Link a Fröhlich 2003, chap. 4. Test Ideas and Heuristics)](#978-0-08-052017-9-978-1-55860-868-9)

## Do not use magic numbers

Instead of using the so-called magic numbers, ie specific values, it is better to replace numbers with constants
or variables. Appropriately named constant or variable gives the number a meaning and ensures easier readability of the code. Another way is to use an auxiliary method, which we pass as a parameter number and the method by its name gives the number meaning. This approach is advantageous if the values of the numbers for each test change (see img.5).

![alt text](./use_help_method_instead_of_magic_number_example.png "Title")

img. 5 Example of using an auxiliary method instead of magic numbers [(Koskela 2013, chap. 4.7 Magic Numbers)](#978-1-935182-57-3)

# Other "Best practices"

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


# Testing exceptions

This subsection contains best practices regarding testing exception which are thrown by system under test. It covers cases when we are testing that certain exception was thrown and also cases when exceptions are just part of the test code.

Best practices regarding testing exceptions are as follows:

-   Catch tested exceptions using framework or library tools

-   Set general level for the test exception

## Catch tested exceptions using framework or library tools

It is not recommended to test exceptions by using *try* and *catch* block. Using the blocks only is redundant and it make test method bigger and makes it harder to read and understand test [(Link a Fröhlich 2003, chap. 4. Test Ideas and Heuristics)](#978-0-08-052017-9-978-1-55860-868-9). Also as stated by [(Koskela 2013, chap. 6.3 Never-Failing Tests)](#978-1-935182-57-3), this approach can lead to so-called *Never failing tests* which happends in case when we fortget to fail test in case when exception has not been thrown.

Instead it is recommended to use methods or tools provided by testing frameworks and testing libraries. For example annotation @expectException for testing framework JUnit version 4 or ExpectedException for testing framework
*Visual Studio Test System.* By using this method we ensure that test is easier to read and understand and we also ensure that the test will behave correctly in all occasions.

## Set general level for the test exception

In cases where throwing an exception is not part of the test but is a possible product of one of the executed methods, we should again not use *try catch* blocks, but the exception should be caught by the test method itself. The reason is again improving the readability of the test code by reducing its length and also ensuring correct behaviour in case of exception thrown. The exception will thus be caught
by the test framework itself and the test will fail.

In this respect, it is also very important to pay attention to the level of exception that the test method will catch. It should always be the level of the exception at the top of the hierarchy, for example for the c++ programming language it is the *exception* class. This approach ensures easier maintainability of the tests, because if the production code is modified and a certain method starts throwing a different type of exception, the tests will not need to be changed as the top level will catch this case [(Acharya 2014, chap. 10. Best Practices-Handling exceptions)](#978-1-78398-251-6-978-1-78398-250-9)

# Conditional logic

This subsection addresses the issue of using conditional logic inside test code.

Nejlepší postupy týkající se podmíněné logiky jsou následující:

-   Do not use if,switch, for or while blocks in a test

## Do not use if, switch, for or while blocks in a test

Conditional logic in the form of if, else, for, or while should not be part of part of the test code. It generally increases the complexity of the test method, making it difficult to read and makes it very difficult to determine what is actually being tested. It leads to skipping some verification methods and gives the illusion of correctness [(Koskela 2013, chap. 4.5 Split personality)](#978-1-935182-57-3). A general solution to this problem is to extract all conditional
branches into separate tests. Another possibility is to use the so-called *Parameterized tests,* each option is represented by a single set of parameters.*

# Naming conventions

This subsection contains best practices for naming test methods, test classes, and general naming recommendations. Proper naming is extremely important as it helps the readability and clarity of the tests. In the long run, it also helps make tests easier to maintain, as the name gives us a clear indication of what the test actually tests.

Best practices regarding naming conventions are as follows:

-   Setup a test naming strategy

-   Maintain consistent test naming

-   Use one naming strategy for the concept

-   Use "known solution" names

-   Use appropriate names for test classes

-   Use pronounceable and searchable names

-   Prevent misinformation

-   Use sufficiently distinct names

-   Omit redundant name parts

-   Use intent revealing names

## Setup a test naming strategy

There are several recommended strategies that can be used for naming tests.
For example, [(Langr et al. 2015, Ch. 4. Organizing Your Tests-Tests as Documentation)](#978-1-937785-48-2) recommends following ways:

- *doingSomeOperationGeneratesSomeResult*

- *someResultOccursUnderSomeCondition*

- *given-when-then*

- *givenSomeContextWhenDoingSomeBehaviorThenSomeResultOccurs*

Other literature [(Tarlinder 2016, Ch. 7. Unit Testing)](#978-0-13-429106-2), [(Khorikov 2020, Ch. 3. The anatomy of a unit test)](#978-1-61729-627-7) suggests splitting the title into 3 parts *whatIsTested_contitions_expectedResult.*

The above mentioned methods are also referred to as Behavior-driven Development Style, i.e. the test name expresses the expected behavior of the system under test. However, it is worth mentioning that the chosen naming strategy is subjective, but regardless of which naming strategy we choose name should always contain 3 informations:

1. what is being tested

2. what are the conditions, the data for the test

3. what is the expected outcome of the test

In some cases, the above procedure can lead to very long test names that are difficult to read. In this case, it is worth adding a long description to the test name. For example in Python, this can be achieved with docstring [(Govindaraj 2015, ch. 7. Executable Documentation with doctest)](#978-1-78398-792-4). For Java and the JUnit version 5 testing framework, there is a displayName annotation

## Maintain consistent test naming

Whichever test naming strategy you choose, you must stick to it and name all tests in a consistent way. If each test is named in a different, albeit correct, way, it will be much more difficult for its reader to understand what is being tested and the tests as a whole [(Tarlinder 2016, Ch. 7. Unit Testing)](#978-0-13-429106-2).

## Use one naming strategy for the concept

It is generally recommended to use only one naming style for a concept. It is very confusing to use the prefix "create" for a helper method that creates an object in one test and use the prefix "build" for a helper method that does exacltly same thing. This will then make a person reading a method wonder if the method with the "create" prefix is any different from the method with the "build" prefix. They will then have to explore a method and spend will more time with writing tests [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4).

## Use "known solution" names

This recommendation is closely linked to the previous one. For concepts that are generally known and are formed in the same way we should use common names [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4). An example of this is if we use the Builder design pattern. Instead of the standard naming style "NameObjectBuilder", we would end it with the suffix creator, or other equivalent. Again, this is a confusing name that requires to navigate through the implementation and makes it difficult to create or read tests.

## Use appropriate names for test classes

It is recommended to end the name of the test class with the suffix "Test". This way clearly indicates which classes are test classes and also plays a role in many cases for the tools that run the tests.

## Use pronounceable and searchable names

Whether it is a method, class, or variable, in general names that are easy to pronounce and find should be used [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4). It makes it easier for people working with tests to communicate because name are easier to memorize and search.

## Prevent misinformation

The name of the method or variable should not be confusing and should express what is it actually represents [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4). An example would be a variable named *activationDate*, which is actually of type long and represents a date in milliseconds. In this case, the name is misleading and a more appropriate name would be variable *activationDateMilis*

## Use sufficiently distinct names

We should always use different names for different concepts. Examples are two parameters representing the source and target, named *a1* and *a2*. Such naming is completely inappropriate because they can very easily be confused. If the names were *source* and *destination,* it would be much more difficult to confused them [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4).

Information noise in names is also related to this issue. For example, if we create two classes *ProductInfo* and *ProductData*. *Data* and *Info* means actually the same thing, but they are two separate classes [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4).

##  Omit redundant name parts

Names should not include redundant information that does not add any value and only lengthens the name. Those are information that are quite obvious from the context of use and thus need not be included [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4). An example are words like *variable*, *constant* or *property* in variable name or words *method or function* in method names or *class* in name of a class.

## Use intent revealing names

This best practice is closely related to the aforementioned rules of *Use pronounceable and searchable* names, *Avoid misinformation*, and states that method or variable names should always communicate intent and make it clear for which purpose they were created [(Martin 2009, Ch. 2. Meaningful Names)](#978-0-13-235088-4).  An example might be when we create a variable representing yesterday's date. A bad name would be if we named it, for example, "date". Conversely, a name that communicates the intent would be "yesterday".

# Storing test files and grouping tests

Tato podsekce obsahuje nejlepší postupy týkající se uložení testů a testovacích
souborů ve vývojovém prostředí.

Nejlepší postupy týkající se uložení testovacích souborů a seskupování testů jsou
následující:

-   Keep tests outside of production code

-   Store tests for one system under test in one place

## Keep tests outside of production code

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

## Store tests for one system under test in one place

It is generally recommended to store all tests related to a particular system under test in one place. However, the book [(Link and Fröhlich 2003, Ch. 4. Test Ideas and Heuristics) ](#978-0-08-052017-9-978-1-55860-868-9) presents cases where
it is appropriate to violate this rule:

- The number of tests in the test suite is too large and the class becomes very
  cluttered, we should separate tests with the same characteristics into
  separate test files. The huge number of tests may also indicate a violation of the principle of one responsibility in the system under test, and thus is is a good idea to consider splitting the system under test into multiple parts.

- Preliminary steps, e.g. in the setUp method, are repeated for many tests and for others
  do not. These tests should be separated into a separate test class.

  >   [Independence](#independence)

>> [Do not use global static properties](#do-not-use-global-static-properties)

>> [Do not use domain knowledge](#do-not-use-domain-logic)

>> [Use relative paths](#use-relative-paths)

>> [Keep tests platform independent](#keep-tests-platform-independent)

>> [Keep tests independent of the production code](#keep-tests-independet-of-the-production-code)

>> [Create your own data and resources](#create-your-own-data-and-resources)

# Independence

This subsection contains best practices to ensure test independence.
Test independence is one of the essential characteristics of a unit test.
It means that tests should not depend on each other. One test should not set the conditions for the next test, and each test should be able to run independently and in any order [(Martin 2009)](#978-0-13-235088-4). Beyond the scope of this definition, the subsection also covers the broader aspect of test independence in terms of independence from environment or production code

Best practices regarding independence are as follows:

-   Do not use global static properties

-   Do not use domain knowledge

-   Use relative paths

-   Keep tests platform independent

-   Keep tests independent of the production code

-   Create your own data and resources

## Do not use global static properties

We should not use and modify global static variables across tests. Tests share a reference to the same variable, and if one modifies it, it will change the conditions for the following test [(Acharya 2014, Ch. 10. Best Practices-Configuring tests)](#978-1-78398-251-6-978-1-78398-250-9). If a variable is so-called Immutable, i.e., its internal set values cannot be changed, the solution is to make the variable a constant. Then individual tests cannot change its reference or its content (an example is the final keyword in Java). If it is possible to change the internal values of a variable, it is recommended to convert it at the test class level and set it either in the test itself or using the hook method that is run before each test.  When using the hook method, the variable must be reinitialized.

## Do not use domain knowledge

This is the case when we use the domain on which we create tests to determine
the result of the test. A simple example is a class that has a method for adding two
numbers. The wrong way to test the method is to sum the input parameters in the test
and then expect them as the result (see img. 10). However, the correct way is to
calculate the result ourselves and directly insert it as the expected result (img. 11).

![img.png](./breaking_rule_using_domains_knowledge_example.png)

img. 10 Example of using a domain knowledge [(Khorikov 2020, Ch. 11. Unit testing anti-patterns)](#978-1-61729-627-7)

![img.png](./correct_test_not_using_domains_knowledge_example.png)

img.11 Example of a correct test where domain knowledge is not used [(Khorikov 2020, Ch. 11. Unit testing anti-patterns)](#978-1-61729-627-7)

##  Use relative paths

Tests should never include absolute paths to the resources being used. Resources should be stored in a common place in a shared project and referenced by relative paths [(Koskela 2013, ch. 5.4 Clipping File Path)](#978-1-935182-57-3).

## Keep tests platform independent

There is often conditional logic in the test that differentiates what and how to test depending on the platform used. An example of a bad test that is platform-dependent is shown in Figure 12. As can be seen, the verification methods of the test change depending on the operating system.

![img.png](./platform_dependent_test_example.png)

Figure 12 Example of a platform dependent test [(Koskela 2013, ch. 6.6 Platform prejudice)](#978-1-935182-57-3)

Instead of this approach, it is recommended to split the test into separate tests
and provide a means to run the test independently of the platform. An example is to create a custom class to represent the operating system and then run the test on it (see Figure 13).

![img.png](./test_not_dependent_on_operation_system_example.png)

img. 13 Example of an operating system independent test [(Koskela 2013, ch. 6.6 Platform prejudice)](#978-1-935182-57-3)

## Keep tests independent of the production code

The test code should never be part of the production code. Anyway nor should the production code contain a method that is only called as part of the tests.  If the system behaves differently when it is tested, how can we be sure that it really works. A proper system should allow each part of the system to be isolated and tested
[(Meszaros 2007, Ch. 5. Principles of Test Automation)](#978-0-13-149505-0), [(Bowes et al. 2017)](#978-1-5386-2807-2).

## Create your own data and resources

We should generate sources and data for tests [(Meszaros 2007)](#978-0-13-149505-0). Examples are constants that are part of the code under test and decide the behavior of the system. If we need to work with this constant in tests and verify the correct behavior of the system based on it, we need to recreate it here.

# Isolation

This subsection contains best practices for ensuring the isolation of the test subject
system and ensure appropriate conditions for testing it.

Best practices regarding isolation are as follows:

- Use the right test double

- Do not use test doubles on the system under test

- Do not use the Singleton design pattern

## Use the right test double

There are undeniable advantages to using test doubles. It allows
us to create the ideal conditions for testing certain system. We can
simulate certain behaviors, speed up tests, gain access to hidden
information, make non-deterministic behaviour deterministic, etc. Creating
duplicates allows us to isolate the system under test, reduce the scope to only the behaviour we want to test.

As img. 14 shows, there are a total of 4 types of test doubles. When to use it depends on the context and in general it is impossible to say which
is the best. The [(Koskela 2013)](#978-1-935182-57-3) specifies the basic recommendation when each
types to use (see Table 1).

Table 1 Test doubles and when to use them (by the author according to [(Koskela 2013, Ch. 3. Test doubles)](#978-1-935182-57-3), [(Acharya 2014, Ch. 3. Test doubles)](#978-1-78398-251-6-978-1-78398-250-9))

| Name | Description | When to use |
|-------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mock | Special case of Spy object. It is configured to behave specifically under specific conditions. | When there are interactions between objects in the form of method calls. |
| Spy | Through its application interface, it reveals what has happened in the system under test and makes it easier to test the behavior | If using a mock object makes the test code less readable and understandable. |
| Stub | Used to prevent the execution of functionality that we are not interested in for the test purposes or has not yet been programmed | We are interested in the presence of cooperating objects or supplying data to the systems under test.
| Fake | Simulates behavior of the system under test, but without the side effects and other impacts that its use might cause | We want to run a complex scenario that depends on a service or component that is unavailable or impossible to use for test purposes, and mocking all the interactions would be way to complicated. |

![img.png](./test_double_types.png)

img. 14 Types of test doubles [(Koskela 2013, Ch. 3. Test doubles)](#978-1-935182-57-3)

## Do not use test doubles on the system under test

We should not modify or change the system under test in any way. By doing so, we are modifying its real behavior. This principle is illustrated in img. 15 [(Koskela 2013, Ch. 3. Test doubles)](#978-1-935182-57-3), the code under test should always be real and only other units or systems it interacts with can be represented by doubles.
![test double diagram .png](./test_double_usage_diagram.png)
img. 15 Diagram of the use of doubles on the system under test [(Koskela 2013, Ch. 3. Test doubles)](#978-1-935182-57-3)

## Do not use the Singleton design pattern

Singletons are a big problem for testing. They are a relatively good
design pattern, but when it comes to testing it makes things complicated. The problem that it is basically a global variable that is read-only and
we can not initialize it or affect its internal state. This lead to the following problems:

- We need to make sure that singleton is in a correct state before each test which can be quite difficult. Usually we need to add extra method to the singleton which ensures that stat is reseted and all that purely for testing purposes.

- Each test may require a slightly different configuration, which can lead to very complicated tets.

The solution is to avoid using singletons. The principle of singleton objects is that their state is static and available in a certain context. This context can be a system, a user or session. Instead of creating a singleton, we can take advantage of this principle and use system, user or session object to give us access to objects that would otherwise be sigletons [(Link and Fröhlich 2003, ch. 6.9 Evil Singletons) ](#978-0-08-052017-9-978-1-55860-868-9).
