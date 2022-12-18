var names=new Array();
names[0]="satya";
names[1]="John";
names[2]="Jen";
names[3]="jason";
names[4]="sai";
names[5]="rayudu";
names[6]="lucky";
names[7]="naga";
names[8]="ravi";
names[9]="jim";

for (var i = 0;  i < names.length; i++) {
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
	  console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])

	}
}