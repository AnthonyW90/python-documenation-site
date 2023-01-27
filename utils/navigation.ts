const navigation = {
  intro: {
    title: 'Introduction',
    pathPrefix: '/intro/',
    pages: {
      docs: [
        { title: 'Course Overview', href: 'course-overview' },
        { title: 'Setup', href: 'setup' },
        { title: 'Git', href: 'git' },
        { title: 'Markdown', href: 'markdown' },
        { title: 'Regular Expressions', href: 'regular-expressions' },
        { title: 'Programming Languages', href: 'programming-languages' },
        { title: 'JSON, CSV, and XML', href: 'json-csv-xml' },
        { title: 'Networking', href: 'networking' },
        { title: 'Professional Programming', href: 'professional-programming' },
        { title: 'Command Line Cheat Sheet', href: 'command-line-cheat-sheet' },
        { title: 'Your First Git Commit', href: 'your-first-git-commit' },
      ],
    }
  },
  python: {
    title: 'Python',
    pathPrefix: '/python/',
    pages: {
      docs: [
        { title: 'Overview', href: 'overview' },
        { title: 'Fundamentals', href: 'fundamentals' },
        { title: 'Exceptions and Testing', href: 'exceptions-and-testing' },
        { title: 'Numbers and Arithmetic', href: 'numbers-and-arithmetic' },
        { title: 'Booleans and Comparisons', href: 'booleans-and-comparisons' },
        { title: 'Imports, Modules, and Packages', href: 'imports-modules-packages' },
        { title: 'The Random Module', href: 'random-module' },
        { title: 'While and For Loops', href: 'while-and-for-loops' },
        { title: 'Strings', href: 'strings' },
        { title: 'Lists and Tuples', href: 'lists-and-tuples' },
        { title: 'Functions', href: 'functions' },
        { title: 'Dictionaries', href: 'dictionaries' },
        { title: 'Regular Expressions in Python', href: 'regular-expressions-in-python' },
        { title: 'Datetimes', href: 'datetimes' },
        { title: 'Classes', href: 'classes' },
        { title: 'Requests Module', href: 'requests-module' },
        { title: 'Docstrings', href: 'docstrings' },
        { title: 'File I/O', href: 'file-io' },
        { title: 'Sets', href: 'sets' },
        { title: 'Virtual Environments', href: 'virtual-environments' },
      ],
      labs: [
        { title: 'Turtle', href: 'turtle' },
        { title: 'Mad Lib', href: 'mad-lib' },
        { title: 'Grading', href: 'grading' },
        { title: 'Make Change', href: 'make-change' },
        { title: 'Rock Paper Scissors', href: 'rock-paper-scissors' },
        { title: 'Random Password Generator', href: 'random-password-generator' },
        { title: 'Peaks and Valleys', href: 'peaks-and-valleys' },
        { title: 'Pick 6', href: 'pick-6' },
        { title: 'Blackjack Advice', href: 'blackjack-advice' },
        { title: 'Dad Joke API', href: 'dad-joke-api' },
        { title: 'Rotation Cipher', href: 'rotation-cipher' },
        { title: 'Unit Converter', href: 'unit-converter' },
        { title: 'Count Words', href: 'count-words' },
        { title: 'Automated Readability Index', href: 'ari' },
        { title: 'Rain Data', href: 'rain-data' },
        { title: 'Searching and Sorting', href: 'searching-and-sorting' },
        { title: 'Contact List', href: 'contact-list' },
        { title: 'Quotes API', href: 'quotes-api' },
        { title: 'Trivia API', href: 'trivia-api' },
        { title: 'Adventure', href: 'adventure' },
      ],
      mob: [
        { title: 'Random Emoticon Generator', href: 'random-emoticon-generator' },
        { title: 'Guess The Number', href: 'guess-the-number' },
        { title: 'Credit Card Validation', href: 'credit-card-validation' },
        { title: 'Bogosort', href: 'bogosort' },
        { title: 'Number to Phrase', href: 'number-to-phrase' },
        { title: 'Left Center Right', href: 'lcr' },
        { title: 'Snowman', href: 'snowman' },
        { title: 'Tic-Tac-Tod', href: 'tic-tac-toe' },
        { title: 'ATM', href: 'atm' },
        { title: 'Rotation Cipher with Classes', href: 'rotation-cipher-with-classes' },
        { title: 'Stack and LinkedList', href: 'stack-and-linked-list' },
        { title: 'Advice Slip API', href: 'advice-slip-api' },
        { title: 'Social Statistics', href: 'social-statistics' },
        { title: 'Any API', href: 'any-api' },
      ],
      practice: [
        { title: 'Numbers', href: 'numbers' },
        { title: 'Booleans', href: 'booleans' },
        { title: 'Loops', href: 'loops' },
        { title: 'Strings', href: 'strings' },
        { title: 'Lists', href: 'lists' },
        { title: 'Dictionaries', href: 'dictionaries' },
        { title: 'Regex', href: 'regex' },
        { title: 'Datetimes', href: 'datetimes' },
      ]    
    }
  },
  htmlcss: {
    title: 'HTML and CSS',
    pathPrefix: '/htmlcss/',
    pages: {
      docs: [
        { title: 'HTML Overview', href: 'html-overview' },
        { title: 'HTML Elements', href: 'html-elements' },
        { title: 'CSS Overview', href: 'css-overview' },
        { title: 'CSS Selectors', href: 'css-selectors' },
        { title: 'CSS Properties', href: 'css-properties' },
        { title: 'CSS Box Model', href: 'css-box-model' },
        { title: 'CSS Flexbox and Grid', href: 'css-flexbox-and-grid' },
        { title: 'CSS Responsive Design', href: 'css-responsive-design' },
        { title: 'CSS Frameworks', href: 'css-frameworks' },
        { title: 'CSS Animations', href: 'css-animations' },
        { title: 'HTML Forms', href: 'html-forms' },
        { title: 'Flask', href: 'flask' },
        { title: 'Flask Forms', href: 'flask-forms' },
        { title: 'Templates', href: 'templates' },
        { title: 'SEO and Meta-Tagging', href: 'seo-and-meta-tagging' },
      ],
      labs: [
        { title: 'Bio', href: 'bio' },
        { title: 'Blog', href: 'blog' },
        { title: 'Company', href: 'company' },
        { title: 'Personal Portfolio', href: 'personal-portfolio' },
        { title: 'Burrito Order Form', href: 'burrito-order-form' },
        { title: 'Flask Redo', href: 'flask-redo' },
      ],
      mob: [
        { title: 'Spirit Animal', href: 'spirit-animal' },
        { title: 'Storefront', href: 'storefront' },
        { title: 'Button Animations', href: 'button-animations' },
        { title: 'Flask Todo', href: 'flask-todo' },
      ],
    }
  },
  django: {
    title: 'Django',
    pathPrefix: '/django/',
    pages: {
      docs: [
        { title: 'Overview', href: 'overview' },
        { title: 'Routes', href: 'routes' },
        { title: 'Views', href: 'views' },
        { title: 'Templates', href: 'templates' },
        { title: 'Forms', href: 'forms' },
        { title: 'Models', href: 'models' },
        { title: 'User Management', href: 'user-management' },
        { title: 'Uploading Files', href: 'uploading-files' },
        { title: 'Advanced Topics', href: 'advanced-topics' },
        { title: 'Class Based Views', href: 'class-based-views' },
        { title: 'Deployment', href: 'deployment' },
        { title: 'Quickstart Guide', href: 'quickstart-guide' },
      ],
      labs: [
        { title: 'Django Redo', href: 'django-redo' },
        { title: 'Todo', href: 'todo' },
        { title: 'Blog', href: 'blog' },
        { title: 'Chirp', href: 'chirp' },
        { title: 'Student API', href: 'student-api'}
      ],
      mob: [
        { title: 'Polls', href: 'polls' },
        { title: 'URL Shortener', href: 'url-shortener' },
        { title: 'Cat API', href: 'cat-api' },
      ],
    }
  },
  javascript: {
    title: 'JavaScript',
    pathPrefix: '/javascript/',
    pages: {
      docs: [
        { title: 'Overview', href: 'overview' },
        { title: 'Fundamentals', href: 'fundamentals' },
        { title: 'Numbers and Arithmetic', href: 'numbers-and-arithmetic' },
        { title: 'Booleans, Comparisons, and Conditionals', href: 'booleans-comparisons-and-conditionals' },
        { title: 'Strings', href: 'strings' },
        { title: 'Objects', href: 'objects' },
        { title: 'Loops', href: 'loops' },
        { title: 'Arrays', href: 'arrays' },
        { title: 'Functions', href: 'functions' },
        { title: 'Classes', href: 'classes' },
        { title: 'Editing HTML', href: 'editing-html' },
        { title: 'Events', href: 'events' },
        { title: 'Vue', href: 'vue' },
        { title: 'Ajax', href: 'ajax' },
        { title: 'Templates', href: 'templates' },
        { title: 'Timing', href: 'timing' },
        { title: 'Python vs JavaScript', href: 'python-vs-javascript' },
        { title: 'Vanilla vs Vue', href: 'vanilla-vs-vue' },
      ],
      labs: [
        { title: 'JavaScript Redo', href: 'javascript-redo' },
        { title: 'Todo List', href: 'javascript-todo'},
        { title: 'Vue Redo', href: 'vue-redo' },
        { title: 'Vue Todo', href: 'vue-todo' },
        { title: 'Any API', href: 'any-api' },
        { title: 'Pokedex', href: 'pokedex' },
        { title: 'Weather API', href: 'weather-api' },
      ],
      mob: [
        { title: 'Leet Translator', href: 'leet-translator' },
        { title: 'Guess The Number', href: 'guess-the-number' },
        { title: 'Vue Snowman', href: 'vue-snowman' },
      ]
    }
  },
  capstone: {
    title: 'Capstone and Beyond',
    pathPrefix: '/capstone/',
    pages: {
      docs: [
        { title: 'Capstone Proposal', href: 'capstone-proposal' },
        { title: 'Capstone Ideas', href: 'capstone-ideas' },
        { title: 'APIs and Libraries', href: 'apis-and-libraries' },
        { title: 'Deployment', href: 'deployment' },
        { title: 'Post Bootcamp', href: 'post-bootcamp' },
        { title: 'Resume Checklist', href: 'resume-checklist' },
        { title: 'LinkedIn Checklist', href: 'linkedin-checklist' },
        { title: 'Interview', href: 'interview' },
        { title: 'Jobs', href: 'jobs' },
      ],
    }
  },
}

export default navigation