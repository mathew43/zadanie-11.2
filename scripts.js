function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function(){
		this.$element = $('<button>');
	}
}