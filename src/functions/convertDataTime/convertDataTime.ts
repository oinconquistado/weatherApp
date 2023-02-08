export default function convertDateTime(datetime: string, gmt_offset: number) {
  const date = new Date(datetime);
  const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  let hours = date.getUTCHours() + gmt_offset;
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  let finalminutes = minutes < 10 ? `${minutes}`.padStart(2, "0") : minutes;

  return `${dayOfWeek}, ${hours}:${finalminutes} `;
}
