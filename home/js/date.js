const month = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var now = new Date()

document.write (`Dia ${now.getDate().toString().padStart(2, "0")} de ${month[String(now.getMonth() + 1)]} de ${ now.getFullYear()}`)

