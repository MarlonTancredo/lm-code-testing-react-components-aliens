const specialCharList = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const messages = {
  moreThenTwoChar: "You must enter more than 2 characters!",
  moreThenTwentyThree: "You must enter less than 23 characters!",
  moreThenOneChar: "You must enter more than 1 characters!",
  moreThenFortyNine: "You must enter less than 49 characters!",
  numberChar: "Your answer must not have numbers!",
  specialChar: "Your answer must not have special characters!",
  justNumber: "You only can use numbers",
  biggestNumber: "Must be at least 1,000,000,000.",
};
const {
  moreThenTwoChar,
  moreThenTwentyThree,
  moreThenOneChar,
  moreThenFortyNine,
  numberChar,
  specialChar,
  justNumber,
  biggestNumber,
} = messages;

export const checkSpecieNameField = (value: string) => {
  if (value.length < 3) {
    return moreThenTwoChar;
  }
  if (value.length > 23) {
    return moreThenTwentyThree;
  }
  const values = value.split("").map((element) => {
    return !isNaN(parseInt(element));
  });
  if (values.includes(true)) {
    return numberChar;
  }
  if (specialCharList.test(value)) {
    return specialChar;
  }
};

export const checkPlanetNameField = (value: string) => {
  if (value.length < 2) {
    return moreThenOneChar;
  }
  if (value.length > 49) {
    return moreThenFortyNine;
  }
  if (specialCharList.test(value)) {
    return specialChar;
  }
};

export const checkNumberOfBeingField = (value: string) => {
  const values = value.split("").map((element) => {
    return isNaN(parseInt(element));
  });
  if (values.includes(true)) {
    return justNumber;
  }
  if (parseInt(value) < 1000000000) {
    return biggestNumber;
  }
};
