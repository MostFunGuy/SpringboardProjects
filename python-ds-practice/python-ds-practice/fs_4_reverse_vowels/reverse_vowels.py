def reverse_vowels(s):
    """Reverse vowels in a string.
        Characters which re not vowels do not change position in string, but all
        vowels (y is not a vowel), should reverse their order.
    >>> reverse_vowels("Hello!")
        'Holle!'
    >>> reverse_vowels("Tomatoes")
        'Temotaos'
    >>> reverse_vowels("Reverse Vowels In A String")
        'RivArsI Vewols en e Streng'
    >>> reverse_vowels("aeiou")
        'uoiea'
    >>> reverse_vowels("why try, shy fly?")
        'why try, shy fly?'
    """

    sudo_str = F"{s}"
    vowels = "aeiouAEIOU"
    found_vowels = ""
    return_string = ""
    for char in s: # Loop all characters to find and assemble a string of found chars
        if char in vowels:
            found_vowels = found_vowels + char # Assemble a string of all the characters
    
    i = len(found_vowels) # Start the iterable at the top, then minus to go backwards
    for char in s: # Re-loop the string, to apply the backwards vowels
        if char in vowels:
            i = i - 1
            # print(f"Setting '{char}' to '{found_vowels[i]}'") # This validated correctly
            # char = "awd" #found_vowels[i] # Unsure why this didn't work
            return_string = return_string + found_vowels[i] # if there was a vowel, get the reversed character from the assembled string of vowels
        else:
            return_string = return_string + char # No vowel, just append the regular character
    return return_string




print(F"reverse_vowels.py: reverse_vowels('Hello!') = 'Holle!' = {reverse_vowels('Hello!')}")
print(F"reverse_vowels.py: reverse_vowels('Tomatoes') = 'Temotaos' = {reverse_vowels('Tomatoes')}")
print(F"reverse_vowels.py: reverse_vowels('Reverse Vowels In A String') = 'RivArsI Vewols en e Streng' = {reverse_vowels('Reverse Vowels In A String')}")
print(F"reverse_vowels.py: reverse_vowels('aeiou') = 'CCCCC' = {reverse_vowels('uoiea')}")
print(F"reverse_vowels.py: reverse_vowels('why try, shy fly?') = 'why try, shy fly?' = {reverse_vowels('why try, shy fly?')}")
