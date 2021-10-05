def extract_full_names(people):
    """Return list of names, extracting from first+last keys in people dicts.
    - people: list of dictionaries, each with 'first' and 'last' keys for
              first and last names

    Returns list of space-separated first and last names.

        >>> names = [
        ...     {'first': 'Ada', 'last': 'Lovelace'},
        ...     {'first': 'Grace', 'last': 'Hopper'},
        ... ]

        >>> extract_full_names(names)
        ['Ada Lovelace', 'Grace Hopper']
    """

    return_list = []
    # return [f"{x[0]} {x[1]}" for x in people] # Ugh its so good. Why did I not learn python earlier
    for person in people:
        first = person["first"]
        last = person["last"]
        return_list.append(f"{first} {last}")
    return return_list



names = [{'first': 'Ada', 'last': 'Lovelace'},{'first': 'Grace', 'last': 'Hopper'}]

print(F"extract_full_names.py: extract_full_names(names) = ['Ada Lovelace', 'Grace Hopper'] = {extract_full_names(names)}")