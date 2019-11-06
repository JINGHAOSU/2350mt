import { StudentImp1, InternationalStudent, SeniorStudent } from './Student';

const studentArr = [
  new StudentImp1(),
  new InternationalStudent(),
  new SeniorStudent(),
];

studentArr.forEach(tmp => {
  tmp.add({ name: 'cpsc', credits: 3 });
  tmp.add({ name: 'math', credits: 3 });
  tmp.add({ name: 'accounting', credits: 3 });
});

studentArr.forEach(tmp => {
  console.log(tmp.totalFees);
});
