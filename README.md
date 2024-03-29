# Capstone project for CS50 course
### What I did

My final project is **real-time chat** for people with psychology issues and problems. Users can sign up or log in and go to the specific room that corresponds their needs. In these rooms people can talk to each other and talk to psychotherapists to get some help and support. The main point - its totally free of any distractions like ads, additional information about users or messages, so users can concentrate on chatting about their feelings and thoughts and get feel better.

### Why I did it
Today there is a pandemic of psychology problems like loneliness, depression, anxiety etc. And mild socialization can be helpful for people. Socialization without ruminating what others think about you, annoying notifications, necessity of building relationships before you could talk about your feelings etc. It's extremely helpful for people with social anxiety or social phobia like a first step in their way to cope with it.

### Distinctiveness and Complexity

The project based on what was learnt in CS50 course, but goes deeper and uses much more complex architecture:
- it made of two apps in one project
- it uses django forms for creating users, check the complexity of passwords
- it uses django channels that extends its abilities beyond HTTP
- it works with Web Socket
- it uses Tailwind CSS framework for styling
- it was made using virtual environment

So project responds to all the requirements:
- it sufficiently distinct from the other projects in this course
-  utilize Django (including at least one model) on the back-end and JavaScript on the front-end
- all information is saved in database (SQLite)
- it mobile-responsive

### Whats contained in each file

* `capstone` - project folder

* `my app` - folder with first app (everything without rooms)

 * `pycache` - directory that contains bytecode cache files that are automatically generated by python
 * `migrations` - folder with Python files containing the old definitions of models 
 * `static` - folder contains static content
   * `myapp` - folder for myapp app
     * `img` - folder with images
	   * `img-start.png` - image for start page
	 * `styles.css` - file with styles
 * `templates` - folder contains application templates
   * `index.html` - template for main page
   * `layout.html` -  base template, other tempalates extend it.
   * `signup.html` - template for sign up page
   * `login.html` - template for login page
 * `forms.py` - file with sign up form
 * `urls.py` - file with application urls
 * `views.py` - file contains all application views
 
* `rooms` - folder with second app (rooms)
 * `pycache` - directory that contains bytecode cache files that are automatically generated by python
 * `migrations` - folder with Python files containing the old definitions of models 
 * `static` - folder contains static content
   * `rooms` - folder for rooms app
	 * `script.js` - file with scripts that run Web Socket and scroll chat page down when chatting
 * `templates` - folder contains application templates
   * `room.html` - template for specific room
   * `rooms.html` -  template for all rooms list
 * `admin.py` - file for register models
 * `urls.py` - file with application urls
 * `views.py` - file contains all application views
 * `consumers.py` - file with consumers classes
 * `models.py` - file with app models
 * `routing.py` - contains web socket url patterns
* `db.sqlite3` - database
* `manage.py` - command-line utility
* `README.md` - about project
* `requirements.txt` -  required packages

### How to run application
* Install project packages needs, you can run `pip install -r requirements.txt`  (that include channels)
* Make migrations by running `python manage.py makemigrations` and `python manage.py migrate`
* Create superuser  `python manage.py createsuperuser` 
* Run server by `python manage.py runserver` 
* Go to address you get and enjoy

### Additional information

The video with projects functionality [here](https://youtu.be/4zBwjas-7wE)
