---
title: Numbers and Arithmetic
section: Python
---

# Numbers and Arithmetic


## Ints

'Ints' represent integers, or 'whole numbers', and they can be positive or negative.

```python
x = 5
print(x) # 5
print(type(x)) # <class 'int'>
```

## Floats

'Float' is stort for 'floating-point number', which represents an approximation of a real number. Floats may also be written with an exponent, designated by `e`: `3.12e6` is 3,120,000.

```python
x = 5.23
print(x) # 5.23
print(type(x)) # <class 'float'>
```

There are also three special values floats may take: positive infinity, negative infinity, and NaN. NaN is short for 'not a number', it's the result of some mathematical operations, particularly in `numpy`. You can check for these values with the [math module](#the-math-module).

```python
import math

x = float('nan')
print(math.isnan(x)) # True

y = float('inf')
print(math.isinf(y)) # True

z = float('-inf')
print(math.isinf(z)) # True
print(math.isfinite(z)) # False
```


## Arithmetic Operators


### Addition: `a + b`, `a += b`

```python
print(5 + 2) # 7
```

### Subtraction: `a - b`, `a -= b`

```python
print(5 - 2) # 3
```

### Multiplication: `a * b`, `a *= b`

```python
print(5 * 2) # 10
```

### Division: `a / b`, `a /= b`

```python
print(5 / 2) # 2.5
```

### Floor Division: `a // b`, `a //= b`

Floor division is like regular division, but the result is rounded down to the nearest integer.

```python
print(5 // 2) # 2
```

### Modulus: `a % b`, `a %= b`

Modulus is the 'remainder function' for example, `a%b` is the remainder of `a/b`.

```python
print(5 % 2) # 1
print(99 % 3) # 0
```

Modulus also useful for containing the range of a variable.

```python
i = 0
while i < 100:
    print(i%3, end=' ')
    i = i + 1
```
> 0 1 2 0 1 2 0 1 2 ...


### Exponentiation: `a ** b`, `a **= b`

```python
print(5 ** 2) # 25
```

## Built-in Functions

### Type Conversions

```python
# convert a string to an int
print(int('5')) # 5
# convert a float to an int
print(int(5.23)) # 5
# convert a 
print(float('5.0')) # 5.0
```

### Absolute Value `abs(x)`

```python
print(abs(5)) # 5
print(abs(-2)) # 2
```


### Round `round(x)`

```python
print(round(5.2)) # 5
print(round(2.6)) # 3
```

### Minimum `min(x)`

```python
print(min(5, 2)) # 2
```

### Maximum `max(x)`

```python
print(max(5, 2)) # 5
```

### Sum `sum(x)`

```python
print(sum(5, 2, 3)) # 10
```


## The Math Module

The `math` module has many specialized math functions you can utilize, a full list of them can be found [here](https://docs.python.org/3/library/math.html).

### Floor `math.floor(x)`

```python
import math
print(math.floor(5.5)) # 5
```

### Ceiling `math.ceil(x)`

```python
import math
print(math.ceil(5.5)) # 6
```

### Square-root `math.sqrt(x)`

```python
import math
print(math.floor(9)) # 3
```

### Pi `math.pi`

```python
import math
print(math.pi) # 3.1415963...
```


### Cosine `math.cos(x)`

```python
import math
print(math.cos(math.pi/2)) # 0
```

### Sine `math.sin(x)`

```python
import math
print(math.sin(math.pi/2)) # 1
```


