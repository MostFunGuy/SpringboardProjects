"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    >>> serial = SerialGenerator(start=100)
    >>> serial.generate()
    100
    >>> serial.generate()
    101
    >>> serial.generate()
    102
    >>> serial.reset()
    >>> serial.generate()
    100
    """
    def __init__(self, start=0): # Default to 0 if no value is provided
        self.start = start # Set the start attribute to whatever it was initialized with
        self.current = start # Match the current with the start
        self.reset() # Set the next to the starter number
    
    def reset(self): # Resets the count back to the originally initialized value
        self.current = self.start # Reset the current back to the start
        self.next = self.current + 1 # Start minus one, so we can increment and return in the same function

    def generate(self):
        self.next = self.next + 1 # Increment the next value
        return self.next - 1 # Give out the previous value

test = SerialGenerator(0)
print(F"Should be '0': '{test.current}'")
print(F"Should be '1': '{test.next}'")

print(F"Should be '1': '{test.generate()}'")
print(F"Should be '2': '{test.generate()}'")
print(F"Should be '3': '{test.generate()}'")
print(F"Should be '4': '{test.generate()}'")
print(F"Should be '5': '{test.generate()}'")

test.reset()
print(F"Should be '0': '{test.current}'")