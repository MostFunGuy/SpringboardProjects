def find_greater_numbers(nums):
    """Return # of times a number is followed by a greater number.
        For example, for [1, 2, 3], the answer is 3:
            - the 1 is followed by the 2 *and* the 3
            - the 2 is followed by the 3
        Examples:
            >>> find_greater_numbers([1, 2, 3])
            3
            >>> find_greater_numbers([6, 1, 2, 7])
            4
            >>> find_greater_numbers([5, 4, 3, 2, 1])
            0
            >>> find_greater_numbers([])
            0
    """

    if len(nums) == 0:
        return 0
    # valid inputs from here
    count = 0
    # Iterate over the list
    for i in range(len(nums)):
        # Iterate over the numbers after the iterated number
        for ii in range(i + 1, len(nums)):
            # if the following number is larger than the original iterated number,
            if nums[ii] > nums[i]:
                # increment the counter
                count += 1

    return count

print(F"find_greater_numbers.py: find_greater_numbers([1, 2, 3]) = 3 = {find_greater_numbers([1, 2, 3])}")
print(F"find_greater_numbers.py: find_greater_numbers([6, 1, 2, 7]) = 4 = {find_greater_numbers([6, 1, 2, 7])}")
print(F"find_greater_numbers.py: find_greater_numbers([5, 4, 3, 2, 1]) = 0 = {find_greater_numbers([5, 4, 3, 2, 1])}")
print(F"find_greater_numbers.py: find_greater_numbers([]) = 0 = {find_greater_numbers([])}")



    