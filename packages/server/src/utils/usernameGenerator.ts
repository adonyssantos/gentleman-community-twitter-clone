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

export const generateFromEmail = (email: string, randomDigits?: number): string => {
  // Retrieve name from email address | john.doe@example.com -> john.doe
  const nameParts = email.replace(/@.+/, '');
  // Replace all special characters like "@ . _ " | john.doe -> johndoe
  const name = nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, '');
  // Create and return unique username
  return name + randomNumber(randomDigits);
};

export const generateFromName = (name: string, randomDigits?: number): string => {
  // Retrieve name without whitespaces | john f doe -> johnfdoe
  const formattedName = name.replace(/\s/g, '');
  // Create and return unique username
  return formattedName + randomNumber(randomDigits);
};
