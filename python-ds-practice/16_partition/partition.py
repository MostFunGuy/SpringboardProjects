def partition(lst, fn):
    """Partition lst by predicate.
     - lst: list of items
     - fn: function that returns True or False
     Returns new list: [a, b], where `a` are items that passed fn test,
     and `b` are items that failed fn test.

        >>> def is_even(num):
        ...     return num % 2 == 0
        >>> def is_string(el):
        ...     return isinstance(el, str)
        >>> partition([1, 2, 3, 4], is_even)
        [[2, 4], [1, 3]]
        >>> partition(["hi", None, 6, "bye"], is_string)
        [['hi', 'bye'], [None, 6]]
    """
    a = []
    b = []
    for loop_element in lst: # Loop everything in the list
        if fn(loop_element): # If it matches the second parameter, put it in the A lst
            a.append(loop_element)
        else:
            b.append(loop_element)
    return [a, b]

def is_even(num):
    return num % 2 == 0
def is_string(el):
    return isinstance(el, str)

    
print(F"partition.py: partition([1, 2, 3, 4], is_even) = `[[2, 4], [1, 3]]` = {partition([1, 2, 3, 4], is_even)}")
#print(F"partition.py: partition(['hi', None, 6, 'bye'], is_string) = `[['hi', 'bye'], [None, 6]]` = {partition(["hi", None, 6, "bye"], is_string)}")

# No idea why the second check wouldn't format