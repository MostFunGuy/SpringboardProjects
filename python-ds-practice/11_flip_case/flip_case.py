def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.
        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'
        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'
        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'
    """
    
    return_str = ""

    for loop_letter in phrase: #loop all the letters
        if loop_letter.lower() == to_swap.lower(): #If the loop letter is the same as the second parameter
            return_str += loop_letter.swapcase() # Then add the swapped case version
        else:
            return_str += loop_letter # Otherwise, add the regular character
    return return_str


print(F"flip_case.py: flip_case('Aaaahhh', 'a') = `aAAAhhh` = {flip_case('Aaaahhh', 'a')}")
print(F"flip_case.py: flip_case('Aaaahhh', 'A') = `aAAAhhh` = {flip_case('Aaaahhh', 'A')}")
print(F"flip_case.py: flip_case('Aaaahhh', 'h') = `AaaaHHH` = {flip_case('Aaaahhh', 'h')}")