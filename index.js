import express from "express";


const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial", id: 1 },
  { date: "1/3/2022", name: "Carnaval", id: 2 },
  { date: "4/17/2022", name: "Páscoa", id: 3 },
  { date: "4/21/2022", name: "Tiradentes", id: 4 },
  { date: "5/1/2022", name: "Dia do trabalho", id: 5 },
  { date: "6/16/2022", name: "Corpus Christi", id: 6 },
  { date: "9/7/2022", name: "Independência do Brasil", id: 7 },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida", id: 8 },
  { date: "11/2/2022", name: "Finados", id: 9 },
  { date: "11/15/2022", name: "Proclamação da República", id: 10 },
  { date: "12/25/2022", name: "Natal", id: 11 },
];

const app = express();
app.get("/holidays", (req, resp) => {
  resp.send(holidays);
});

app.get("/is-today-holiday", (req, resp) => {
  const todayHoliday = [];
  const hoje = new Date().toLocaleDateString("en-US");
  holidays.map((holiday) => {
    if (holiday.date == hoje) {
      todayHoliday.push(holiday);
    }
  });
  if (todayHoliday.length > 0) {
    console.log(todayHoliday[0]);
    resp.send(`Sim, hoje é ${todayHoliday[0].name}`).status(200);
  } else {
    resp.send(`Não, hoje não é feriado`).status(200);
  }
});
app.listen(5500, () => {
  console.log("estou vivo");
});