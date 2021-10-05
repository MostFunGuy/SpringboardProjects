def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.
        Sum of TL-to-BR diagonal along with BL-to-TR diagonal:
            >>> m1 = [
            ...     [1,   2],
            ...     [30, 40],
            ... ]
            >>> sum_up_diagonals(m1)
                73
            >>> m2 = [
            ...    [1, 2, 3],
            ...    [4, 5, 6],
            ...    [7, 8, 9],
            ... ]
            >>> sum_up_diagonals(m2)
                30
    """
    return_num = 0
    # top left to bottom right diagonal
    for i in range(0, len(matrix[0])):
        return_num = return_num + matrix[i][i]
    
    # bottom left to top right diagonal
    for i in range(0, len(matrix[0])):
        v = len(matrix[0]) - 1 - i
        return_num = return_num + matrix[v][i]
    return return_num

m1 = [
    [1,   2],
    [30, 40],
    ]

m2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ]


print(F"sum_up_diagonals.py: sum_up_diagonals(m1) = 73 = {sum_up_diagonals(m1)}")
print(F"sum_up_diagonals.py: sum_up_diagonals(m2) = 30 = {sum_up_diagonals(m2)}")