let $title_info = document.getElementById('title_input');
let $date_info = document.getElementById('date_input');
let $contents_info = document.getElementById('contents_input');

const TITLE = document.getElementById('a_title');
const DATE = document.getElementById('a_date');
const BR_TAG = document.getElementById('br_tag');
const CONTENTS = document.getElementById('a_contents');

const $BTNCLK = document.getElementById('button_a');

$BTNCLK.addEventListener('click', () => {
    TITLE.textContent = $title_info.value;
    DATE.textContent = $date_info.value;
    CONTENTS.textContent = $contents_info.value;
})

let textbox = document.querySelector('#contents_input');
let f = function(e){
	if(e.keyCode==9){
		e.preventDefault();
		let newPos = textbox.selectionStart + 1;
		let value = textbox.value;
		let head = value.slice(0,textbox.selectionStart);
		let foot = value.slice(textbox.selectionEnd);
		textbox.value = head + '\t' + foot;
		textbox.setSelectionRange(newPos,newPos);
	}
};
textbox.addEventListener('keydown', f);