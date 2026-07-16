import moment from "moment";

export function dateFormat(value) {
  if (value) {
    return moment(String(value)).format("LLL");
  }
}

export function timeFormat(value) {
  if (value) {
    return moment('2024-01-01 '+String(value)).format("LT");
  }
}

export function getImageUrl(value) {
  if(value){
    return import.meta.env.VITE_API_URL+'/upload/answers/'+value;
  }
}

export function minToHours(value) {
  const minutes = value % 60;
  const hours = Math.floor(value / 60);
  return `${padTo2Digits(hours)} h ${padTo2Digits(minutes)} m`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}