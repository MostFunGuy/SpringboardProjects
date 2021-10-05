def reverse_string(phrase):
    """Reverse string"""
    return phrase[::-1] # Sometimes I love python

def is_palindrome(phrase):
    """Is phrase a palindrome?
    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True
        >>> is_palindrome('noon')
        True
        >>> is_palindrome('robert')
        False
    Should ignore capitalization/spaces when deciding:
        >>> is_palindrome('taco cat')
        True
        >>> is_palindrome('Noon')
        True
    """
    return phrase.lower().replace(" ", "") == reverse_string(phrase.lower().replace(" ", ""))

print(F"is_palindrome.py: is_palindrome('tacocat') = `True` = `{is_palindrome('tacocat')}`")
print(F"is_palindrome.py: is_palindrome('noon') = `True` = `{is_palindrome('noon')}`")
print(F"is_palindrome.py: is_palindrome('robert') = `False` = `{is_palindrome('robert')}`")
print(F"is_palindrome.py: is_palindrome('taco cat') = `True` = `{is_palindrome('taco cat')}`")
print(F"is_palindrome.py: is_palindrome('Noon') = `True` = `{is_palindrome('tacocat')}`")