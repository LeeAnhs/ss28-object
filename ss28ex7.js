let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

  { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

  { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } },
];

let filer = students.filter(student => {
    let sum = Object.values(student.scores).reduce((a, b) => a + b, 0);
    let average = sum / Object.keys(student.scores).length;
    return average >= 8;
    });
    console.log(filer);
