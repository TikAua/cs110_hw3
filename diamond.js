
const diamond = function(a){
if (a%2 === 0){
	a = a + 1;
}
let count = (a+1)/2;
let b = "";
let c = "";
let sc1 = 1;
let d = (a - 1)/2;
let sc2;
for(j = 1; j<=a; j= j+1){
	if(j>(a+1)/2)
{d = d + 2;
	for(let n = 1; n <= d; n = n + 1)
	{b += " ";}
	for (let star = sc2; star >= 1; star = star - 1)
		{c += "*";}
	console.log(b+c);
	b = "";
	c = "";
	d = d - 1;
	sc2 = sc2 - 2;}
else if (j<=(a+1)/2){
for(let n = d; n > 0; n = n - 1)
{b += " ";}
for (let star = 1; star <= sc1; star = star + 1)
{c += "*";}
console.log(b+c);
b = "";
c = "";
d = d - 1;
sc1 = sc1 + 2;
sc2 = sc1 - 4;
}
}
}

console.log(diamond(5));
