<?php
/**
* Plugin Name: ICP Sereneview build curtain
* Plugin URI: https://www.sereneview.com/
* Description: Curtain Builder For ICP.
* Version: 0.1
* Author: bodhisattwa das
* Author URI: https://www.sereneview.com/
**/
session_start();
// define( 'WP_DEBUG', true );
// define( 'WP_DEBUG_DISPLAY', true );
// define( 'WP_DEBUG_LOG', true );
$mScenesArray = ["BP"=>"BeaverPond","FBc"=>"FiftyBalloons","IS"=>"Islamorada","MF"=>"MossbraeFalls",
			"PG"=>"PalmGrove","PL"=>"ParsonsLanding","SG"=>"StoutGrove","SM"=>"SummerMist",
			"TO"=>"TetonOverlook","YV"=>"YosemiteValley","NO"=>"NoScene"];
$mPatternArray = ["Dawn"=>"Dawn","Dusk"=>"Dusk","Rainbow"=>"Rainbow","Fall"=>"Fall","Winter"=>"Winter",
				"Beige"=>"Beige","Meadow"=>"Meadow","TanMeadow"=>"TanMeadow","TealFlower"=>"TealFlower",
				"Sky"=>"Sky","Circles"=>"Circles"];

$mScenesArrayOriginalName = ["BP"=>"Beaver Pond","FBc"=>"Fifty Balloons","IS"=>"Islamorada","MF"=>"Mossbrae Falls",
				"PG"=>"Palm Grove","PL"=>"Parsons Landing","SG"=>"Stout Grove","SM"=>"Summer Mist",
				"TO"=>"Teton Overlook","YV"=>"Yosemite Valley","NO"=>"No Scene"];
$mPatternArrayOriginalName = ["Beige"=>"Beige","Dawn"=>"Dawn","Dusk"=>"Dusk","Fall"=>"Fall",
					"Meadow"=>"Meadow","Rainbow"=>"Rainbow","Sky"=>"Sky","TanMeadow"=>"Tan Meadow",
					"TealFlower"=>"Teal Flower","Winter"=>"Winter","Circles"=>"Circles"];


global $jal_db_version;
$jal_db_version = '1.2';
add_action('admin_menu', 'test_plugin_setup_menu');
 
