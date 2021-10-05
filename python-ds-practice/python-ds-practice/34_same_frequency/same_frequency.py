def frenquency_builder(item):
    freq = {}
    item = str(item)
    for x in item:
        freq[x] = freq.get(x, 0) + 1
        #counts[x] = counts.get(x, 0) + 1
    return freq

def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
        >>> same_frequency(551122, 221515)
        True
        >>> same_frequency(321142, 3212215)
        False
        >>> same_frequency(1212, 2211)
        True
    """
    return frenquency_builder(num1) == frenquency_builder(num2)

print(F"same_frequency.py: same_frequency(551122, 221515) = True = {same_frequency(551122, 221515)}")
print(F"same_frequency.py: same_frequency(321142, 3212215) = False = {same_frequency(321142, 3212215)}")
print(F"same_frequency.py: same_frequency(1212, 2211) = True = {same_frequency(1212, 2211)}")