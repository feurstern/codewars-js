const year = 2011;

const whatCentery = (year) => {
  if (
    year.toString().split("")[0] === "1" &&
    year.toString().split("")[1] === "0"
  ) {
    return "11th";
  } else if (
    year.toString().split("")[0] === "1" &&
    year.toString().split("") === "2"
  ) {
    return "12th";
  } else if (
    year.toString().split("")[0] === "1" &&
    year.toString().split("")[1] === "9"
  ) {
    return "20th";
  } else if (
    year.toString().split("")[0] === "2" &&
    year.toString().split("")[1] === "0"
  ) {
    return "21st";
  } else if (
    year.toString().split("")[0] === "2" &&
    year.toString().split("")[1] === "1"
  ) {
    return "22nd";
  } else if (
    year.toString().split("")[1] === "2" &&
    year.toString().split("")[1] === "2"
  ) {
    return "23rd";
  }
};

console.log(whatCentery(year));
