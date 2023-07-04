export default function getStudentIdsSum(target) {
  return target.reduce((accumlator, currentValue) => accumlator + currentValue.id, 0);
}
