var tbodyEl = document.getElementsByTagName('tbody')[0];
var store = '';
for (var i = 0; i < data.length; i++) {
	store += '<tr><td>' + data[i].index + '</td><td>' + data[i].name +'</td><td>' + data[i].location + '</td><td>' + data[i].eduCareer +'</td></tr>';
}
tbodyEl.innerHTML = store;