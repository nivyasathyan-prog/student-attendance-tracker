const students = [
    "Ananya",
    "Rahul",
    "Priya"
];

const attendance = students.map(() => false);

function displayStudents() {
    const list = document.getElementById("studentList");

    list.innerHTML = students.map((student, index) => `
        <tr>
            <td>${student}</td>
            <td>
                <button onclick="toggleAttendance(${index})">
                    ${attendance[index] ? "Present" : "Mark Present"}
                </button>
            </td>
        </tr>
    `).join("");

    const presentCount = attendance.filter(Boolean).length;

    document.getElementById("total").textContent = students.length;
    document.getElementById("present").textContent = presentCount;
    document.getElementById("absent").textContent =
        students.length - presentCount;
}

function toggleAttendance(index) {
    attendance[index] = !attendance[index];
    displayStudents();
}

displayStudents();