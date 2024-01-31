export default function limitString(inputString, limit) {
  try {
    if (inputString.length > limit) {
      return inputString.slice(0, limit) + "...";
    } else {
      return inputString;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
