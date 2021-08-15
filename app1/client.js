var IPAddr = "192.168.189.50";
var port = "8000";

var io = require('socket.io-client');
var socket = io.connect(`http://${IPAddr}:${port}`);

const Cylon = require("cylon");

var isSwiping = false;
var isCircling = false;
var isScreenTapping = false;
var isKeyTapping = false;

var swipeDelay = 500;
var circleDelay = 500;
var screenTapDelay = 250;
var keyTapDelay = 100;

var circleRadius = 20;


console.log('Setting up Leap Motion');

Cylon.robot({
    connections: {
        leapmotion: { adaptor: 'leapmotion' }
    },

    devices: {
        leapmotion: { driver: 'leapmotion' }
    },


    work: function(my) {
        my.leapmotion.on("frame", function(frame) {
        // console.log("frame")


            // loop through available gestures
            for(var i = 0; i < frame.gestures.length; i++){
                var gesture = frame.gestures[i];
                var type    = gesture.type; 
            
                switch( type ){
            
                    case "swipe":
                        if(!isSwiping)
                        {
                            isSwiping=true;
                            handleSwipe(gesture)
                        }    
                    break;   

                    case "circle":
                        if(!isCircling && gesture.radius >= circleRadius)
                        {    
                            isCircling=true;
                            handleCircle(gesture)
                        }
                    break;
                
                    case "screenTap":
                        if(!isScreenTapping)
                        {    
                            isScreenTapping=true;
                            handleScreenTap(gesture)
                        }
                    break;

                    case "keyTap":
                        if(!isKeyTapping)
                        {    
                            isKeyTapping=true;
                            handleKeyTap(gesture)
                        }
                    break;  
                }
            }
        });
    }
}).start();

function handleSwipe (swipe){
        //Classify swipe as either horizontal or vertical
        var isHorizontal = Math.abs(swipe.direction[0]) > Math.abs(swipe.direction[1]);

        if(isHorizontal)
        {
            if (swipe.direction[0] > 0){
                //this means that the swipe is to the right direction
                slideTimer = setTimeout(function(){
                    console.log("swipe right");
                    socket.emit("gesture", "swipe right");  
                    isSwiping = false;
                },swipeDelay);
            }
            else {
                //this means that the swipe is to the left direction
                slideTimer = setTimeout(function(){
                    console.log("swipe left");
                    socket.emit("gesture", "swipe left");
                    isSwiping = false;
                }, swipeDelay);
            }
        }
        else{
            if (swipe.direction[1] > 0){
                //this means that the swipe is to the right direction
                slideTimer = setTimeout(function(){
                    console.log("swipe up");
                    socket.emit("gesture", "swipe up");
                    isSwiping = false;
                }, swipeDelay);
            }
            else {
                //this means that the swipe is to the left direction
                slideTimer = setTimeout(function(){
                    console.log("swipe down");
                    socket.emit("gesture", "swipe down");
                    isSwiping = false;
                }, swipeDelay);
            }
        }     
}
function handleCircle (circle){

    if(circle.normal[2] < 0)
    {
        slideTimer = setTimeout(function(){
            console.log("circle clockwise");
            socket.emit("gesture", "circle clockwise");    
            isCircling = false;
        }, circleDelay);
        
    }
    else
    {
        slideTimer = setTimeout(function(){
            console.log("circle counterclockwise");
            socket.emit("gesture", "circle counterclockwise");    
            isCircling = false;
        }, circleDelay);
    }
    
}
function handleScreenTap (screenTap){


    slideTimer = setTimeout(function(){
        console.log("screen tap");
        socket.emit("gesture", "screen tap");    
        isScreenTapping = false;
    }, screenTapDelay);
    
}
function handleKeyTap (keyTap){

    slideTimer = setTimeout(function(){
        console.log("key tap");
        socket.emit("gesture", "key tap");    
        isKeyTapping = false;
    }, keyTapDelay);
    
}

console.log('Connected to Leap Motion');