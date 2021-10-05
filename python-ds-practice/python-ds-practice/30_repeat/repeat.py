def repeat(phrase, num):
    """Return phrase, repeated num times.
        >>> repeat('*', 3)
        '***'
        >>> repeat('abc', 2)
        'abcabc'
        >>> repeat('abc', 0)
        ''
    Ignore illegal values of num and return None:
        >>> repeat('abc', -1) is None
        True
        >>> repeat('abc', 'nope') is None
        True
    """
    returnstring = ""
    if not isinstance(num, int) or num < 0:
        return None

    if num == 0:
        return ""
    for i in range(0, num):
        returnstring = returnstring + phrase
    return returnstring

print(F"repeat.py: repeat('*', 3) = '***' = {repeat('*', 3)}")
print(F"repeat.py: repeat('abc', 2) = 'abcabc' = {repeat('abc', 2)}")
print(F"repeat.py: repeat('abc', 0) =  = {repeat('abc', 0)}")
print(F"repeat.py: repeat('abc', -1) = None = {repeat('abc', -1)}")
print(F"repeat.py: repeat('abc', 'nope') = None = {repeat('abc', 'nope')}")