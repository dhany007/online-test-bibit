// function clean and sort string
const cleanString = (str) =>
  str.replace(/\s+/g, "").toLowerCase().split("").sort().join();

// fungsi anagram antar 2 str
const isAnagram = (str1, str2) => {
  if (cleanString(str1) === cleanString(str2)) {
    return true;
  }

  return false;
};

const anagram = (arr) => {
  const dataAnagram = [];

  if (!Array.isArray(arr)) {
    return "input must be array";
  } else if (arr.length < 2) {
    return "array length must be > 1";
  }
  // tampung semua str yang pernah dibandingkan
  const unionStr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const tempData = [];
    // jika str yang sudah dibandingkan ada di unionStr, maka skip. Jika tidak, maka masukkan.
    if (unionStr.indexOf(arr[i]) >= 0) {
      continue;
    } else {
      unionStr.push(arr[i]);
    }

    // penampung kelompok anagram
    tempData[0] = arr[i];
    for (let j = i + 1; j < arr.length; j += 1) {
      // cek apakah anagram atau tidak
      if (isAnagram(arr[i], arr[j])) {
        tempData.push(arr[j]);
        unionStr.push(arr[j]);
      }
    }

    dataAnagram.push(tempData);
  }

  return dataAnagram;
};

const test = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

console.log(anagram(test));
