var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

if(command === "add"){
	console.log(a+b);
}
else if(command === "sub"){
	console.log(a-b);
}
else if(command === "mul"){
	console.log(a*b);
}
else if(command === "div"){
	console.log(a/b);
}
console.log(module);