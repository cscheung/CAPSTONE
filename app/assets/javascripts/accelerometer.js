function start_tracking()
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
            "accelerometer_x: " + Math.round(o.x);
            
            document.getElementById("accelerometer_y").innerHTML = 
            "accelerometer_y: " + Math.round(o.y);
            
            document.getElementById("accelerometer_z").innerHTML = 
            "accelerometer_z: " + Math.round(o.z);
    
             
            document.getElementById("gyroscope_alpha").innerHTML = 
            "gyroscope_alpha: " + Math.round(o.alpha);
            
            document.getElementById("gyroscope_beta").innerHTML = 
            "gyroscope_beta: " + Math.round(o.beta);
            
            document.getElementById("gyroscope_gamma").innerHTML = 
            "gyroscope_gamma: " + Math.round(o.gamma);
        }
    );
}

function stop_tracking()
{
    gyro.stopTracking();
}

function put_values_in_article()
{
    
    document.getElementById("article_title").value = get_date();
    
    document.getElementById("article_text").value = 
        document.getElementById("orientation").innerHTML +
        "\n" +
        document.getElementById("accelerometer_x").innerHTML +
        "\n" +
        document.getElementById("accelerometer_y").innerHTML +
        "\n" +
        document.getElementById("accelerometer_z").innerHTML +
        "\n" +
        document.getElementById("accelerometer_x").innerHTML +
        "\n" +
        document.getElementById("gyroscope_alpha").innerHTML +
        "\n" +
        document.getElementById("gyroscope_beta").innerHTML +
        "\n" +
        document.getElementById("gyroscope_gamma").innerHTML ;
   
}

function get_date() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}

