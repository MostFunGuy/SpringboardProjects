def print_upper_words(words, must_start_with):
    """For a list of words, print out each word on a separate line, but in all uppercase. How can you change a word to uppercase? Ask Python for help on what you can do with strings!

    Turn that into a function, print_upper_words. Test it out. (Don’t forget to add a docstring to your function!)

    Change that function so that it only prints words that start with the letter ‘e’ (either upper or lowercase).

    Make your function more general: you should be able to pass in a set of letters, and it only prints words that start with one of those letters.
    
    For example:

    # this should print "HELLO", "HEY", "YO", and "YES"
    
    """  
    
    # Loop every word passed as a parameter
    for word in words:
        # If the checklist is empty or if the first letter of the word is in the checklist
        if len(must_start_with) == 0 or word[0] in must_start_with:
            #print the word
            print(word)
        #Otherwise, do nothing

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})