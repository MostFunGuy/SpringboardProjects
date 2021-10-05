def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    """

    return word.count(letter)

def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """

    # Get the unique characters from the string
    unique_letters = set(phrase)
    # Instantiate the dictionary we'll add values to
    return_dict = dict()

    # Loop the unique characters
    for char in unique_letters:
        # Count their occurances and record them into the dictionary
        return_dict[char] = single_letter_count(phrase, char)

    return return_dict


    
print(F"multiple_letter_count.py: multiple_letter_count('yay') = 'y': 2, 'a': 1' = `{multiple_letter_count('yay')}`")
print(F"multiple_letter_count.py: multiple_letter_count('Yay') = 'Y': 1, 'a': 1, 'y': 1 = `{multiple_letter_count('yay')}`")