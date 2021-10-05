def find_the_duplicate(nums):
    """Find duplicate number in nums.
        Given a list of nums with, at most, one duplicate, return the duplicate.
        If there is no duplicate, return None
            >>> find_the_duplicate([1, 2, 1, 4, 3, 12])
            1
            >>> find_the_duplicate([6, 1, 9, 5, 3, 4, 9])
            9
            >>> find_the_duplicate([2, 1, 3, 4]) is None
            True
    """

    # import collections
    # print([item for item, count in collections.Counter(nums).items() if count > 1])

    # from iteration_utilities import duplicates
    # return list(duplicates(nums))
    # Couldn't get the above to work, trying again


    # unique_nums = list(set(nums))
    # print(nums)
    # print(unique_nums)

    # return [item for item in unique_nums if item not in nums]
    # return list(set(nums) - set(unique_nums))
    # Couldn't get the above to work, trying again

    dupli_validator = []

    for num in nums:
        if num not in dupli_validator:
            dupli_validator.append(num)
        else:
            return num
    return None



print(F"find_the_duplicate.py: find_the_duplicate([1, 2, 1, 4, 3, 12]) = 1 = {find_the_duplicate([1, 2, 1, 4, 3, 12])}")
print(F"find_the_duplicate.py: find_the_duplicate([6, 1, 9, 5, 3, 4, 9]) = 9 = {find_the_duplicate([6, 1, 9, 5, 3, 4, 9])}")
print(F"find_the_duplicate.py: find_the_duplicate([2, 1, 3, 4]) = None = {find_the_duplicate([2, 1, 3, 4])}")