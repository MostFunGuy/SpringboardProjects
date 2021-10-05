def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """

    return phrase[::-1]


print(F"reverse_string.py: reverse_string('awesome') = `emosewa` = `{reverse_string('awesome')}`")
print(F"reverse_string.py: reverse_string('sauce') = `ecuas` = `{reverse_string('sauce')}`")