<?php
/**
* Plugin Name: build-curtain
* Plugin URI: https://www.your-site.com/
* Description: Test.
* Version: 0.1
* Author: bodhisattwa das
* Author URI: https://www.your-site.com/
**/
$mArray = ["BP"=>"BP_BeaverPond.jpg","FBc"=>"FBc_FiftyBalloons"];
function my_shortcode() {
	global $mArray;
	ob_start();
	$my_plugin_scene = plugin_dir_url( __FILE__ ) . 'scenes';
	$my_plugin_pattern = plugin_dir_url( __FILE__ ) . 'patterns';
	?> 
	<html> 
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
	<div class="container-xl">
	<div class="card m-3">
  		<div class="card-header">
		  1. Choose the Curtain scene
  	</div>
  	<div class="card-body">
			<div class="row">
				<div class="col-sm">
				<div class="card">
					<img src="<?php echo $my_plugin_scene; ?>/BP_BeaverPond.jpg" onClick="addScene('BP')" role="button" class="img-thumbnail" alt="Responsive image">
					<div class="card-body">
						<p class="card-text">BP_BeaverPond</p>
					</div>
				</div>
					
				</div>
				<div class="col-sm">
				<div class="card">
				<img src="<?php echo $my_plugin_scene; ?>/FBc_FiftyBalloons.jpg" onClick="addScene('FB')" role="button" class="img-thumbnail" alt="Responsive image">
					<div class="card-body">
						<p class="card-text">FBc_FiftyBalloons</p>
					</div>
				</div>
				
				</div>
				<div class="col-sm">
					One of three columns
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					One of three columns
				</div>
				<div class="col-sm">
					One of three columns
				</div>
				<div class="col-sm">
					One of three columns
				</div>
			</div>
  	</div>
	</div>
	<div class="card m-3">
  		<div class="card-header">
		  2. Choose Curtain Pattern
  	</div>
  	<div class="card-body">
	  
  	</div>
	</div>
	<div class="card m-3">
  		<div class="card-header">
		  3. Select How many Panels do you want ?
  	</div>
  	<div class="card-body">
	  No content
  	</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.6.4.js"></script>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/private.js';?>"></script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script> -->
	</html>
	<?php
	return ob_get_clean();
}

add_shortcode('tbare-plugin-demo', 'my_shortcode');