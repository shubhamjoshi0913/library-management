// Utility Functions
const saveDataToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getDataFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

// Login Functionality
const handleLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Dummy User Authentication (Replace with backend integration)
    const users = [
        { email: "shubham@gmail.com", password: "admin123", role: "admin" },
        { email: "user@gmail.com", password: "user123", role: "user" },
    ];

    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMsg").textContent = "Invalid email or password.";
    }
};

// Logout Functionality
const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
};

// Dashboard Redirection Validation
const checkAuthentication = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        window.location.href = "index.html";
    }
};

// Add New Book
const handleAddBook = (event) => {
    event.preventDefault();
    const books = getDataFromLocalStorage("books");

    const newBook = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        year: document.getElementById("year").value,
    };

    books.push(newBook);
    saveDataToLocalStorage("books", books);

    document.getElementById("addBookForm").reset();
    displayBooks();
};

// Display Books
const displayBooks = () => {
    const books = getDataFromLocalStorage("books");
    const booksTableBody = document.getElementById("booksTableBody");
    booksTableBody.innerHTML = books
        .map(
            (book) => `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.year}</td>
            </tr>`
        )
        .join("");
};

// Add New Member
const handleAddMember = (event) => {
    event.preventDefault();
    const members = getDataFromLocalStorage("members");

    const newMember = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        membershipType: document.getElementById("membershipType").value,
    };

    members.push(newMember);
    saveDataToLocalStorage("members", members);

    document.getElementById("addMemberForm").reset();
    displayMembers();
};

// Display Members
const displayMembers = () => {
    const members = getDataFromLocalStorage("members");
    const membersTableBody = document.getElementById("membersTableBody");
    membersTableBody.innerHTML = members
        .map(
            (member) => `
            <tr>
                <td>${member.name}</td>
                <td>${member.email}</td>
                <td>${member.membershipType}</td>
            </tr>`
        )
        .join("");
};

// Display Transactions (Placeholder - Modify as per backend)
const displayTransactions = () => {
    const transactions = [
        { user: "John Doe", book: "Book A", issueDate: "2024-11-20", returnDate: "2024-12-01", status: "Returned" },
        { user: "Jane Smith", book: "Book B", issueDate: "2024-11-22", returnDate: "2024-12-05", status: "Pending" },
    ];

    const transactionsTableBody = document.getElementById("transactionsTableBody");
    transactionsTableBody.innerHTML = transactions
        .map(
            (transaction) => `
            <tr>
                <td>${transaction.user}</td>
                <td>${transaction.book}</td>
                <td>${transaction.issueDate}</td>
                <td>${transaction.returnDate}</td>
                <td>${transaction.status}</td>
            </tr>`
        )
        .join("");
};

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", handleLogin);
    }

    if (document.getElementById("logout")) {
        document.getElementById("logout").addEventListener("click", handleLogout);
        checkAuthentication();
    }

    if (document.getElementById("addBookForm")) {
        document.getElementById("addBookForm").addEventListener("submit", handleAddBook);
        displayBooks();
    }

    if (document.getElementById("addMemberForm")) {
        document.getElementById("addMemberForm").addEventListener("submit", handleAddMember);
        displayMembers();
    }

    if (document.getElementById("transactionsTableBody")) {
        displayTransactions();
    }
});

// Active Issues Report
const displayActiveIssues = () => {
    const activeIssues = [
        { member: "John Doe", book: "Book A", issueDate: "2024-11-20", dueDate: "2024-12-01" },
        { member: "Jane Smith", book: "Book B", issueDate: "2024-11-18", dueDate: "2024-11-30" },
    ];

    const activeIssuesTableBody = document.getElementById("activeIssuesTableBody");
    activeIssuesTableBody.innerHTML = activeIssues
        .map(
            (issue) => `
            <tr>
                <td>${issue.member}</td>
                <td>${issue.book}</td>
                <td>${issue.issueDate}</td>
                <td>${issue.dueDate}</td>
            </tr>`
        )
        .join("");
};

// Overdue Returns Report
const displayOverdueReturns = () => {
    const overdueReturns = [
        { member: "John Doe", book: "Book A", dueDate: "2024-11-15", daysOverdue: 5 },
        { member: "Jane Smith", book: "Book C", dueDate: "2024-11-20", daysOverdue: 3 },
    ];

    const overdueReturnsTableBody = document.getElementById("overdueReturnsTableBody");
    overdueReturnsTableBody.innerHTML = overdueReturns
        .map(
            (overdue) => `
            <tr>
                <td>${overdue.member}</td>
                <td>${overdue.book}</td>
                <td>${overdue.dueDate}</td>
                <td>${overdue.daysOverdue}</td>
            </tr>`
        )
        .join("");
};

// Popular Books Report
const displayPopularBooks = () => {
    const popularBooks = [
        { title: "Book A", author: "Author 1", issues: 20 },
        { title: "Book B", author: "Author 2", issues: 15 },
    ];

    const popularBooksTableBody = document.getElementById("popularBooksTableBody");
    popularBooksTableBody.innerHTML = popularBooks
        .map(
            (book) => `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.issues}</td>
            </tr>`
        )
        .join("");
};

// Membership Statistics
const displayMembershipStatistics = () => {
    const stats = {
        totalMembers: 120,
        activeMembers: 90,
        inactiveMembers: 30,
    };

    const membershipStats = document.getElementById("membershipStats");
    membershipStats.innerHTML = `
        <li>Total Members: ${stats.totalMembers}</li>
        <li>Active Members: ${stats.activeMembers}</li>
        <li>Inactive Members: ${stats.inactiveMembers}</li>
    `;
};

// Event Listener
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("activeIssuesTableBody")) displayActiveIssues();
    if (document.getElementById("overdueReturnsTableBody")) displayOverdueReturns();
    if (document.getElementById("popularBooksTableBody")) displayPopularBooks();
    if (document.getElementById("membershipStats")) displayMembershipStatistics();
});
