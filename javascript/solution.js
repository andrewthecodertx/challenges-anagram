function isAnagram(s1, s2) {
  const normalize = str => str.toLowerCase().split('').sort().join('');
  return normalize(s1) === normalize(s2);
}

module.exports = isAnagram;