function test_plugin_setup_menu(){
    add_menu_page( 'ICP Builder', 'ICP Builder', 'manage_options', 'icp-builder', 'test_init' );
}
function test_init(){
	global $wpdb;
    $tableName = $wpdb->prefix . 'icp_curtain_builder';
	$query = "select * from ".$tableName;
	$results = $wpdb->get_results($query);
	$tableBody = '<link href="'.plugin_dir_url( __FILE__ ) . 'css/bootstrap.min.css'.'" rel="stylesheet">';
	foreach($results as $result){
		$tableBody .= '
		<tr>'.
                '<td>'.$result->id.'</td>'.
                '<td>'.$result->email.'</td>'.
                '<td><a href="'.$result->url.'" target="_blank">Download Image</a></td>'.
                '<td>'.$result->time.'</td>'.
            '</tr>
		';
	}
	$html = '
	<div class="container">
        <h2 class="text-center">Download Details</h2>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
        <table id="example" class="table table-striped" style="width:100%">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Curtain URL</th>
            <th scope="col">Time</th>
            </tr>
        </thead>
        <tbody>'.
        $tableBody
		.'</tbody>
        </table>
    </div>
    <div class="col-md-1"></div>
</div>
</div>
	';
	echo $html;

}
function jal_install() {
	global $wpdb;
	global $jal_db_version;

	$table_name = $wpdb->prefix . 'icp_curtain_builder';
	
	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE $table_name (
		id int(9) NOT NULL AUTO_INCREMENT,
		time datetime ,
		email varchar(255) ,
		url text ,
		PRIMARY KEY  (id)
	) $charset_collate;";

	require_once ABSPATH . 'wp-admin/includes/upgrade.php';
	dbDelta( $sql );

	add_option( 'jal_db_version', $jal_db_version );
}					
function my_shortcode() {
	
	global $mScenesArray,$mPatternArray,$mScenesArrayOriginalName,$mPatternArrayOriginalName;
	
	$_SESSION['mVar'] = "hello session";
	ob_start();
	$my_plugin_scene_path = plugin_dir_url( __FILE__ ) . 'scenes';
	$my_plugin_pattern_path = plugin_dir_url( __FILE__ ) . 'patterns';
	?> 
	<html> 
	<link href="<?php echo plugin_dir_url( __FILE__ ) . 'css/bootstrap.min.css';?>" rel="stylesheet">
	<link href="<?php echo plugin_dir_url( __FILE__ ) . 'css/custom.css';?>" rel="stylesheet">
	
	
	<!-- <div class="card mb-1">
			<div class="card-header" id="headingZero">
			<h2 class="card-title mb-0">
				<button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseZero" aria-expanded="false" aria-controls="collapseZero">
				<h4>How does it work?</h4>
				</button>
			</h2>
			</div>
			<div id="collapseZero" class="collapse" aria-labelledby="headingZero" >
			<div class="card-body">
			<div class="row m-1" >
			You may build your own sample curtains with our tool below.  It’s easy!
				<ol>
					<li>First, select the scene you would like for your main panel.</li>
					<li>Then, choose a pattern for the backside and any additional panels to cover the length of the track.</li>
					<li>Each panel is 9’/108”. Add additional 9’ panels to cover the length of the track.</li>
				</ol>
			</div>	
			</div>
			</div>
		</div> -->
		
	<div class="card mb-1">
			<div class="card-header" id="headingOne">
			<h2 class="card-title mb-0">
				<button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
				<h4>1. Choose the Rapid Refresh® Sereneview® Curtain Scene.</h4>
				<!-- <h4>1. Choose the Curtain scene</h4> -->
				</button>
			</h2>
			</div>
			<div id="collapseOne" class="collapse" aria-labelledby="headingOne" >
			<div class="card-body">
			<div class="row m-1">
								<?php foreach($mScenesArray as $key=>$element): ?>
								<div class="col-4">
								<div class="card mb-1 scene" id="<?php echo $key; ?>">
									<img src="<?php echo $my_plugin_scene_path; ?>/<?php echo $key; ?>_<?php echo $element; ?>.jpg" onClick="addScene('<?php echo $key; ?>')" role="button" class="img-thumbnail" alt="Responsive image">
									<div class="card-body p-1">
										<p class="card-text text-center text-uppercase"><?php echo $mScenesArrayOriginalName[$key]; ?></p>
										<!-- <p class="card-text text-center text-uppercase"><?php echo $mScenesArrayOriginalName[$key]; ?></p> -->
									</div>
								</div>	
								</div>
								<?php endforeach; ?>
							</div>	
			</div>
			</div>
		</div>

		<div class="card mb-1">
			<div class="card-header" id="headingTwo">
			<h5 class="card-title mb-0">
				<button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				<h4>2. Choose the Rapid Refresh® Armor™ Curtain Pattern.</h4>
				<!-- <h4>2. Choose Curtain Pattern</h4> -->
				</button>
			</h5>
			</div>
			<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" >
			<div class="card-body">
			<div class="row m-1" id="patternSelectorAlert">Please select the curtain scene first.</div>
			<div class="row m-1" id="patternSelector">
						<?php foreach($mPatternArray as $key=>$element): ?>
						<div class="col-4">
						<div class="card mb-1 pattern" id="<?php echo $key; ?>">
							<img src="<?php echo $my_plugin_pattern_path; ?>/<?php echo $element; ?>.png" onClick="addPattern('<?php echo $key; ?>')" role="button" class="img-thumbnail" alt="Responsive image">
							<div class="card-body p-1">
								<p class="card-text text-center text-uppercase"><?php echo $mPatternArrayOriginalName[$key]; ?></p>
							</div>
						</div>	
						</div>
						<?php endforeach; ?>
					</div>
			</div>
			</div>
		</div>

		<div class="card mb-1">
			<div class="card-header" id="headingThree">
			<h5 class="card-title mb-0">
				<button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
				<h4>3. Each panel is 9’/108” wide. Add additional 9’ panels to cover the length of the track.</h4>
				<!-- <h4>3. Select How many Panels do you want ?</h4> -->
				</button>
			</h5>
			</div>
			<div id="collapseThree" class="collapse" aria-labelledby="headingThree" >
			<div class="card-body">
			<div class="row m-1" id="numberButtonSelectorAlert">Please select the curtain pattern first.</div>
			<div class="row m-1" id="numberButtonSelector">
			<div class="btn-group-lg" role="group" aria-label="Basic radio toggle button group">
					<input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked onClick="addButton(1,'<?php  echo plugin_dir_url( __FILE__ );?>')">
					<label class="btn btn-outline-info" for="btnradio1">1</label>

					<input type="radio" class="btn-check" name="btnradio" id="btnradio2" onClick="addButton(2,'<?php  echo plugin_dir_url( __FILE__ );?>')">
					<label class="btn btn-outline-info" for="btnradio2">2</label>

					<input type="radio" class="btn-check" name="btnradio" id="btnradio3" onClick="addButton(3,'<?php  echo plugin_dir_url( __FILE__ );?>')">
					<label class="btn btn-outline-info" for="btnradio3">3</label>

					<input type="radio" class="btn-check" name="btnradio" id="btnradio4" onClick="addButton(4,'<?php  echo plugin_dir_url( __FILE__ );?>')">
					<label class="btn btn-outline-info" for="btnradio4">4</label>

					<!-- <input type="radio" class="btn-check" name="btnradio" id="btnradio5" onClick="addButton(5,'<?php  echo plugin_dir_url( __FILE__ );?>')">
					<label class="btn btn-outline-info" for="btnradio5">5</label> -->
				</div>	
			</div>		
			</div>
			</div>
		</div>


	<div class="card mb-1">
		<div class="card-header" id="headingFour">
		<h5 class="card-title mb-0">
			<button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
			<h4>4. Then you can click the blue SAVE THIS CURTAIN button and create another, or send yourself a preview of this one.</h4>
			<!-- <h4>4. Preview</h4> -->
			</button>
		</h5>
		</div>
		<div id="collapseFour" class="collapse" aria-labelledby="headingFour" >
		<div class="card-body">
			<div class="row m-1" id="previewSelectorAlert">Please complete previous steps and preview will be here.</div>  	
			<div class="row m-1" id="previewSelector"></div>  	
		</div>
		</div>
	</div>

	<div class="card mb-1">
		<div class="card-header" id="headingFive">
		<h5 class="card-title mb-0">
			<button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
			<h4>5. Review/Add more curtains</h4>
			</button>
		</h5>
		</div>
		<div id="collapseFive" class="collapse" aria-labelledby="headingFive" >
		<div class="card-body">
			<?php if (array_key_exists( 'mArray', $_SESSION ) &&  !empty($_SESSION['mArray'])): ?>
				<?php 
					$mArray = $_SESSION['mArray'];
			    ?>
				
					<table class="table">
						<thead>
							<tr>
							<th scope="col">#</th>
							<th scope="col">Scene</th>
							<th scope="col">Pattern</th>
							<th scope="col"># Panels</th>
							<th scope="col">Delete</th>
							<!-- <th scope="col">Edit</th> -->
							</tr>
						</thead>
						<tbody>
						<?php $counter = 1; ?>
						<?php foreach($mArray as $key=>$element): ?>
							
							<tr>
							<th scope="row"><?php echo $counter++; ?></th>
							<td>
								<div class="card mb-1 border-0" id="<?php echo $key; ?>">
									<img src="<?php echo $my_plugin_scene_path; ?>/<?php echo $element[0]; ?>_<?php echo $mScenesArray[$element[0]]; ?>.jpg" class="thumbnail" alt="Responsive image">
									<div class="card-body p-1">
										<p class="card-text text-center text-uppercase"><small><?php echo $mScenesArrayOriginalName[$element[0]]; ?></small></p>
									</div>
								</div>
							</td>
							<td>
							<div class="card mb-1 border-0" id="<?php echo $key; ?>">
								<img src="<?php echo $my_plugin_pattern_path; ?>/<?php echo $element[1]; ?>.png" class="thumbnail" alt="Responsive image">
								<div class="card-body p-1">
									<p class="card-text text-center text-uppercase"><small><?php echo $element[1]; ?></small></p>
								</div>
							</div>
							</td>
							<td class="align-middle text-center text-info">
								<h3><?php echo $element[2];?></h3>
							</td>
							<td class="align-middle text-center text-info"><button class="btn btn-sm btn-danger" onclick="deleteInfo(<?php echo $key; ?>)">Delete</button></td>
							</tr>
						<?php endforeach;?>	
						<?php //session_destroy(); ?>
						</tbody>
						</table>
						<!-- <div class="row m-1 text-danger"><h4>Enter your email to generate the preview and download it..</h4></div> -->
			<?php else : ?>
					<h3 style="color:red;">No curtains created yet..</h3><br>
			<?php endif;?>
			<div class="row m-1" id="addMoreSelector">
				<div class="row">
					<div class="col-md-6"><button style="width:100%" class="btn btn-info btn-lg btn-block" onclick="location.reload()"> Add more curtains</button></div>
					<div class="col-md-6"><?php if (array_key_exists( 'mArray', $_SESSION ) &&  !empty($_SESSION['mArray'])): ?><button style="width:100%" class="btn btn-danger btn-lg btn-block" onclick="clearAll()"> Delete all curtains</button><?php endif; ?></div>
				</div>
				<?php if (array_key_exists( 'mArray', $_SESSION ) &&  !empty($_SESSION['mArray'])): ?>
					<div class="mt-4 text-danger"><h4>Enter your email below to generate the preview and download it..</h4></div>
				<?php endif; ?>	
			</div>  	
		</div>
		</div>
	</div>

	<?php if (array_key_exists( 'mArray', $_SESSION ) &&  !empty($_SESSION['mArray'])): ?>
		<div class="card mb-1">
		<div class="card-header">
		<h5 class="card-title mb-0">
			
			<button class="btn btn-link collapsed text-secondary"  aria-expanded="false">
			<h4>6. Download and Mail me the PDF</h4>
			</button>
		</h5>
		</div>
		
		<div class="card-body">
		<div class="row m-1"><b>Enter an email below to download the PDF, it might that takes 5-10 secs. to generate.</b></div>
		<div class="row">
			<div class="col-6"><input class="form-control" type="mail" id="email" placeholder="Enter your mail here" required></div>
			<div class="col-4"><button type="button" class="btn btn-primary" onclick="makePDF('<?php  echo plugin_dir_url( __FILE__ );?>')">Mail me a copy!!</button></div>
			<div class="col-2"></div>
		</div>
		<div class="row">
			<small><b><p id="mMessage"></p></b></small>
		</div>
		<div class="row">
			<small class="text-info"><b>We’ll get you a quote based on your selection. If you need more information, call <a href="tel:800-405-3044">800-405-3044</a></b></small>
		</div>
		</div>
		</div>
		</div>
	<?php endif; ?>

	
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/jquery.js';?>"></script>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/bootstrap.bundle.min.js';?>"></script>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/private.js';?>"></script>
	</html>
	<?php
	return ob_get_clean();
}

add_shortcode('icp-sereneview', 'my_shortcode');
register_activation_hook( __FILE__, 'jal_install' );