//Isayev Anton 
// Project 3
// SDI 1209

var myname = " Anton ";
var myfriends = [
				" Christian ", 
				" Curtis ", 
				" Val "
				]; 
var PC = 4 ;
var games =  [
			 " Left 4 Dead ",
			 " Diablo 3 ",	
		     " Serious Sam ",
		     " Borderlands "
		     ];
var json = [
			{
			 friend: " Curtis ",
			 playertype: " good blocking ",
			 role: " gunner " 
			},
			{
			 friend: " Val ",
			 playertype: " support ",
			 role: " medic "
			},
			{
			 friend: " Christian ",
			 playertype: " sharpshooter ",
			 role: " sniper "
			}
           ];
var currenttime = 9;


//property number

 
	var counttime = function(c)  { 
	var missionsperhour = 1;
	var endtime = 12;
		while (endtime > c)  { 
		c = c + missionsperhour ; 
		if (c = endtime)  {
		return endtime ; 
      };		
	}; 
 };
 var reportcount = function(currenttime){
		console.log(" We will finish " + endtime + " o'clokc ")
};





//main code


var endtime = counttime(currenttime); {
	console.log(" We will finish " + endtime + " o'clokc ")
};