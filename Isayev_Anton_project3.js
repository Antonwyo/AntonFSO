//Isayev Anton 
// Project 3
// SDI 1209

var name = " Anton ";
var myfriends = [
				" Christian ", 
				" Curtis ", 
				" Val "
				]; 
var games =  [
			 " Left 4 Dead ",
			 " Diablo 3 ",	
		     " Serious Sam ",
		     " Borderlands "
		     ];
var json = {
			"friends" :[
			 {
			 "friend": " Curtis ",
			 "playertype": " good blocking ",
			 "role": " gunner " 
			 },
		     {
			 "friend": " Val ",
			 "playertype": " support ",
			 "role": " medic "
			 },
			 {
			 "friend": " Christian ",
			 "playertype": " sharpshooter ",
			 "role": " sniper "
			 }
			]
          };
var currenttime = 9;
var ammo = [
			90,
			75,
			100,
			150
			];
var survival =  [ " completed " ,
                   " failed "
                ] ;


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


//property array
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


//property boolean
var mission = function (s) {
var actual = true ;
	if (actual === true) {
          return survival = s[0];
}	else {
          return survival = s[1];
 	};
  };
	var reportactual = function(survival){
};


var playerrole = function(j){
  var player = "sniper";
  if (player = "sniper"){
     return  x = j.friends[2];
       }
  else {
  		if (player = "medic") {
     		return x = j.friends[1];
     		}
  else      {
  	 return x = j.friends[0];
  	 }
  }
}
var findplayer = playerrole(json); {
};


//var end = function(n, m){
//for (i = 0; i < 3; i++ )

//};
//var endofnight = end(name, myfrinds)

//main code

//property number
 var gt = counttime(currenttime); {
		console.log(" if we want to play " + gt.want + " missions we will finish at " +
		gt.endtime + " o'clock ")
};


 var tf = ammocountup(ammo); {
	console.log(" for a five minute fight we will use " + ammo + " bullets "   );		
};


// function 2
 var reportactual = mission(survival); {
	console.log(" We have " + survival + " the mission ");
};

var findplayer = playerrole(json)
    console.log(x)
