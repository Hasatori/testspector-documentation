---
title: "Structure of the test method"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

This subsection contains best practices regarding structure of the test.

Best practices regarding structure of the test method are as follows:

-   3-phase test design

-   4-phase test design

-   Do not repeat the test phases

-   Separate the test phases

# 3-phase test design

It is a simple, but very effective way of structuring test code into three parts. The first part includes creating necessary objects and setting necesarry properties which are required for the test. The second part is about executing action which should invoke tested functionality. The third part then checks expected behaviour. There are many names for this kind of approach for example **Given-When–Then** [(Khorikov 2020, chap. 3. The anatomy of a unit test)](#978-1-61729-627-7), **Build–Operate–Check** [(Tarlinder 2016, chap. 7. Unit Testing-Structuring Tests)](#978-0-13-429106-2) or **Arrange–Act–Assert (AAA)** [(Brader et al. 2012, chap. 2. Unit Testing: Testing the Inside)](#978-1-62114-018-4), but the principle is exactly the same. The first part is usually the longest one and if it is significantly longer than other two parts, it is recommended to extract it into a separate helper method or class  [(Khorikov 2020, chap. 3.1.4. How large should each section be?)](#978-1-61729-627-7). Same approach is recommended for other two parts.

# 4-phase test design

It is basically the 3-phase test design but it has extra 4th phase which is responsible for cleaning the testing environment. The phases are known by names
**Setup-Execute-Verify-Teardown** [(Tarlinder 2016, chap. 7. Unit Testing-Structuring Tests)](#978-0-13-429106-2). This approach is recommended in case when we are sharing certain objects between multiple tests or if we are creating some artifacts (for example files, directories), or if we are updating some data in a database. Without the 4th phase there we would make tests dependent on each other or influence next run of same tests. If used testing framework supports so called hook operations, it is possible to clean the testing environment by operation which is executed after each test or after all tests. Example of these hook operations is available for testing framework JUnit version 5 and are called AfterEach(after each test) or AfterAll(after all tests).

# Do not repeat the test phases

Regardless of if we decide to use 3-phase test design or 4-phase test design, each test should always contains each phase just once. Breaking this rule makes tests way to complicated and hard to understand [(Khorikov 2020, chap. 3.1.2 Avoid multiple arrange, act, and assert sections)](#978-1-61729-627-7).

# Separate the test phases

In order to make test easier to read it is recommended to separate each phase. For small tests the separation can be done by empty line. For big tests it is better to use comments [(Khorikov 2020, chap. 3.1.8 Dropping the arrange, act, and assert comments from tests)](#978-1-61729-627-7).
Img.3 shows what the separation by empty line looks like.

![alt text](./test_part_separation_for_better_readability.png "Title")

img. 3 Separation of the tests parts by empty line [(Khorikov 2020)](#978-1-61729-627-7)
