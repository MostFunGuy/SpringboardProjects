def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    vowels = "AEIOUaeiou"
    return_map = {}
    for v in vowels:
        if phrase.count(v) > 0:
            return_map[F"{v}"] = phrase.count(v)

    return return_map

    
#print(F"vowel_count.py: vowel_count(XXXXXXXXX) = XXXXXXXXX = {vowel_count(XXXXXXXXX)}")
print(F"vowel_count.py: vowel_count('rithm school') = 'i': 1, 'o': 2 = {vowel_count('rithm school')}")
print(F"vowel_count.py: vowel_count('HOW ARE YOU? i am great!') = 'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1 = {vowel_count('HOW ARE YOU? i am great!')}")