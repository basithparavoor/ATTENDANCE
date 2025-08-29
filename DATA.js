const users = [
    {
        username: "admin",
        password: "password123",
        role: "administrator"
    },
    {
        username: "T001",
        password: "passwordT001",
        role: "teacher"
    },
    {
        username: "T002",
        password: "passwordT002",
        role: "teacher"
    },
    {
        username: "T003",
        password: "passwordT003",
        role: "teacher"
    },
    {
        username: "T004",
        password: "passwordT004",
        role: "teacher"
    },
    // Student logins
    {
        username: "S001",
        password: "johnpass",
        role: "student"
    },
    {
        username: "S002",
        password: "janepass",
        role: "student"
    },
    {
        username: "S003",
        password: "peterpass",
        role: "student"
    },
    {
        username: "S004",
        password: "wendypass",
        role: "student"
    }
];

const students = [
    {
        admissionNo: "S001",
        name: "JOHN LEE",
        class: "Grade 10",
        email: "john.doe@school.edu"
    },
    {
        admissionNo: "S002",
        name: "Jane Doe",
        class: "Grade 9",
        email: "jane.doe@school.edu"
    },
    {
        admissionNo: "S003",
        name: "Peter Pan",
        class: "Grade 10",
        email: "peter.pan@school.edu"
    },
    {
        admissionNo: "S004",
        name: "Wendy Darling",
        class: "Grade 9",
        email: "wendy.darling@school.edu"
    }
];

const teachers = [
    {
        employeeId: "T001",
        name: "Jane Smith",
        subject: "Mathematics",
        email: "jane.smith@school.edu"
    },
    {
        employeeId: "T002",
        name: "Mark Johnson",
        subject: "Physics",
        email: "mark.johnson@school.edu"
    },
    {
        employeeId: "T003",
        name: "Emily White",
        subject: "Chemistry",
        email: "emily.white@school.edu"
    },
    {
        employeeId: "T004",
        name: "David Lee",
        subject: "Biology",
        email: "david.lee@school.edu"
    }
];

const classes = [
    {
        className: "Grade 10",
        section: "A",
        assignedTeacher: "Jane Smith",
        numberOfStudents: 35
    },
    {
        className: "Grade 9",
        section: "B",
        assignedTeacher: "Mark Johnson",
        numberOfStudents: 32
    },
    {
        className: "Grade 10",
        section: "B",
        assignedTeacher: "Emily White",
        numberOfStudents: 30
    },
    {
        className: "Grade 9",
        section: "A",
        assignedTeacher: "David Lee",
        numberOfStudents: 33
    }
];

const exams = [
    {
        examName: "Term 1 Finals",
        class: "Grade 10",
        subject: "Mathematics",
        date: "2025-12-15"
    },
    {
        examName: "Term 1 Finals",
        class: "Grade 9",
        subject: "Science",
        date: "2025-12-16"
    }
];