<?php
	$count_my_page = ("imagelibrary_counter.txt");
	$hits = file($count_my_page);
	$hits[0] ++;
	$fp = fopen($count_my_page , "w");
	fputs($fp , "$hits[0]");
	fclose($fp);
	echo $hits[0];
?>