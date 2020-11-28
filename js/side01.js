// var $div = $('<div>Hello</div>');
// var div = document.createElement('div');
// var text = document.createTextNode('Hello');
// div.appendChild(text);
// document.body.appendChild(div);
//
// $('#zero').append($div);
// $div.appendTo($('#zero'));
// document.getElementById('zero').appendChild(div);

// var jbBtn = document.createElement('button');
// var jbBtnText = document.createTextNode('Click');
// jbBtn.appendChild(jbBtnText);
// document.body.appendChild(jbBtn);


var div_container = document.createElement('div');
div_container.className = 'container01';
document.body.appendChild(div_container);

var input = document.createElement('input');
input.type="checkbox";
input.id = 'trigger';
//제이쿼리를 사용해서 for를 표현가능하나, 스크립트만으론 아직 못함.
var label = document.createElement('label');
$(label).attr("for","trigger");
var span1 = document.createElement('span');
var span2 = document.createElement('span');
var span3 = document.createElement('span');
div_container.appendChild(input);
div_container.appendChild(label);
label.appendChild(span1);
label.appendChild(span2);
label.appendChild(span3);
// span.append('');


var div_sidebar = document.createElement('div');
div_container.appendChild(div_sidebar);
div_sidebar.className = 'sidebar';
var aTag1 = document.createElement('a');
var aTag2 = document.createElement('a');
var aTag3 = document.createElement('a');
var aTag4 = document.createElement('a');
div_sidebar.appendChild(aTag1);
div_sidebar.appendChild(aTag2);
div_sidebar.appendChild(aTag3);
div_sidebar.appendChild(aTag4);
aTag1.append('HOME');
aTag2.append('내 정보');
aTag3.append('자기소개');
aTag4.append('활동');
$(aTag1).attr("href","main.html");
$(aTag2).attr("href","myprofile.html");
$(aTag3).attr("href","introduction.html");
$(aTag4).attr("href","myactivity.html");
