 BOOKIFY DOCUMENTATION

Project Description
User side for a library management system which allows users to check a book, borrow and return the book on the platform.

User Functions:
1. Users can be able to check all books in the library.
2. Users can check the details of a book(book title, bookcover, book description, genre) from the bookcard
3. Users can borrow book/books from the library and select the return date on checkout


Workflow:
SignUp/Login ------- Homepage ------


SignUp:
Collect firstname , lastname, email , password

Login: 
Collect email and password

Home Page: Display a list of available books and categories.
Book Details Page: Show detailed information about a selected book.
Search & Filter: Allow users to search for books by title, author, or category.
User Profile: Enable users to view and edit their profiles.
Borrowing History: Show a user's borrowed books and their due dates.
Notifications: Notify users about book availability, due dates, etc.


 FOLDER STRUCTURE
src/
├── assets/          # For static assets like images, icons, or fonts
├── components/      # Reusable UI components (e.g., Navbar, Footer, BookCard)
├── context/         # Context for global state management (e.g., AuthContext)
├── hooks/           # Custom React hooks (e.g., useAuth, useFetch)
├── pages/           # Page components (e.g., Home, Dashboard, BookDetails)
├── routes/          # App routes (e.g., ProtectedRoute, UserRoutes)
├── services/        # API service files (e.g., bookService.js, authService.js)
├── styles/          # Global or shared styles (e.g., tailwind.css)
├── utils/           # Helper functions (e.g., formatDate, handleErrors)
├── App.js           # Main app component
├── index.js         # Entry point for the application
├── tailwind.config.js
└── index.css        # Main stylesheet with Tailwind imports
