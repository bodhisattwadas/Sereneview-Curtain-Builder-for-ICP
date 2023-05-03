<?php
/**
* Plugin Name: ICP Sereneview build curtain
* Plugin URI: https://www.your-site.com/
* Description: Test.
* Version: 0.1
* Author: bodhisattwa das
* Author URI: https://www.your-site.com/
**/
session_start();
$mScenesArray = ["BP"=>"BeaverPond","FBc"=>"FiftyBalloons","IS"=>"Islamorada","MF"=>"MossbraeFalls",
			"PG"=>"PalmGrove","PL"=>"ParsonsLanding","SG"=>"StoutGrove","SM"=>"SummerMist",
			"TO"=>"TetonOverlook","YV"=>"YosemiteValley"];
$mPatternArray = ["Beige"=>"Beige","Dawn"=>"Dawn","Dusk"=>"Dusk","Fall"=>"Fall",
				"Meadow"=>"Meadow","Rainbow"=>"Rainbow","Sky"=>"Sky","TanMeadow"=>"TanMeadow",
				"TealFlower"=>"TealFlower","Winter"=>"Winter"];

$mScenesArrayOriginalName = ["BP"=>"Beaver Pond","FBc"=>"Fifty Balloons","IS"=>"Islamorada","MF"=>"Mossbrae Falls",
				"PG"=>"Palm Grove","PL"=>"Parsons Landing","SG"=>"Stout Grove","SM"=>"Summer Mist",
				"TO"=>"Teton Overlook","YV"=>"Yosemite Valley"];
$mPatternArrayOriginalName = ["Beige"=>"Beige","Dawn"=>"Dawn","Dusk"=>"Dusk","Fall"=>"Fall",
					"Meadow"=>"Meadow","Rainbow"=>"Rainbow","Sky"=>"Sky","TanMeadow"=>"Tan Meadow",
					"TealFlower"=>"Teal Flower","Winter"=>"Winter"];
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
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

		<div class="card mb-1">
			<div class="card-header" id="headingOne">
			<h2 class="card-title mb-0">
				<button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
				<h4>1. Choose the Curtain scene</h4>
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
				<h4>2. Choose Curtain Pattern</h4>
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
				<h4>3. Select How many Panels do you want ?</h4>
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
			<h4>4. Preview</h4>
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
							<td class="align-middle text-center text-info"><button class="btn btn-sm btn-danger" onclick="deleteInfo(<?php echo $key; ?>)"><i class="fa fa-trash-o fa-lg"></i></button></td>
							</tr>
						<?php endforeach;?>	
						<?php //session_destroy(); ?>
						</tbody>
						</table>
			
			<?php else : ?>
					<h3>No curtains created yet..</h3>
			<?php endif;?>
			<div class="row m-1" id="addMoreSelector">
				<button class="btn btn-info" onclick="location.reload()"><i class="fa fa-plus"></i> Add more curtains</button>
			</div>  	
		</div>
		</div>
	</div>

	<?php if (array_key_exists( 'mArray', $_SESSION ) &&  !empty($_SESSION['mArray'])): ?>
		<div class="card mb-1">
		<div class="card-header">
		<h5 class="card-title mb-0">
			<button class="btn btn-link collapsed text-secondary"  aria-expanded="false">
			<h4>6. Mail me the PDF</h4>
			</button>
		</h5>
		</div>
		
		<div class="card-body">
		<div class="row">
			<div class="col-4"><input class="form-control" type="mail" id="email" placeholder="Enter your mail here"></div>
			<div class="col-4"><button type="button" class="btn btn-primary" onclick="makePDF('<?php  echo plugin_dir_url( __FILE__ );?>')">Mail me a copy!!</button></div>
			<div class="col-4"></div>
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