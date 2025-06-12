import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const response = await fetch("http://127.0.0.1:8000/api/students");

      const results = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch students.");
      }

      setStudents(results.data);
    }

    try {
      fetchStudents();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto p-4 space-y-4">
      <header>
        <p className="text-2xl">Jay Vallesin</p>
        <p className="text-2xl">Section B</p>
      </header>
      <table>
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Date of birth</th>
            <th className="border p-2">Created At</th>
            <th className="border p-2">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => (
              <tr key={student.id}>
                <td className="border p-2">{student.id}</td>
                <td className="border p-2">
                  {student.last_name}
                  {student.middle_name && " " + student.middle_name}{" "}
                  {student.first_name}
                </td>
                <td className="border p-2">{student.age}</td>
                <td className="border p-2">{student.gender}</td>
                <td className="border p-2">{student.date_of_birth}</td>
                <td className="border p-2">
                  {new Date(student.created_at).toLocaleString()}
                </td>
                <td className="border p-2">
                  {new Date(student.updated_at).toLocaleString()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
