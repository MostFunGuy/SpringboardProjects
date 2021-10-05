def friend_date(a, b):
    """Given two friends, do they have any hobbies in common?
    - a: friend #1, a tuple of (name, age, list-of-hobbies)
    - b: same, for friend #2
    Returns True if they have any hobbies in common, False is not.
        >>> elmo = ('Elmo', 5, ['hugging', 'being nice'])
        >>> sauron = ('Sauron', 5000, ['killing hobbits', 'chess'])
        >>> gandalf = ('Gandalf', 10000, ['waving wands', 'chess'])
        >>> friend_date(elmo, sauron)
        False
        >>> friend_date(sauron, gandalf)
        True
    """
    #return f"{a[0]} / {a[1]} / {a[2]}"
            # Sauron / 5000   / ['killing hobbits', 'chess']
    returncheck = [x for x in a[2] if x in b[2]]
    if len(returncheck) > 0:
        return True
    return False

elmo = ('Elmo', 5, ['hugging', 'being nice'])
sauron = ('Sauron', 5000, ['killing hobbits', 'chess'])
gandalf = ('Gandalf', 10000, ['waving wands', 'chess'])
    
print(F"friend_date.py: friend_date(elmo, sauron) = False = {friend_date(elmo, sauron)}")
print(F"friend_date.py: friend_date(sauron, gandalf) = True = {friend_date(sauron, gandalf)}")