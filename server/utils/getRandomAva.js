const avatarIndexes = {
  male: [
    26, 25, 19, 20, 15, 21, 7, 34, 11, 17, 10, 23, 50, 13, 28, 47, 0, 42, 43, 3,
    37, 33, 27, 46, 48, 39, 38, 31, 22, 1, 36, 18, 12,
  ],
  female: [
    77, 69, 80, 91, 85, 53, 83, 57, 58, 84, 60, 81, 52, 100, 73, 86, 88, 71, 95,
  ],
};

const getRandomAva = (gender) => {
  const indexes = avatarIndexes[gender];
  if (!indexes) {
    throw new Error('Invalid gender specified');
  }

  const randomIndex = indexes[Math.floor(Math.random() * indexes.length)];

  return `https://avatar.iran.liara.run/public/${randomIndex}`;
};

export default getRandomAva;