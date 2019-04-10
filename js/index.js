/*获取数据类型*/
let dataType = (data) => {
	let string = Object.prototype.toString.call(data).slice();
	let type = string.slice(string.indexOf(' ') + 1, string.length - 1);
	return type;
}