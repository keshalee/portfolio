<?php
    if (extension_loaded('mysqli')) {
        echo "GOOD";
    } else {
    	echo "fail";	
    }
    
    phpinfo();
?>