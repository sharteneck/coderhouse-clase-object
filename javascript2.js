var auto1 = {
	año: 2007,
	dni: 28642282,
	marca: "Ferrari"
}

var auto2 = {
	año: 2013,
	dni: 30282649,
	marca: "Mercedez Benz"
}

var auto3 = {
	año: 2014,
	dni: 30282649,
	marca: "Mc Laren P1"
}

var auto4 = {
	año: 2015,
	dni: 30282649,
	marca: "Bmw M5"
}


auto1.velocidadMaxima = "320";
auto2.velocidadMaxima = "280";
auto3.velocidadMaxima = "370";
auto4.velocidadMaxima = "290";

auto1.acelerar = function () {
	return this.velocidadMaxima * 2;
};
auto2.acelerar = function () {
	return this.velocidadMaxima * 2;
};
auto3.acelerar = function () {
	return this.velocidadMaxima * 2;
};
auto4.acelerar = function () {
	return this.velocidadMaxima * 2;
};

if ("marca" in auto1) {
console.log(auto1.acelerar());
}
console.log(auto2.acelerar());
console.log(auto3.acelerar());
console.log(auto4.acelerar());

// si marca esta en auto4

var auto1 = {
	año: 2007,
	dni: 28642282,
	marca: "Ferrari"
}

var auto2 = {
	año: 2013,
	dni: 30282649,
	marca: "Mercedez Benz"
}

var auto3 = {
	año: 2014,
	dni: 30282649,
	marca: "Mc Laren P1"
}

var auto4 = {
	año: 2015,
	dni: 30282649,
	marca: "Bmw M5"
}


auto1.velocidadMaxima = "320";
auto2.velocidadMaxima = "280";
auto3.velocidadMaxima = "370";
auto4.velocidadMaxima = "290";

auto1.acelerar = function () {
	return this.velocidadMaxima * 2;
};
auto2.acelerar = function () {
	return this.velocidadMaxima * 2;
};
auto3.acelerar = function () {
	return this.velocidadMaxima * 2;
};
auto4.acelerar = function () {
	return this.velocidadMaxima * 2;
};

if ("marca" in auto1) {
console.log(auto1.acelerar());
}
console.log(auto2.acelerar());
console.log(auto3.acelerar());
console.log(auto4.acelerar());

//