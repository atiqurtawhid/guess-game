// create a guess game Function


let numOfWin=0;
let numOfFaile =0;

for(let i = 1; i<=5; i++){



let guessNumber = parseInt(prompt("Enter A Number Between 1 to 5"))
let randomNumber =Math.floor(Math.random()*5)+1;


if (guessNumber===randomNumber){
	const h2 = document.getElementById("header2")
	numOfWin++;
	console.log("You Are Win Become Random number", randomNumber)
	
}


else{
	
	numOfFaile++
	
	console.log("You are Failed Because randomNumber ", randomNumber)
}

}



if (numOfWin>numOfFaile) {
	const h2 = document.getElementById("header2")
	h2.style.color="white"
	h2.style.backgroundColor="black"
	
	h2.innerText=`Wow! You Are Win Your Point ${numOfWin} `
	document.getElementById("b").style.backgroundColor="green"
}

else{

	const h2 = document.getElementById("header3")
	h2.style.color="white"
	h2.style.backgroundColor="black"
	
	h2.innerText="You Are Failed "
	document.getElementById("b").style.backgroundColor="red"
}

