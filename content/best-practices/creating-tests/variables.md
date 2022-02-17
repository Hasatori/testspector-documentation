---
title: "Variables"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

This section describes best practices regarding working with variables.

Best practices regarding variables are as follows:

-   Replace fixed values with constants

-   Do not use magic numbers

# Replace fixed values with constants

Instead of using fixed or direct values it is recommended to use constants.

Namísto pevných, nebo přímých hodnot, je doporučováno používat konstanty. This contributes to better readability, easier understanding and it also prevents duplications that would be repeated between tests  (see img. 4)

![alt text](./use_constant_instead_value_example.png "Title")

img. 4 Example of using constants instead of fixed values [(Link a Fröhlich 2003, chap. 4. Test Ideas and Heuristics)](#978-0-08-052017-9-978-1-55860-868-9)

# Do not use magic numbers

Instead of using the so-called magic numbers, ie specific values, it is better to replace numbers with constants
or variables. Appropriately named constant or variable gives the number a meaning and ensures easier readability of the code. Another way is to use an auxiliary method, which we pass as a parameter number and the method by its name gives the number meaning. This approach is advantageous if the values of the numbers for each test change (see img.5).

![alt text](./use_help_method_instead_of_magic_number_example.png "Title")

img. 5 Example of using an auxiliary method instead of magic numbers [(Koskela 2013, chap. 4.7 Magic Numbers)](#978-1-935182-57-3)
