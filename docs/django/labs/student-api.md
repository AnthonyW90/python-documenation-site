# Student API

Let's build a full API using Django Rest Framework!

## Part 1

Start a new Django project and create an app named `students`.

Create a model named `Student` with the following fields:

- `first_name` (CharField)
- `last_name` (CharField)
- `cohort` (CharField)
- `favorite_language` (CharField)
- `capstone` (URLField)

Use the admin site to add several students to your database.

## Part 2

Create a serializer for your `Student` model.

Create views for your `Student` model. You should be able to:
- list all students
- create a new student
- retrieve a single student
- update a single student
- delete a single student

To test everything is working, use the Django Rest Framework browsable API by visiting your api endpoints in your browser.

## Part 3 (Optional)

Add the ability to search or filter students using URL parameters. Consult the DRF documentation here: https://www.django-rest-framework.org/api-guide/filtering/