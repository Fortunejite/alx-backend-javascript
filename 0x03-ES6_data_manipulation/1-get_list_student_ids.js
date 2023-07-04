export default function getListStudentIds(target) {
  if (Array.isArray(target)) {
    return target.map((x) => x.id);
  }
  return [];
}
