import string

# +1 was added because this apparently is zero based, but the requirements ask it to not be
def char_position(letter):
    return ord(letter) - 97 + 1

def is_odd_string(word):
    """Is the sum of the character-positions odd?
        Word is a simple word of uppercase/lowercase letters without punctuation.
        For each character, find it's "character position" ("a"=1, "b"=2, etc).
        Return True/False, depending on whether sum of those numbers is odd.
    For example, these sum to 1, which is odd:
        >>> is_odd_string('a')
        True
        >>> is_odd_string('A')
        True
    These sum to 4, which is not odd:
        >>> is_odd_string('aaaa')
        False
        >>> is_odd_string('AAaa')
        False
    Longer example:
        >>> is_odd_string('amazing')
        True
    """
    # Hint: you may find the ord() function useful here

    sum = 0
    for char in word:
        #print(F"{char}:{char_position(char.lower())}")
        sum = sum + char_position(char.lower())
    return sum % 2 != 0

print(F"is_odd_string.py: is_odd_string('a') = True = {is_odd_string('a')}")
print(F"is_odd_string.py: is_odd_string('A') = True = {is_odd_string('A')}")
print(F"is_odd_string.py: is_odd_string('aaaa') = False = {is_odd_string('aaaa')}")
print(F"is_odd_string.py: is_odd_string('AAaa') = False = {is_odd_string('AAaa')}")
print(F"is_odd_string.py: is_odd_string('amazing') = True = {is_odd_string('amazing')}")