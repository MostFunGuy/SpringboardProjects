def intersection(l1, l2):
    """Return intersection of two lists as a new list::
    
        >>> intersection([1, 2, 3], [2, 3, 4])
        [2, 3]
        
        >>> intersection([1, 2, 3], [1, 2, 3, 4])
        [1, 2, 3]
        
        >>> intersection([1, 2, 3], [3, 4])
        [3]
        
        >>> intersection([1, 2, 3], [4, 5, 6])
        []
    """

    #return set(l1) & set(l2) #Close, but no cigar
    #set(l1).intersection(l2) #Unsure why this didn't work, but returned nothing?

    return [x for x in l1 if x in l2] #Love it




print(F"intersection.py: intersection([1, 2, 3], [2, 3, 4]) = [2, 3] = {intersection([1, 2, 3], [2, 3, 4])}")
print(F"intersection.py: intersection([1, 2, 3], [1, 2, 3, 4]) = [1, 2, 3] = {intersection([1, 2, 3], [1, 2, 3, 4])}")
print(F"intersection.py: intersection([1, 2, 3], [3, 4]) = [3] = {intersection([1, 2, 3], [3, 4])}")
print(F"intersection.py: intersection([1, 2, 3], [4, 5, 6]) = [] = {intersection([1, 2, 3], [4, 5, 6])}")