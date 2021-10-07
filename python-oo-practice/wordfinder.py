import random

"""Word Finder: finds random words from a dictionary."""
class WordFinder:
    """When given a file with words, returns an array of words"""
    def __init__(self, file_path): # In ruby, self is always the first parameter
        target_file = open(file_path) # Get the 
        self.word_list = [word.strip() for word in target_file] #todo: Read from the file
        print(F"{len(self.word_list)} words read!") # REQUIREMENT: it prints out “[num-of-words-read] words read”

    # def get_word_list(self): # I realized that I could just directly access the variables instead of making a get function
    #     return self.word_list

    def random(self): # REQUIREMENT: it provides a method, random(), which returns a random word from that list of words
        """Return a random word from the already-created array of words"""
        return random.choice(self.words)

# # # My tests:
new_var = WordFinder("C:/Users/thomp/OneDrive/Coding Bootcamp 2021 files/Projects/python-oo-practice/smaller_test_words.txt")
print(new_var.word_list)
new_var.word_list
print(len(new_var.word_list[0])) # These lines were to check for errant characters, even invisible ones. 
print(len(new_var.word_list[1])) # Tests passed. No extra characters, visible or invisible
print(len(new_var.word_list[2]))
print(len(new_var.word_list[3])) 
print(len(new_var.word_list[4])) 

# To test this yourself, change the initialization parameter to a file on your local machine