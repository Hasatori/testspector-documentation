---
title: "Isolation"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

This subsection contains best practices for ensuring the isolation of the test subject
system and ensure appropriate conditions for testing it.

Best practices regarding isolation are as follows:

- Use the right test double

- Do not use test doubles on the system under test

- Do not use the Singleton design pattern

# Use the right test double

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

# Do not use test doubles on the system under test

We should not modify or change the system under test in any way. By doing so, we are modifying its real behavior. This principle is illustrated in img. 15 [(Koskela 2013, Ch. 3. Test doubles)](#978-1-935182-57-3), the code under test should always be real and only other units or systems it interacts with can be represented by doubles.
![test double diagram .png](./test_double_usage_diagram.png)
img. 15 Diagram of the use of doubles on the system under test [(Koskela 2013, Ch. 3. Test doubles)](#978-1-935182-57-3)

# Do not use the Singleton design pattern

Singletons are a big problem for testing. They are a relatively good
design pattern, but when it comes to testing it makes things complicated. The problem that it is basically a global variable that is read-only and
we can not initialize it or affect its internal state. This lead to the following problems:

- We need to make sure that singleton is in a correct state before each test which can be quite difficult. Usually we need to add extra method to the singleton which ensures that stat is reseted and all that purely for testing purposes.

- Each test may require a slightly different configuration, which can lead to very complicated tets.

The solution is to avoid using singletons. The principle of singleton objects is that their state is static and available in a certain context. This context can be a system, a user or session. Instead of creating a singleton, we can take advantage of this principle and use system, user or session object to give us access to objects that would otherwise be sigletons [(Link and Fröhlich 2003, ch. 6.9 Evil Singletons) ](#978-0-08-052017-9-978-1-55860-868-9).
