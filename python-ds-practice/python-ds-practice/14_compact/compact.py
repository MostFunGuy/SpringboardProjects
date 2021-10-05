def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """

    return_list = []

    for item in lst:
        if item:
            return_list.append(item)
    
    return return_list

    
print(F"compact.py: compact([0, 1, 2, '', [], False, (), None, 'All done']) = [1, 2, 'All done'] = {compact([0, 1, 2, '', [], False, (), None, 'All done'])}")