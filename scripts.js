$(function(){
	console.log('DOM loaded - you can have fun');
});

function Button(text) {
	this.text = text || 'Hello';
	this.test = 123;
}

Button.prototype = {
	create: function(){
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function(){
			alert(self.text);
			console.log(this);
		})
		$('body').append(this.$element);

	}
}

var btn1 = new Button('abc');
console.log(btn1);

btn1.create();