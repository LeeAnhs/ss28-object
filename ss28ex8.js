let employeeList = [
  { id: "1", name: "John", position: "Developer", salary: 1000 },
  { id: "2", name: "Jane", position: "Manager", salary: 2000 },
  { id: "3", name: "Bob", position: "Designer", salary: 1500 },
];
while (true) {
  let choice = prompt(
    "Chọn chức năng:\n" +
      "1. Thêm nhân viên\n" +
      "2. Xóa nhân viên\n" +
      "3. Cập nhật lương\n" +
      "4. Tìm kiếm theo tên\n" +
      "5. Xem danh sách nhân viên\n" +
      "6. Thoát"
  );
  switch (choice) {
    case "1":
      let id = prompt("Nhập ID:");
      let name = prompt("Nhập tên:");
      let position = prompt("Nhập chức vụ:");
      let salary = Number(prompt("Nhập lương:"));
      employeeList.push({ id, name, position, salary });
      alert("Đã thêm nhân viên thành công!");
      break;
    case "2":
      let deleteId = prompt("Nhập ID cần xóa:");
      let index = employeeList.findIndex((emp) => emp.id === deleteId);
      if (index !== -1) {
        if (confirm("Bạn có chắc muốn xóa?")) {
          employeeList.splice(index, 1);
          alert("Đã xóa thành công!");
        }
      } else {
        alert("Không tìm thấy nhân viên!");
      }
      break;
    case "3":
      let updateId = prompt("Nhập ID cần cập nhật lương:");
      let employee = employeeList.find((emp) => emp.id === updateId);
      if (employee) {
        employee.salary = Number(prompt("Nhập lương mới:"));
        alert("Đã cập nhật lương!");
      } else {
        alert("Không tìm thấy nhân viên!");
      }
      break;
    case "4":
      let searchName = prompt("Nhập tên cần tìm:").toLowerCase();
      let found = employeeList.filter((emp) =>
        emp.name.toLowerCase().includes(searchName)
      );
      if (found.length > 0) {
        let result = "Kết quả tìm kiếm:\n";
        found.forEach((emp) => {
          result += `ID: ${emp.id}, Tên: ${emp.name}, Chức vụ: ${emp.position}, Lương: ${emp.salary}\n`;
        });
        alert(result);
      } else {
        alert("Không tìm thấy nhân viên!");
      }
      break;
    case "5":
      if (employeeList.length === 0) {
        alert("Danh sách nhân viên trống!");
      } else {
        let list = "Danh sách nhân viên:\n";
        employeeList.forEach((emp) => {
          list += `ID: ${emp.id}, Tên: ${emp.name}, Chức vụ: ${emp.position}, Lương: ${emp.salary}\n`;
        });
        alert(list);
      }
      break;

    case "6":
      alert("Tạm biệt!");
      window.close();
      break;

    default:
      alert("Lựa chọn không hợp lệ!");
  }
}
