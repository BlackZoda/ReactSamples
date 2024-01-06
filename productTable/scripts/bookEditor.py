import os
import json

script_directory = os.path.dirname(os.path.abspath(__file__))
input_file = os.path.join(script_directory, "../data/books.json")
output_file = os.path.join(script_directory, "../data/books_new.json")

with open(input_file, "r") as read_file:
    books = json.load(read_file)

modified_books = [{'id': i + 1, **book} for i, book in enumerate(books)]

with open(output_file, "w") as write_file:
    json.dump(modified_books, write_file, indent=2)
