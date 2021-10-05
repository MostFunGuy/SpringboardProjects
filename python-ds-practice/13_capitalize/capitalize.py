def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """



    return phrase.title()




print(F"capitalize.py: capitalize('python') = `Python` = {capitalize('python')}")
print(F"capitalize.py: capitalize('only first word') = `Only first word` = {capitalize('only first word')}")