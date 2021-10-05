def multiply_even_numbers(nums):
    """Multiply the even numbers.
    
        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48
        
        >>> multiply_even_numbers([3, 4, 5])
        4
        
    If there are no even numbers, return 1.
    
        >>> multiply_even_numbers([1, 3, 5])
        1
    """
    #First, make a second list to hold only even numbers
    evens = []
    return_number = 1
    for num in nums: # loop all the numbers
        if num % 2 == 0:
            evens.append(num)
    #return evens # Validated good

    for num in evens:
        return_number = return_number * num

    return return_number

    

    

print(F"multiply_even_numbers.py: multiply_even_numbers([2, 3, 4, 5, 6]) = `48` = {multiply_even_numbers([2, 3, 4, 5, 6])}")
print(F"multiply_even_numbers.py: multiply_even_numbers([3, 4, 5]) = `4` = {multiply_even_numbers([3, 4, 5])}")
print(F"multiply_even_numbers.py: multiply_even_numbers([1, 3, 5]) = `1` = {multiply_even_numbers([1, 3, 5])}")