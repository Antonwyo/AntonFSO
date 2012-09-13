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
 	var gt = { 
 		
 		 "name":     "playtime",
 		 "time":     1,
 		 "want":     3,
 		 "endtime":  12
        };
  
		while (gt.endtime > c)  { 
		c = c + gt.time ; 
		if (c = gt.endtime)  {
			return gt ;	
      };		
	}; 
 };
 var reportcount = function(currenttime){
		console.log(" if we want to play " + gt.want + " missions we will finish at " +
		gt.endtime + " o'clock ")
};





//main code

//property number
var gt = counttime(currenttime); {
		console.log(" if we want to play " + gt.want + " missions we will finish at " +
		gt.endtime + " o'clock ")
}; 