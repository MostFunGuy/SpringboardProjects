from pathlib import Path
import os

def read_file_list(filename):
    """Read file and print out each line separately with a "-" before it.

    For example, if we have a file, `dogs`, containing:
        Fido
        Whiskey
        Dr. Sniffle

    This should work:

        >>> read_file_list("dogs")
        - Fido
        - Whiskey
        - Dr. Sniffle

    It will raise an error if the file cannot be found.
    """

    # hint: when you read lines of files, there will be a "newline"
    # (end-of-line character) at the end of each line, and you want to
    # strip that off before you print it. Do some research on that!

    # with open(filename, 'r') as file:
    #     print(file.read())
    #cwd = os.getcwd() # This gets the visual studio code opened location
    cwd = os.path.dirname(os.path.realpath(__file__))
    print(cwd)
    try:
        file_contents = Path(cwd + "\\" + filename).read_text()
    except:
        return "File not found"
    return file_contents

print(F"read_file_list.py: read_file_list('dogs') = CCCCC = {read_file_list('dogs')}")
print(F"read_file_list.py: read_file_list('cats') = CCCCC = {read_file_list('cats')}")
print(F"read_file_list.py: read_file_list('random non file') = CCCCC = {read_file_list('random non file')}")