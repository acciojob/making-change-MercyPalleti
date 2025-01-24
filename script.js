const makeChange = (c) => {
  // your name here
	q=0;
	d=0;
	n=0;
	p=0;
	while(c>0){
		if(c>=25){
			q=Math.floor(c/25);
			c=c%25;
		}
		if(c>=10){
			d=Math.floor(c/10);
			c=c%10;
		}
		if(c>=5){
			n=Math.floor(c/5);
			c=c%5;
		}
		p=c;
		obj={"q":q,
			"d":d,
			"n":n,
			"p":p};
		return obj;
	}
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
