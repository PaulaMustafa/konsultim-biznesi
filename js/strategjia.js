// konstruktori Strategji
// - id (numer | unike), hapi (numer), titulli (string), permbajtje (string)
var id = 1;

function Strategji(step, title, subtitle, content) {
	this.id = id++;
	this.step = step;
	this.title = title;
	this.subtitle = subtitle;
	this.content = content;
}


function getStrategyById(register, id) {
	if (register.length > 0) {
		let strategy;
		for (let i = 0; i < register.length; i++) {
			strategy = register[i];
			if (strategy.id == id) {
				return strategy;
			}
		}	
	}
}