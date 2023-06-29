import { randomInt } from 'crypto';

const randomNumber = (maxNumber: number | undefined) => {
  let randomNumberString;
  switch (maxNumber) {
    case 1:
      randomNumberString = randomInt(1, 9).toString();
      break;
    case 2:
      randomNumberString = randomInt(10, 90).toString();
      break;
    case 3:
      randomNumberString = randomInt(100, 900).toString();
      break;
    case 4:
      randomNumberString = randomInt(1000, 9000).toString();
      break;
    case 5:
      randomNumberString = randomInt(10000, 90000).toString();
      break;
    case 6:
      randomNumberString = randomInt(100000, 900000).toString();
      break;
    default:
      randomNumberString = '';
      break;
  }
  return randomNumberString;
};

const randomRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const generateFromEmail = (email: string, randomDigits: number): string => {
  // Retrieve name from email address | john.doe@example.com -> john.doe
  const nameParts = email.replace(/@.+/, '');
  // Replace all special characters like "@ . _ " | john.doe -> johndoe
  const name = nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, '');
  // Retrieve formatted name with a pattern
  let formattedName = '';
  const randomN = randomRange(1, 4);
  switch (randomN) {
    case 1:
      formattedName = name;
      break;
    case 2:
      formattedName = underscorePrefixPattern(name);
      break;
    case 3:
      formattedName = dotPrefixPattern(name);
      break;
  }
  if (formattedName.length >= 16 - randomDigits)
    formattedName = formattedName.substring(0, 16 - randomDigits);
  // Create and return unique username
  return formattedName + randomNumber(randomDigits);
};

export const generateFromName = (name: string, randomDigits: number): string => {
  const randomN = randomRange(1, 6);
  let formattedName = '';
  switch (randomN) {
    case 1:
      formattedName = basicPattern(name);
      break;
    case 2:
      formattedName = underscorePattern(name);
      break;
    case 3:
      formattedName = dotPattern(name);
      break;
    case 4:
      formattedName = dotPatternWithInitials(name);
      break;
    case 5:
      formattedName = underscorePatternWithInitials(name);
      break;
  }
  if (formattedName.length >= 16 - randomDigits)
    formattedName = formattedName.substring(0, 16 - randomDigits);
  // Create and return unique username
  return formattedName + randomNumber(randomDigits);
};

export const generateUsername = (
  name: string,
  email: string,
  randomDigits: number = 2,
  quantity: number = 10,
): string[] => {
  let usernames: string[] = [];
  for (let i = 0; i < Math.floor(quantity / 1.5); i++) {
    const username = generateFromName(name, randomDigits);
    usernames = [...usernames, username];
  }

  for (let i = 0; i < Math.floor(quantity / 2.25); i++) {
    const username = generateFromEmail(email, randomDigits);
    usernames = [...usernames, username];
  }
  return usernames;
};

//John Arnold Doe -> johnarnolddoe
const basicPattern = (name: string) => name.toLowerCase().replace(/ /g, '');

// John Arnold Doe -> john_arnold_doe
const underscorePattern = (name: string) => name.toLowerCase().replace(/ /g, '_');

// John Arnold Doe -> john.arnold.doe
const dotPattern = (name: string) => name.toLowerCase().replace(/ /g, '.');

// John Arnold Doe -> John.a.doe
const dotPatternWithInitials = (name: string) => withInitials(name).join('.').toLowerCase();
// John Arnold Doe -> john_a_doe
const underscorePatternWithInitials = (name: string) =>
  withInitials(name).join('_').toLowerCase();

// johnarnolddev@gmail.com -> johnarnolddev
const underscorePrefixPattern = (name: string) => `_${name}`;

// johnarnolddev@gmail.com -> _johnarnolddev
const dotPrefixPattern = (name: string) => `.${name}`;

// John Arnold Doe -> ['John', 'A', 'Doe']
const withInitials = (name: string): string[] => {
  const nameParts = name.split(' ');
  let username: string[] = [];
  nameParts.length > 1
    ? nameParts.forEach((part, index) =>
        index !== 0 && index !== nameParts.length - 1
          ? (username = [...username, part.charAt(0)])
          : (username = [...username, part]),
      )
    : (username = [nameParts[0][0], nameParts[1]]);

  return username;
};
