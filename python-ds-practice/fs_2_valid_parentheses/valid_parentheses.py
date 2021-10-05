def valid_parentheses(parens):
    """Are the parentheses validly balanced?
        >>> valid_parentheses("()")
        True
        >>> valid_parentheses("()()")
        True
        >>> valid_parentheses("(()())")
        True
        >>> valid_parentheses(")()")
        False
        >>> valid_parentheses("())")
        False
        >>> valid_parentheses("((())")
        False
        >>> valid_parentheses(")()(")
        False
    """

    num_check = 0
    for char in parens:
        if char == "(":
            num_check = num_check + 1
        elif char == ")":
            num_check = num_check - 1
        if num_check < 0: # If num less than zero
            return False  # Return false, because a close parens happened that wasn't opened first
    if num_check > 0: # If num is still greater than 0
        return False  # Then return false, because there's more open parens than close ones
    return True


print(F"valid_parentheses.py: valid_parentheses('()') = True = {valid_parentheses('()')}")
print(F"valid_parentheses.py: valid_parentheses('()()') = True = {valid_parentheses('()()')}")
print(F"valid_parentheses.py: valid_parentheses('(()())') = True = {valid_parentheses('(()())')}")
print(F"valid_parentheses.py: valid_parentheses(')()') = False = {valid_parentheses(')()')}")
print(F"valid_parentheses.py: valid_parentheses('())') = False = {valid_parentheses('())')}")
print(F"valid_parentheses.py: valid_parentheses('((())') = False = {valid_parentheses('((())')}")
print(F"valid_parentheses.py: valid_parentheses(')()(') = False = {valid_parentheses(')()(')}")


