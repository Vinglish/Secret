var num = +prompt("Мальчик заплатил за бутылку с пробкой 11 рублей. Бутылка стоит на 10 рублей больше, чем пробка. Сколько стоит пробка?(Введите просто число)");
if(num==50){
	alert("Правильный ответ")
}
else if (num==1) {
	alert("Нет, совсем нет")
}
else if(num<50){
	alert("Маловато");
}
else if(num>50){
	alert("Это перебор")
}

