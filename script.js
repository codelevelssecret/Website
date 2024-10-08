var splitButton  = document.getElementById('split');
var foodButton  = document.getElementById('food');
var startScreen  = document.getElementById('startScreen');

function dayBoxes(){
	// console.log(localStorage)
	var secondScreen = document.createElement("DIV");
	
	
	var head = document.createElement("DIV")
		head.setAttribute("style", "display: inline-flex;color: white;font-size: 50px; padding:50px; padding-left:100px")
	
		var h1 = document.createElement("LABEL")
			h1.setAttribute("style","display: inline-flex;font-size: 50px;padding-top: 20px;padding-left: 20px")
			h1.innerHTML="Training"
		
		var img = new Image();
			img.src = "MiddleSplit.PNG"
			img.setAttribute("style","display: inline-flex;	height:120px")
		
		var flameArea = document.createElement("DIV")
			flameArea.setAttribute("style", "display: inline-flex")
			
			var flames = new Image();
				flames.src = "flame.png"
				flames.setAttribute("style","height:60px")
			
			var flameLabel = document.createElement("LABEL")
				flameLabel.setAttribute("style","font-size:30px")
				flameLabel.innerHTML="Number"
			
	var days = document.createElement("DIV")
		days.setAttribute("style","margin-left:10%")
	var checkArr=[]
	var checkState=[]
	var dayArr=[]
	for (i = 0; i < 30; i++) {
		
		checkArr.push([])
		checkState.push([])
		dayArr.push([])
		
		var day = document.createElement("LABEL")
			day.setAttribute("style","display: inline-block; margin: 1%; margin-bottom: 2%;width: 15%; height: 200px; background-color: lightSalmon;border: 5px solid darkSalmon");
			var topper=document.createElement("LABEL")
				topper.setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:white; border: 2px solid black; margin-bottom:3%;")
				topper.innerHTML="Tag "+(i+1)
			
			var content=document.createElement("DIV")
				content.setAttribute("style","padding-top:5%;font-size: 20px; color:black;display:block; height:64%;background-color:white;border:2px solid black")
			
		for(b=0;b<3;b++){
			checkState[i].push([])
			var check=document.createElement("Button")
				check.setAttribute("style","display:flex;align-items:flex-start;padding-left:20px;width:100%;background-color:transparent;border:0px solid transparent")
			var icon = new Image();
				icon.src="flame.png"
				icon.setAttribute("style","display:inline;width:15px;height:15px; float:left")
			var string=document.createElement("LABEL")
				string.setAttribute("style","display:inline;padding-left:10px;font-Size:20px;display:inline;color:black")
			switch (b) {
				case 0:
					string.innerHTML="100 Squats"
					break
				case 1:
					string.innerHTML="30 Push-Ups"
					break
				case 2:
					string.innerHTML="50 Crunches"
					break
			}		
					
			puf=i.toString()+b.toString()
			// state=localStorage.getItem(puf)
			// console.log(state)
			checkState[i][b]=false
			
			// console.log(checkState)
			checkArr[i].push(check)
		
			check.append(icon)
			check.append(string)
			content.append(check)
		}
		dayArr[i][0]=day
		dayArr[i][1]=topper
		dayArr[i][2]=content
					
			day.append(topper)
			day.append(content)
			
			
			days.appendChild(day)
	}
	
	flameArea.append(flames)
	flameArea.append(flameLabel)
	
	head.appendChild(img)
	head.appendChild(h1)
	head.appendChild(flameArea)
	secondScreen.appendChild(head)
	secondScreen.appendChild(days)
	document.body.appendChild(secondScreen)
	
	
	
	for (c=0; c<localStorage.length; c++){
		pufC=localStorage.key(c)
		checkState[pufC.slice(pufC.length-2, pufC.length-1)][pufC[pufC.length-1]]=true
		checkArr[pufC.slice(pufC.length-2, pufC.length-1)][pufC[pufC.length-1]].setAttribute("style","opacity:0.7;display:block;width:100%;background-color:lightgreen;border:0px solid transparent")
	}
	
	
	for (ab=0; ab<checkState.length; ab++){
		if(allChecked(checkState,ab)==true){
			dayArr[ab][1].setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:lightgreen; border: 2px solid black; margin-bottom:3%;")
			dayArr[ab][2].setAttribute("style","padding-top:5%;font-size: 20px; color:black;display:block; height:64%;background-color:lightgreen;border:2px solid black")
			for (d=0;d<3;d++){
				checkArr[ab][d].setAttribute("style","opacity:1;display:block;width:100%;background-color:lightgreen;border:0px solid transparent")
			}
			

		}else{
			dayArr[ab][1].setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:white; border: 2px solid black; margin-bottom:3%;")
			dayArr[ab][2].setAttribute("style","padding-top:5%;font-size: 20px; color:black;display:block; height:64%;background-color:white;border:2px solid black")
		}
	}
	
	doChecks(checkArr,checkState,dayArr)
		
}

function doChecks(checkArr,checkState,dayArr){
	
	for (i=0; i<checkState.length;i++){
		for(b=0;b<checkState[i].length;b++){
			listener(i,b,checkState,checkArr,dayArr)
		}
	}
	
}
function listener(i,b,checkState,checkArr,dayArr){
	checkArr[i][b].addEventListener('click', function() {
		puf=i.toString()+b.toString()
		if (localStorage.getItem(puf)!=null){
			checkState[i][b]=false
			checkArr[i][b].setAttribute("style","display:block;width:100%;background-color:white;border:0px solid transparent")
			localStorage.removeItem(puf)
		}else{
			checkState[i][b]=true
			checkArr[i][b].setAttribute("style","opacity:0.7;display:block;width:100%;background-color:lightgreen;border:0px solid transparent")
			localStorage.setItem(puf,true)
		}
		
		if(allChecked(checkState,i)==true){
			dayArr[i][1].setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:lightgreen; border: 2px solid black; margin-bottom:3%;")
			dayArr[i][2].setAttribute("style","padding-top:5%;font-size: 20px; color:black;display:block; height:64%;background-color:lightgreen;border:2px solid black")
			for (d=0;d<3;d++){
				checkArr[i][d].setAttribute("style","opacity:1;display:block;width:100%;background-color:lightgreen;border:0px solid transparent")
			}
			console.log("yeah")
		}else{
			dayArr[i][1].setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:white; border: 2px solid black; margin-bottom:3%;")
			dayArr[i][2].setAttribute("style","padding-top:5%; font-size: 20px; color:black;display:block; height:64%;background-color:white;border:2px solid black")
			console.log("nooo")
		}
	});

}

function allChecked(checkState,i){
	for(a=0; a<checkState[i].length;a++){
		
		if(checkState[i][a]==false){
			return false
		}
	}
	return true
	
}

function SplitButton(){
startScreen.style.display="none";
dayBoxes();

}

function FoodButton(){

}



