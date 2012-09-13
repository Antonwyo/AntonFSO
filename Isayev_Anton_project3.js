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
var ammo = [
			90,
			75,
			100,
			150
			];



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
};


var ammocountup = function(a) {
var tf = {

			"name":         "firefight",
			"duration":         5,
			"if-run":           2,
			"norm":             3
    	  }

	for (tf.duration ; ammo[1] < ammo[3]; ammo[1] +=5) {
	if (ammo[1] = ammo[3]); {
		return ammo ;
	};	
  };
};
var getarrtime = function(ammo){	
};	





//main code

//property number
var gt = counttime(currenttime); {
		console.log(" if we want to play " + gt.want + " missions we will finish at " +
		gt.endtime + " o'clock ")
};


 var tf = ammocountup(ammo); {
	console.log(" for a five minute fight we will use " + ammo + " bullets "   );		
};
