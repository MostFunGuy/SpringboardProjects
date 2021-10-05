def two_list_dictionary(keys, values):
    """Given keys and values, make dictionary of those.
    
        >>> two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        {'x': 9, 'y': 8, 'z': 7}
        
    If there are fewer values than keys, remaining keys should have value
    of None:
    
        >>> two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
        {'a': 1, 'b': 2, 'c': 3, 'd': None}
    
    If there are fewer keys, ignore remaining values:

        >>> two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        {'a': 1, 'b': 2, 'c': 3}
   """

    return_dict = {}
    i = -1
    for key in keys:
        i += 1
        if i > len(values) - 1:
            return_dict[key] = None
        else:
            return_dict[key] = values[i]
    return return_dict

print(F"two_list_dictionary.py: two_list_dictionary(['x', 'y', 'z'], [9, 8, 7]) = 'x': 9, 'y': 8, 'z': 7 = {two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])}")
print(F"two_list_dictionary.py: two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3]) = 'a': 1, 'b': 2, 'c': 3, 'd': None = {two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])}")
print(F"two_list_dictionary.py: two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4]) = 'a': 1, 'b': 2, 'c': 3 = {two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])}")