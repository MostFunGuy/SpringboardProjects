# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div
app = Flask(__name__)

# Make a Flask app that responds to 4 different routes.
# Each route does a math operation with two numbers, a and b,
#   which will be passed in as URL GET-style query parameters.


@app.route("/add")
def add():
    """
        Take A and B, adding A to B
        Requirement: Adds a and b and returns result as the body.
    """

    #Convert both parameters into ints, add them together, then turn it back into a string
    return str(add(int(request.args.get("a")), int(request.args.get("b"))))


@app.route("/sub")
def sub():
    """ 
        Take A and B, subtracting A from B
        Requirement: Same, subtracting b from a.
    """

    #Convert both parameters into ints, subtract them, then turn it back into a string on the return
    return str(sub(int(request.args.get("a")), int(request.args.get("b"))))

@app.route("/mult")
def mult():
    """
        Take A and B, multiplying A and B together.
        Requiment: Same, multiplying a and b.
    """

    # Convert both parameters into ints, multiply them together, then turn it back into a string
    return str(mult(int(request.args.get("a")), int(request.args.get("b"))))

@app.route("/div")
def div():
    """
        Take A and B, diving B into A together.
        Requiment: Same, dividing a by b.
    """

    # Convert both parameters into ints, divide them, then turn it back into a string
    return str(div(int(request.args.get("a")), int(request.args.get("b"))))



# As an extra-bonus, see if you can find a way to do this in the route without a whole series of if/elif statements.
# One good way is to use a dictionary to map operation names to the functions that do the underlying math.
operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
}

# You can write this in one function with one route 
# by using a route parameter for the actual operation (“add”, “sub”, etc).
@app.route("/math/<operator>")
def math(operator):
    """Do a specified operator on parameters A and B
        Requirement: You probably have a lot of code duplication in your calc routes,
            given that you’re doing such similar things in each.
        Make a single route/view function that can deal with 4 different kinds of URLs
    """
    
    # Convert both parameters into ints, apply the operator from the dictionary,
    #   then turn it back into a string for the return
    return operators[operator](int(request.args.get("a")), int(request.args.get("b")))