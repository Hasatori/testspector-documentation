---
title: "Speed"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

High speed is one of the basic qualities that unit tests should have. Based on the "Agile testing pyramid" unit tests are created first and they are the most numerous type of test. Therefore it is very important to make sure each unit test will be very fast and should avoid executing any actions that might prolongate its run.

The Best Practices regarding speed are as follows:

-   Using in-memory resources and mocking

-   Avoid actions that are blocking the main thread

# Using in-memory resources and mocking

In case we are working with a database, need to call HTTP requests, execute soap operations, read data from files, etc., it is important to run such actions in memory and avoid actions that slow things down [(Acharya 2014, chap. Configuring tests)](#978-1-78398-251-6-978-1-78398-250-9). For example, you can use an in-memory database instead of a typical one. The in-memory database system does not work with actual files but it keeps everything in memory. Operations like reading or writing are much faster. Similarly, mocking can be used. The principle is exactly the same so actions which in the real system take a very long time will be much faster and due to that test itself will take less time to finish.

# Avoid actions that are blocking the main thread

This is mostly connected to cases when we are waiting for actions to finish in separate threads and therefore we are putting the main thread to sleep. This approach is not efficient because actions on side threads might take different time to finish each time. Therefore it is recommended to ensure that we will directly wait till actions on separate threads will finish and then we can continue in the main thread. By using this approach we will ensure that the main thread is going to wait the least time possible.
