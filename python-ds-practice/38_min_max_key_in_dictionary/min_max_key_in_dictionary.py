def min_max_keys(d):
    """Return tuple (min-keys, max-keys) in d.

        >>> min_max_keys({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'})
        (1, 10)

    Works with any kind of key that can be compared, like strings:

        >>> min_max_keys({"apple": "red", "cherry": "red", "berry": "blue"})
        ('apple', 'cherry')
    """

    # 90% sure I'm missing something, this was way easier than previous assignments near it
    d_keys = d.keys()
    return (min(d_keys), max(d_keys))




print(F"min_max_keys.py: min_max_keys(2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e') = (1, 10) = {min_max_keys({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'})}")
print(F"min_max_keys.py: min_max_keys('apple': 'red', 'cherry': 'red', 'berry': 'blue') = ('apple', 'cherry') = {min_max_keys({'apple': 'red', 'cherry': 'red', 'berry': 'blue'})}")