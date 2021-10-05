def list_manipulation(lst, command, location, value=None):
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

    remove: remove item at beginning or end, and return item removed

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'remove', 'end')
        3

        >>> list_manipulation(lst, 'remove', 'beginning')
        1

        >>> lst
        [2]

    add: add item at beginning/end, and return list

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'add', 'beginning', 20)
        [20, 1, 2, 3]

        >>> list_manipulation(lst, 'add', 'end', 30)
        [20, 1, 2, 3, 30]

        >>> lst
        [20, 1, 2, 3, 30]

    Invalid commands or locations should return None:

        >>> list_manipulation(lst, 'foo', 'end') is None
        True

        >>> list_manipulation(lst, 'add', 'dunno') is None
        True
    """
    
    if command != "remove" and command != "add":
        return "None1"
    if location != "beginning" and location != "end":
        return "None2"
    
    # Should be valid from here on
    
    
    if command == "remove":
        if location == "beginning":
            print("0")
            return lst.pop(0)
        print("1")
        return lst.pop(-1)
    if command == "add":
        if location == "beginning":
            print("3")
            lst.insert(0, value)
            return lst
        print("4")
        lst.append(value)
        return lst
    print("WTF")


lst = [1, 2, 3]

print(F"list_manipulation.py: list_manipulation(lst, 'remove', 'end') = `3` = `{list_manipulation(lst, 'remove', 'end')}`")
print(F"list_manipulation.py: list_manipulation(lst, 'remove', 'beginning') = `1` = `{list_manipulation(lst, 'remove', 'beginning')}`")
print(F"list_manipulation.py: lst = `[2]` = `{lst}`")


lst = [1, 2, 3]

print(F"list_manipulation.py: list_manipulation(lst, 'add', 'beginning', 20) = `[20, 1, 2, 3]` = `{list_manipulation(lst, 'add', 'beginning', 20)}`")
print(F"list_manipulation.py: list_manipulation(lst, 'add', 'end', 30) = `[20, 1, 2, 3, 30]` = `{list_manipulation(lst, 'add', 'end', 30)}`")
print(F"list_manipulation.py: lst = `[20, 1, 2, 3, 30]` = `{lst}`")


print(F"list_manipulation.py: list_manipulation(lst, 'foo', 'end') = `None` = `{list_manipulation(lst, 'foo', 'end')}`")
print(F"list_manipulation.py: list_manipulation(lst, 'add', 'dunno') = `None` = `{list_manipulation(lst, 'add', 'dunno')}`")


