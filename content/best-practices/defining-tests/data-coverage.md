---
title: "Data coverage"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

This subsection defines best practices regarding the selection of appropriate
data for the test. Appropriate data selection leads to ensuring
sufficient data coverage of the system under test and not omitting important
test scenarios.

Best practices regarding data coverage are as follows:

- Test boundary conditions

- Assert inverse relationships

- Do cross-checking using external means

- Enforce bad conditions

- Use unit tests to measure the performance characteristics of the tested system

- Test equivalence classes

- Test extreme values

- Test the state transitions

- Test using decision tables

# Test boundary conditions

Many errors in code are very often caused by boundary values.
An ordinary *"happy day "* scenario will not encounter such problems. It is therefore recommended to test the boundary conditions of the input data. Book [(Langr et al. 2015, Ch. 6. What to Test: The Right-BICEP)](#978-1-937785-48-2)
defines the acronym **CORRECT** which makes it easy to remember how should we think about boundary conditions for the input data (see Table 4).

Table 4 Description of the subparts of the acronym CORRECT (author and [(Langr et al. 2015, ch. 6. What to Test: The Right-BICEP)](#978-1-937785-48-2)

| Conformance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Data very often has to conform to some format to be valid. For example, it can be an email address, username, file name, phone number, etc. If the data structure is very complex this can lead to an extreme number of combinations to test (With a large number of combinations, the use of parameterized tests such as those offered by JUnit5 can be very helpful. Here it is very easy to create hundreds of tests by writing a few lines of code). The same data can be used by many functionalities in our system. However, it is not necessary to test their correct format everywhere, but to focus only on the places where the data enters the system, here to perform the check and further checking is not needed (Similarly, the data should be checked on the output of functions that change or modify them in some way).                                                                                                                                                                                                                                                                                                                             |
| **Order**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| The correct order of data in a collection is one of the assumptions that can be easily broken in code. So if you are testing a collection where order is important, it is a good idea to create tests that test the order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Range**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| It is important to focus on the allowed range of values for a variable. In many cases, it is very inappropriate to use primitive data types for values with a limited range, as it is very easy to get an error and go outside the allowed range. Examples are age, or angle. This can be avoided by creating a custom data type that does not allow exceeding the allowed range.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Reference**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| When testing a method, it is necessary to consider what it references outside of its scope, what external dependencies it has, whether it depends on the object being in a certain state, and whether any other conditions must be met. For example, to view a user's account, the user must be logged in, etc. We should then create tests to verify that the piece of code under test behaves correctly even if some conditions are not met, because we have concluded that logically they are not needed. But it is advisable to verify such conditions to avoid unpredictable behavior.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Existence**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| It is important to ask whether a thing must always exist. Usually, programmers tend to write only "happy day" tests, but it is also important to think about what input parameters can go into a method. What happens if the input parameter is null, the file does not exist, etc.?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Cardinality**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| The principle deals with frequency or magnitude and the errors we can often get to. These are called fencepost errors or also off-by-one error, which is a type of error where we can get confused due to a fatal condition that we succumb to. When writing tests, we should think about how our code calculates how many occurrences of a particular thing we can have, and what effect it has. Occurrence can be generalized to 3 cases: Zero - we have nothing, a special case of the previous **Existence** rule One - only one occurrence Many - more than one In English, this rule is called the **0-1-n** rule, or also **ZOM (Zero,One,Many).** Here is an example with a list of the top 10 dishes of a restaurant. Every time an order is taken the list should be updated in real time. The cardinality rule is applied in this case to specify the appropriate test cases: report generation if there is no dish in the list report generation if there is only one dish in the list report generation if there are not yet 10 dishes in the list etc...                                                                                                |
| **Time**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| There are 3 things to remember about the time rule: **Relative time** - the correct order of calls in time Some interfaces are state-dependent and expect the user to log in first and then can log out, etc. It's important to think about this and add tests that break the order and expect an error, etc. Similar to the O - ordering rule, where the order of data matters, so does the order of method calls. **Absolute time** - elapsed time, current time Waiting for resource availability can also occur in the context of call order. It is necessary to look for places in the code where it could potentially wait forever. It is also useful to measure elapsed time at certain points, and decide if the wait is too long. The actual time is also very important to check. Depending on the current time, conditions may vary and so some tests may not always work. Don't rely on the libraries we use to have these problems taken care of! **Competition issues** It's important to ask what happens if multiple threads work with this resource at the same time? Is this possible, can this occur? Do global variables need to be synchronized? |

# Assert inverse relationships

In some cases it is possible and of course advisable to test the inverse behaviour
of a given functionality. An example is if we have implemented a mathematical function
to calculate the square of a number. The inverse test would then consist of
calculate the square root of some number and then test that by using the function to calculate
square root to the same number [(Langr et al. 2015, Ch. 6. What to Test: The Right-BICEP)](#978-1-937785-48-2).

# Do cross-checking using external means

This is a similar approach to the previous point, but we use different means
than our own. This may be some external library, or using different
pieces of data from the class under test to see if everything fits together [(Langr et al. 2015, Ch. 6. What to Test: The Right-BICEP)](#978-1-937785-48-2).

# Enforce bad conditions

This principle is about simulating bad conditions that may, in the real world
occur in the real world. For example:

- Lack of memory

- Lack of disk space

- Network availability, etc.

A proper unit test should not only test for logical correct paths, but also
to see how the code behaves under faulty conditions, or if it behaves as
as we expect [(Langr et al. 2015, Ch. 6. What to Test: The Right-BICEP)](#978-1-937785-48-2).

# Use unit tests to measure the performance characteristics of the tested system

It is not appropriate to create complex performance tests that will run for a very long time. They will
interfere with other unit tests that meet the basic principles of unit
and therefore run very fast. Of course performance tests are important and are
needed, but it is better to run them separately from the unit tests. Unit
tests can be helpful in this respect. They can be used to provide
basic information about the performance of a function and this information will then be
used to create performance tests [(Langr et al. 2015, Ch. 6. What to Test: The Right-BICEP)](#978-1-937785-48-2).

# Test equivalence classes

If the system under test accepts values within a certain specified range, it would be
writing a test for each value would be very inefficient and also unnecessary. One method
to avoid this is to specify groups of test values that are equivalent and just create a test for each equivalence group. An example would be a function for calculating an riskness of drivers. There can be three equivalence groups - young (18-24),
middle-aged (24-60) and old (over 60 to 100) and each group represents a different
risk. We only need to write 3 tests for each group and then we can write
two more tests for invalid values i.e. under 18 and over 100 [(Tarlinder 2016, Ch. 8. Specification-based Testing Techniques)](#978-0-13-429106-2).

# Test extreme values

If it is not possible to find certain equivalence groups within the range, the place
recommended to specify test cases for the extreme values of the allowed
range [(Dooley 2017, Ch. 16. Unit Testing)](#978-1-4842-3153-1),[(Tarlinder 2016, Ch. 8. Specification-based Testing Techniques)](#978-0-13-429106-2). The principle is very simple, for example, if we have an allowed range of
**0-100** inclusive, we create tests for values **-1,0,100,101**. This way
we ensure that we can test both positive and negative cases sufficiently without
testing unnecessary cases.

# Test the state transitions

In case there are state transitions in the system under test, it is useful to define
individual test cases based on the state diagram. An example of such a
An example of such a diagram is shown in Figure 16.
of the states and their transitions allows us to easily define the individual test cases.

![img.png](./state_diagram_example.png)

Figure 16 Sample state diagram [(Tarlinder 2016, Ch. 8. Specification-based Testing Techniques)](#978-0-13-429106-2)

# Test using decision tables

In the case when all variants need to be tested and not a single one can be omitted
case, it is recommended to use a decision table. This tool is very
useful for creating parameterized tests. A number of testing frameworks (e.g.
Cucumber, JUnit5 or Spoc) provide support for creating parameterized tests
using decision tables. An example of such decision table is shown in
in Figure 17. The table determines the amount of the premium factor and whether it will
also initialize an fraud investigation, based on the age and gender of the client.

![img.png](./decision_table_premium_factor.png)

Figure 17 Decision tables for premium factor determination and fraud investigation.
[(Tarlinder 2016, Ch. 8. Specification-based Testing Techniques)]](#978-0-13-429106-2)

The table can then be used to define unit tests for testing
auxiliary method that calculates the premium factor (see Figure 18).

Figure 18 Example of the use of a decision table for specifying test cases
(author)

![img.png](./decision_table_usage_example.png)
