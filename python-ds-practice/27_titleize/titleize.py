def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """

    return phrase.title()

print(F"titleize.py: titleize('this is awesome') = 'This Is Awesome' = {titleize('this is awesome')}")
print(F"titleize.py: titleize('oNLy cAPITALIZe fIRSt') = 'Only Capitalize First' = {titleize('oNLy cAPITALIZe fIRSt')}")