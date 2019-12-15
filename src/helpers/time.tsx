export const addOneZeroToOneDigit = (i: Number): string | Number => {
  return i < 10 ? "0" + i : i;
}

export const getFormatedHourAndMinutedFromDate = (date: Date): string => {
  return addOneZeroToOneDigit(date.getHours()) + ':' + addOneZeroToOneDigit(date.getMinutes())
}

export const checkEndOfDay = (date: Date) => {
  if (date.getHours() === 21 && date.getMinutes() === 0)
    return true
  return false
}