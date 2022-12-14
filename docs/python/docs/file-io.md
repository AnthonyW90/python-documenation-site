---
title: File I/O
section: Python
---

# File IO

Often programs will want to read or write data on the hard-drive. The core python library provides several different tools for manipulating files. The built-in functions `open` and `close` use the [io module](https://docs.python.org/3.6/library/io.html). This course doesn't cover working with functions that process binary or raw data, you can read about those [here](https://docs.python.org/3/library/io.html#buffered-streams) and [here](https://docs.python.org/3/library/io.html#io.RawIOBase) if you're curious.


## Relative and Absolute Paths

In case you aren't familiar with how paths on a computer are represented, there are two ways: relative an absolute.

**Relative paths** are followed relative to the file they're found in.

- `file.txt` or `./file.txt` represents the current directory
- `./folder/file.txt` to represent a child directory
- `../file.txt` represents the parent directory
- `../../project/files/data.txt` these can can be used to move up and down, relative to the current file 

**Absolute paths** specify the path with respect to the root of the file system- the drive.

- `C:/users/bob/desktop/project/files/data.txt`


## Opening Files


Python provides access to files via the built-in function `open`, which returns an object representing a file. Check out the official docs on [open](https://docs.python.org/3.6/library/functions.html#open) and the [file](https://docs.python.org/3.6/library/io.html#id1) it returns. Once you have opened the file, you can do things like read from and write to it.

```python
f = open('filename.txt')  # open the file
contents = f.read()  # read the contents
print(contents)
```

Once you've open a file, you'll also have to close it. This clears up your memory, and may (depending on the OS) release a lock which prevents other programs from reading the file.

```python
f = open('filename.txt')  # open the file
contents = f.read()  # read the contents
print(contents)
f.close()  # close the file
```

However, opening a file can throw an exception, which if un-caught could result in a file not being closed.

```python
try:
    f = open('file.txt')
    contents = f.read()
    print(contents)
except (IOError, OSError) as e:
    print(e)
finally:
    f.close()
```

This is rather verbose, so Python provides a `with` statement, which guarantees that the file will be closed, even if an exception is thrown. For more info about `with` look [here](http://effbot.org/zone/python-with-statement.htm).

```python
with open('filename.txt', 'r') as f:
    contents = f.read()
```

## Modes

You call `open` in one of several modes. You can also combine modes by passing a string containing multiple characters (`'rw'` will allow reading and writing). If you do not specify a mode, the default is `'rt'`.

| character | description |
| ---       | ---         |
| 'r'       | open for reading (default) |
| 'w'       | open for writing, truncating (erasing) the file first |
| 'x'       | open the file, failing if the file already exists |
| 'a'       | open for writing, appending if the file already exists |
| 't'       | read and write as text (default) |
| 'b'       | read and write as binary |


## Encoding

You may need to specify the encoding of the text file. The default encoding is system-dependent (which can be checked with ` locale.getpreferredencoding()`). You can read more here: [unicode](https://docs.python.org/3/howto/unicode.html) and [codecs](https://docs.python.org/3/library/codecs.html).

```python
with open('file.txt', encoding='utf-8'):
    ...
```

## Reading

You can read all the text at once:

```python
with open('phonebook.txt', 'r') as phone_book_file:
    contents = phone_book_file.read()
```

You can read the file as a list of strings with `readlines()`. Each string will have a `'\n'` at the end, which may make `file.read().split('\n')` preferable.

```python
with open('phonebook.txt', 'r') as phone_book_file:
    book_lines = phone_book_file.readlines()
    print(book_lines) # ['First line\n', 'Second line\n']
```

You can also iterate over the lines using a `for` loop.

```python
with open('phonebook.txt', 'r') as phone_book_file:
    for line in phone_book_file:
        print(line)
```

## Writing

Opening a file with `'w'` will replace all the text inside of it.
```python
with open('phonebook.txt', 'w') as phone_book_file:
    phone_book_file.write('hello world!')
```

Opening a file with `'a'` (append) will append the text to the end.

```python
with open('phonebook.txt', 'a') as phone_book_file:
    phone_book_file.write('hello world!')
```

If you want to write out a list of lines, you can use `join()`

```python
lines = [...]
with open('phonebook.txt', 'w') as phone_book_file:
    phone_book_file.write('\n'.join(lines))
```


## Examples

Write a phonebook file:

```python
phonebook = {'David': '5551234', 'Alice': '6662345'}
with open('phonebook.txt', 'w') as phone_book_file:
    for name, number in phonebook.items():
        line = f'{name} {number}\n'
        phone_book_file.write(line)
```

Read a phonebook file:

```python
with open('phonebook.txt') as phone_book_file:
    phone_book_data = phone_book_file.read().split('\n')

phone_book = {}
for line in phone_book_data:
    name, number = line.split()
    phone_book[name] = number
```

## Traversing Directories

The [os module](https://docs.python.org/3/library/os.html) contains functions for reading directories and joining paths. The example below will print out all files in the directory, even those in child directories.

```python
import os
folder_path = '...'
for file_name in os.listdir(folder_path):
    if file_name.endswith('.txt'):
        file_path = os.path.join(folder_path, file_name)
        with open(file_path, 'r') as f:
            print(f.read())

```
