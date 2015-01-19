function accelerometer()
{
    
window.addEventListener("orientationchange", function() 
    {
        document.getElementById("orientation").innerHTML = "orientation: " + (window.orientation);
    },
                        
    false);


gyro.frequency = 100;

gyro.startTracking(function(o) 
    {
        document.getElementById("accelerometer_x").innerHTML = 
        "accelerometer_x: " + o.x;
        
        document.getElementById("accelerometer_y").innerHTML = 
        "accelerometer_y: " + o.y;
        
        document.getElementById("accelerometer_z").innerHTML = 
        "accelerometer_z: " + o.z;

         
        document.getElementById("gyroscope_alpha").innerHTML = 
        "gyroscope_alpha: " + o.alpha;
        
        document.getElementById("gyroscope_beta").innerHTML = 
        "gyroscope_beta: " + o.beta;
        
        document.getElementById("gyroscope_gamma").innerHTML = 
        "gyroscope_gamma: " + o.gamma;
    });
}

