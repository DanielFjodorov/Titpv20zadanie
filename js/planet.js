let planet = ["Mercury","Venus", "Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
planet.push("Pluto");
console.log(planet);
const html =`
<ul>
<li>${planet[0]}</li>
<li>${planet[1]}</li>
<li>${planet[2]}</li>
<li>${planet[3]}</li>
<li>${planet[4]}</li>
<li>${planet[5]}</li>
<li>${planet[6]}</li>
<li>${planet[7]}</li>
<li>${planet[8]}</li>
</ul>
`;
document.body.innerHTML = html;