<?php

//if(isset($_POST['submit'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	$mailTo = "admin@vidhimarketing.com";

	$header = "From: ".$email;

	$txt = "Name: ".$name.".\n\n Phone Number: ".$phone;
	$subject = "Message: ".$message;

	//mail($mailTo, $header, $txt, $subject);
	//header("Locations: contact.php");

	if(mail($mailTo, $header, $txt, $subject)){
        print "<p class='success' style='background: green; padding:10px; color:white;'>Mail Sent.</p>";
    } else {
        print "<p class='error' style='background: orange; padding:10px; color:white;'>Problem in Sending Mail.</p>";
    }


?>