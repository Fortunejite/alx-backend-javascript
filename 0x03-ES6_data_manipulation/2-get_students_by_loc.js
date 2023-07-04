export default function getStudentsByLocation(target, city) {
  return target.filter((x) => x.location === city);
}
