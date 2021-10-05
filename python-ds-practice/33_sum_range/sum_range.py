def sum_range(nums, start=0, end=None):
    """Return sum of numbers from start...end.
            - start: where to start (if not provided, start at list start)
            - end: where to stop (include this index) (if not provided, go through end)
        >>> nums = [1, 2, 3, 4]
        >>> sum_range(nums)
        10
        >>> sum_range(nums, 1)
        9
        >>> sum_range(nums, end=2)
        6
        >>> sum_range(nums, 1, 3)
        9
    If end is after end of list, just go to end of list:
        >>> sum_range(nums, 1, 99)
        9
    """
    
    return_num = 0
    i = -1
    for num in nums:
        i = i + 1
        if (i >= start) and (end == None or i <= end):
            return_num = return_num + num
    return return_num

nums = [1, 2, 3, 4]
print(F"sum_range.py: sum_range(nums) = 10 = {sum_range(nums)}")
print(F"sum_range.py: sum_range(nums, 1) = 9 = {sum_range(nums, 1)}")
print(F"sum_range.py: sum_range(nums, end=2) = 6 = {sum_range(nums, end=2)}")
print(F"sum_range.py: sum_range(nums, 1, 3) = 9 = {sum_range(nums, 1, 3)}")
print(F"sum_range.py: sum_range(nums, 1, 99) = 9 = {sum_range(nums, 1, 99)}")