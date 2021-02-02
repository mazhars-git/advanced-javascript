const students = [
    {id: 22, name: 'Fahim', roll: '1001'},
    {id: 24, name: 'Abir', roll: '1002'},
    {id: 38, name: 'Jamil', roll: '1003'},
    {id: 29, name: 'Kabila', roll: '1004'},
]

const sId = students.map(s => s.id);
const sName = students.map(s => s.name);
const bigger = students.filter(s => s.id > 29);
const bigger2 = students.find(s => s.id > 22);
console.log(bigger2);