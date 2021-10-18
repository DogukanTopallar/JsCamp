//console.log("Hello World");

//JS is not typeSafe
let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}

console.log("Dolar Dün: " + dolarDun)

const euroDun = 11.2

console.log("Euro Dün: " + euroDun)

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}

{/* <ul>
    <li>Konut Kredisi</li>
    .
    .
    */    
}

//console.log(konutKredileri)