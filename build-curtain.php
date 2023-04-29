<?php
/**
* Plugin Name: build-curtain
* Plugin URI: https://www.your-site.com/
* Description: Test.
* Version: 0.1
* Author: bodhisattwa das
* Author URI: https://www.your-site.com/
**/
$mScenesArray = ["BP"=>"BeaverPond","FBc"=>"FiftyBalloons","IS"=>"Islamorada","MF"=>"MossbraeFalls",
			"PG"=>"PalmGrove","PL"=>"ParsonsLanding","SG"=>"StoutGrove","SM"=>"SummerMist",
			"TO"=>"TetonOverlook","YV"=>"YosemiteValley"];
$mPatternArray = ["Beige"=>"Beige","Dawn"=>"Dawn","Dusk"=>"Dusk","Fall"=>"Fall",
				"Meadow"=>"Meadow","Rainbow"=>"Rainbow","Sky"=>"Sky","TanMeadow"=>"TanMeadow",
				"TealFlower"=>"TealFlower","Winter"=>"Winter"];
function my_shortcode() {
	global $mScenesArray,$mPatternArray;
	ob_start();
	$my_plugin_scene_path = plugin_dir_url( __FILE__ ) . 'scenes';
	$my_plugin_pattern_path = plugin_dir_url( __FILE__ ) . 'patterns';
	?> 
	<html> 
	<link href="<?php echo plugin_dir_url( __FILE__ ) . 'css/bootstrap.min.css';?>" rel="stylesheet">
	<link href="<?php echo plugin_dir_url( __FILE__ ) . 'css/custom.css';?>" rel="stylesheet">
	<div id="accordion">

	<div class="card mb-1">
		<div class="card-header" id="headingOne">
		<h5 class="mb-0">
			<button class="btn btn-link text-secondary" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
			<b>1. Choose the Curtain scene</b>
			</button>
		</h5>
		</div>

		<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" >
		<div class="card-body">
					<div class="row m-1">
						<?php foreach($mScenesArray as $key=>$element): ?>
						<div class="col-4">
						<div class="card mb-1">
							<img src="<?php echo $my_plugin_scene_path; ?>/<?php echo $key; ?>_<?php echo $element; ?>.jpg" onClick="addScene('<?php echo $key; ?>')" role="button" class="img-thumbnail" alt="Responsive image">
							<div class="card-body p-1">
								<p class="card-text text-center text-uppercase"><small><?php echo $element; ?></small></p>
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
      <h5 class="mb-0">
        <button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
		<b>2. Choose Curtain Pattern</b>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" >
	<div class="card-body">
	  <div class="row m-1" id="patternSelectorAlert">Please select the curtain scene first.</div>
	  <div class="row m-1" id="patternSelector">
				<?php foreach($mPatternArray as $key=>$element): ?>
				<div class="col-4">
				<div class="card mb-1">
					<img src="<?php echo $my_plugin_pattern_path; ?>/<?php echo $element; ?>.png" onClick="addPattern('<?php echo $key; ?>')" role="button" class="img-thumbnail" alt="Responsive image">
					<div class="card-body p-1">
						<p class="card-text text-center text-uppercase"><small><?php echo $element; ?></small></p>
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
      <h5 class="mb-0">
        <button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
		<b>3. Select How many Panels do you want ?</b>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" >
      <div class="card-body">
	  <div class="row m-1" id="numberButtonSelectorAlert">Please select the curtain pattern first.</div>
	  <div class="row m-1" id="numberButtonSelector">
	  <div class="btn-group-lg" role="group" aria-label="Basic radio toggle button group">
			<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
			<label class="btn btn-outline-info" for="btnradio1">1</label>

			<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
			<label class="btn btn-outline-info" for="btnradio2">2</label>

			<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
			<label class="btn btn-outline-info" for="btnradio3">3</label>

			<input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
			<label class="btn btn-outline-info" for="btnradio4">4</label>

			<input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
			<label class="btn btn-outline-info" for="btnradio5">5</label>
		</div>	
	</div>		
      </div>
    </div>
  </div>


  <div class="card mb-1">
    <div class="card-header" id="headingFour">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed text-secondary" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
		<b>4. Preview</b>
        </button>
      </h5>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" >
      <div class="card-body">
	  	<div class="row m-1" id="previewSelectorAlert">Please complete previous steps and preview will be here.</div>  	
      </div>
    </div>
  </div>
</div>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/jquery.js';?>"></script>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/bootstrap.bundle.min.js';?>"></script>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/private.js';?>"></script>
	</html>
	<?php
	return ob_get_clean();
}

add_shortcode('tbare-plugin-demo', 'my_shortcode');