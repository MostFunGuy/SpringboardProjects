def weekday_name(day_of_week):
    """Return name of weekday.
    
        >>> weekday_name(1)
        'Sunday'
        
        >>> weekday_name(7)
        'Saturday'
        
    For days not between 1 and 7, return None
    
        >>> weekday_name(9)
        >>> weekday_name(0)
    """
    if day_of_week == 1:
        return "Sunday"
    elif day_of_week == 2:
        return "Monday"
    elif day_of_week == 3:
        return "Tuesday"
    elif day_of_week == 4:
        return "Wednesday"
    elif day_of_week == 5:
        return "Thursday"
    elif day_of_week == 6:
        return "Friday"
    elif day_of_week == 7:
        return "Saturday"
    return None

print(F"weekday_name.py: weekday_name(1) = `Sunday` = `{weekday_name(1)}`")
print(F"weekday_name.py: weekday_name(5) = `Thursday` = `{weekday_name(5)}`")
print(F"weekday_name.py: weekday_name(8675309) = `None` = `{weekday_name(8675309)}`")