export default function cleanSet(set, startString) {
  const myStrings = []; // stores the values that match the condition
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      myStrings.push(s.slice(startString.length));
    }
  });
  return myStrings.join('-');
}
