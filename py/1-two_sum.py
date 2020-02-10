# // Given an array of integers, return indices of the two numbers such that they add up to a specific target.
# // You may assume that each input would have exactly one solution, and you may not use the same element twice.
# // Example:
# // Given nums = [2, 7, 11, 15], target = 9,
# // return [0, 1].
# BRUTE FORCE
# double for loop

# Brute Force O(n^2)


def two_sum(nums, target):
    i = 0
    j = i + 1
    for i in range(len(nums)):
        for j in range(len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]

# Optimized O(n)


def two_sums(list, target):
    map = {}
    for i in range(len(list)):
        missing_pair = target - list[i]
        if missing_pair in map.keys():  # Checks if the missing pair was added into map
            return [i, map[missing_pair]]
        else:
            map[list[i]] = i  # Adds num : index into map


two_sum([2, 11, 7, 15], 9)
