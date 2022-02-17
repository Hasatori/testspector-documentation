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

# Setup a test naming strategy

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

# Maintain consistent test naming

Whichever test naming strategy you choose, you must stick to it and name all tests in a consistent way. If each test is named in a different, albeit correct, way, it will be much more difficult for its reader to understand what is being tested and the tests as a whole [(Tarlinder 2016, Ch. 7. Unit Testing)](#978-0-13-429106-2).

# Use one naming strategy for the concept

It is generally recommended to use only one naming style for a concept. It is very confusing to use the prefix "create" for a helper method that creates an object in one test and use the prefix "build" for a helper method that does exacltly same thing. This will then make a person reading a method wonder if the method with the "create" prefix is any different from the method with the "build" prefix. They will then have to explore a method and spend will more time with writing tests [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4).

# Use "known solution" names

This recommendation is closely linked to the previous one. For concepts that are generally known and are formed in the same way we should use common names [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4). An example of this is if we use the Builder design pattern. Instead of the standard naming style "NameObjectBuilder", we would end it with the suffix creator, or other equivalent. Again, this is a confusing name that requires to navigate through the implementation and makes it difficult to create or read tests.

# Use appropriate names for test classes

It is recommended to end the name of the test class with the suffix "Test". This way clearly indicates which classes are test classes and also plays a role in many cases for the tools that run the tests.

# Use pronounceable and searchable names

Whether it is a method, class, or variable, in general names that are easy to pronounce and find should be used [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4). It makes it easier for people working with tests to communicate because name are easier to memorize and search.

# Prevent misinformation

The name of the method or variable should not be confusing and should express what is it actually represents [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4). An example would be a variable named *activationDate*, which is actually of type long and represents a date in milliseconds. In this case, the name is misleading and a more appropriate name would be variable *activationDateMilis*

# Use sufficiently distinct names

We should always use different names for different concepts. Examples are two parameters representing the source and target, named *a1* and *a2*. Such naming is completely inappropriate because they can very easily be confused. If the names were *source* and *destination,* it would be much more difficult to confused them [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4).

Information noise in names is also related to this issue. For example, if we create two classes *ProductInfo* and *ProductData*. *Data* and *Info* means actually the same thing, but they are two separate classes [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4).

#  Omit redundant name parts

Names should not include redundant information that does not add any value and only lengthens the name. Those are information that are quite obvious from the context of use and thus need not be included [(Martin 2009, ch. 2. Meaningful Names)](#978-0-13-235088-4). An example are words like *variable*, *constant* or *property* in variable name or words *method or function* in method names or *class* in name of a class.

# Use intent revealing names

This best practice is closely related to the aforementioned rules of *Use pronounceable and searchable* names, *Avoid misinformation*, and states that method or variable names should always communicate intent and make it clear for which purpose they were created [(Martin 2009, Ch. 2. Meaningful Names)](#978-0-13-235088-4).  An example might be when we create a variable representing yesterday's date. A bad name would be if we named it, for example, "date". Conversely, a name that communicates the intent would be "yesterday".
