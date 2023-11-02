import moment from "moment";
export const handleDateThread = (timestamp: string) => {
  const dateThread = moment(timestamp);
  const dateNow = moment();

  let dateString = "";

  const duration = moment.duration(dateNow.diff(dateThread));
  const days = duration.asDays();
  const hours = duration.asHours();
  const minutes = duration.asMinutes();
  const second = duration.asSeconds();

  if (Math.floor(days) > 0) {
    dateString += `${Math.floor(days)}d`;
  } else if (Math.floor(hours) > 0) {
    dateString += `${Math.floor(hours)}h`;
  } else if (Math.floor(minutes) > 0) {
    dateString += `${Math.floor(minutes)}m`;
  } else if (Math.floor(second) > 0) {
    dateString += `${Math.floor(second)}s`;
  }

  return dateString;
};
