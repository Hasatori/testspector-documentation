---
title: "Code coverage"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

This subsection contains best practices for ensuring proper code coverage
by unit tests. It defines which parts should be tested
and how to think when defining test cases.

Best practices for code coverage are as follows:

- Do not define tests for primitive behaviour

- Implement both happy and sad tests

- Do not test abstract systems

- Test only the public behavior of the system under the test

- Test behaviour, not methods of the system under the test

- Make the tests follow the single responsibility principle

# Do not define tests for primitive behaviour

It is generally recommended not to create tests for primitive functionality of the tested
system. Examples are get and set methods, which are a commonly used methods for getting and setting properties [(García 2017, ch. Software testing principles)](#978-1-78712-439-4). Testing such methods is unnecessary because they are immune to error. However, if there is some more complex logic tied to them that could lead to side effects, it is appropriate to write a unit test for these methods as well.

As a general rule, for any non-trivial system we should create
unit tests. The basic question we should ask is "Does the system
inherent logic?" [(Link and Fröhlich 2003, Ch. 3. Basic Steps of the Test-First Approach)](#978-0-08-052017-9-978-1-55860-868-9).

# Implement both happy and sad tests

When creating unit tests for a particular system, we should implement both
happy tests (testing if the system is working correctly) and sad
tests (trying to break the system and test if the how will the system behave and respond) [(García 2017, ch. Software testing principles)](#978-1-78712-439-4). If we did not implement both happy and set tests it can lead to false positive or false negative results of a system under test.

# Do not test abstract systems

Abstract systems should not be tested, since the existence of a concrete instance is required to create them. As described in [(Link and Fröhlich 2003, ch. 7. Inheritance and Polymorphism)](#978-0-08-052017-9-978-1-55860-868-9), one possibility is to create an instance of an abstract system purely for testing purposes. However, this approach does not pay off in most cases, since the abstract system is rarely complex enough to make this approach reasonable. However, it is recommended to break this best practice in case when we are implementing a framework. In this case, it is necessary to test the abstract system even if no concrete instance exists , since users of the framework will create concrete instances.

# Test only the public behaviour of the tested system

It is recommended to always test only the public behaviour
of the system under test, which is expressed through public methods. Private methods are often updated, deleted or added regardless of if public behaviour of a system under test has changed. Private methods are only a helper tool for the public behaviour of the tested system. Testing them leads to dependencies between the code and the tests, and in the long run, it makes it hard to maintain the tests and even the slightest change will require an update to the tests. Books [(Khorikov 2020, Ch. 11. Unit testing anti-patterns) ](#978-1-61729-627-7) and [(Langr et al. 2015, Ch. 9. Bigger Design Issues) ](#978-1-937785-48-2) state, that if private methods contain complex behaviors and it seems thet it makes sense to write a separate test for them, it is a sign that the tested system is probably breaking the Single Responsibility Principle. Such behaviour should therefore be extracted into a separate class and made public.

An exception to this principle is when a private method is part of a
observed behavior of the tested system. For example, if we have a private class constructor, which is part of the ORM library and its initialization should not be allowed. In
this case, the privacy is part of the observed behavior and the constructor should
remain private [(Khorikov 2020, Ch. 11. Unit testing anti-patterns)](#978-1-61729-627-7).

# Test behaviour, not methods of the system under the test

It is important to focus on testing behaviour of a system, not on testing individual methods. When specifying unit tests, it is important to take a holistic view and test the behaviour of the system under test, not its individual methods [(Langr et al. 2015, ch. Testing Behavior Versus Testing Methods)](#978-1-937785-48-2).

# Make the tests follow the single responsibility principle

As in writing production code, where the single responsibility principle is one
of the basic principles, it is recommended to follow this principle also when writing
unit tests. Even just one component under test may include multiple small functionalities or features. It is important to take into account only one of these sub-functionalities or behaviours and create tests just for them. This approach makes tests easier to maintain and it is also easier to detect the root of a problem if some test fails [(Meszaros 2007)](#978-0-13-149505-0).
