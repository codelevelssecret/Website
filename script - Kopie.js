var splitButton  = document.getElementById('split');
var foodButton  = document.getElementById('food');

var startScreen  = document.getElementById('startScreen');

function dayBoxes(){
	// console.log(localStorage)
	var secondScreen = document.createElement("DIV");
	
	
	var header = document.createElement("DIV")
		header.setAttribute("style", "display: inline-flex;color: white;font-size: 50px; padding:50px; padding-left:100px")
	
		var h1 = document.createElement("LABEL")
			h1.setAttribute("style","display: inline-flex;font-size: 50px;padding-top: 20px;padding-left: 20px")
			h1.innerHTML="Middle Split"
		
		var img = new Image();
			img.src = "MiddleSplit.PNG"
			img.setAttribute("style","display: inline-flex;	height:120px;")
		
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
				content.setAttribute("style","padding-left:10%;padding-right:2%; padding-top:5%; font-size: 20px; color:black;display:block; height:64%;background-color:white;border:2px solid black")
			
		for(b=0;b<3;b++){
			checkState[i].push([])
			var task=document.createElement("DIV")
			task.setAttribute("style","display:block")
			var check = document.createElement("INPUT");
				check.setAttribute("type", "checkbox");
				check.setAttribute("style","display:inline")
			var string=document.createElement("LABEL")
				string.setAttribute("style","padding-left:5%;display:inline;color:black")
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
		
			task.append(check)
			task.append(string)
			content.append(task)
		}
		dayArr[i][0]=day
		dayArr[i][1]=topper
		dayArr[i][2]=content
					
			day.append(topper)
			day.append(content)
			
			
			days.appendChild(day)
	}
	
	
	header.appendChild(img)
	header.appendChild(h1)
	secondScreen.appendChild(header)
	secondScreen.appendChild(days)
	document.body.appendChild(secondScreen)
	for (c=0; c<localStorage.length; c++){
		pufC=localStorage.key(c)
		// console.log(pufC.slice(pufC.length-2, pufC.length-1))
		// console.log(pufC[pufC.length-1])
		checkState[pufC.slice(pufC.length-2, pufC.length-1)][pufC[pufC.length-1]]=true
		checkArr[pufC.slice(pufC.length-2, pufC.length-1)][pufC[pufC.length-1]].setAttribute("checked","checked")
	}
	
	
	for (ab=0; ab<checkState.length; ab++){
		if(allChecked(checkState,ab)==true){
			dayArr[ab][1].setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:lightgreen; border: 2px solid black; margin-bottom:3%;")
			dayArr[ab][2].setAttribute("style","padding-left:10%;padding-right:2%; padding-top:5%; font-size: 20px; color:black;display:block; height:64%;background-color:lightgreen;border:2px solid black")
			console.log("yeah")
		}else{
			dayArr[ab][1].setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:white; border: 2px solid black; margin-bottom:3%;")
			dayArr[ab][2].setAttribute("style","padding-left:10%;padding-right:2%; padding-top:5%; font-size: 20px; color:black;display:block; height:64%;background-color:white;border:2px solid black")
			console.log("nooo")
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
	checkArr[i][b].addEventListener('change', function() {
		puf=i.toString()+b.toString()
		
		if (this.checked) {
			localStorage.setItem(puf,true)
			checkState[i][b]=true
		} else {
			checkState[i][b]=false
			localStorage.removeItem(puf)
			
		}
		if(allChecked(checkState,i)==true){
			dayArr[i][1].setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:lightgreen; border: 2px solid black; margin-bottom:3%;")
			dayArr[i][2].setAttribute("style","padding-left:10%;padding-right:2%; padding-top:5%; font-size: 20px; color:black;display:block; height:64%;background-color:lightgreen;border:2px solid black")
			console.log("yeah")
		}else{
			dayArr[i][1].setAttribute("style","display:block;text-align:center;font-size:30px; color:black; height:25%; background-color:white; border: 2px solid black; margin-bottom:3%;")
			dayArr[i][2].setAttribute("style","padding-left:10%;padding-right:2%; padding-top:5%; font-size: 20px; color:black;display:block; height:64%;background-color:white;border:2px solid black")
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



