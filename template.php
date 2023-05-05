<?php
//session_start();
$data = $_GET['var'];
$mArray = json_decode($data);

// print_r($mArray);
$mScenesArray = ["BP"=>"BeaverPond","FBc"=>"FiftyBalloons","IS"=>"Islamorada","MF"=>"MossbraeFalls",
			"PG"=>"PalmGrove","PL"=>"ParsonsLanding","SG"=>"StoutGrove","SM"=>"SummerMist",
			"TO"=>"TetonOverlook","YV"=>"YosemiteValley","NO"=>"NoScene"];

$mPatternArray = ["Dawn"=>"Dawn","Dusk"=>"Dusk","Rainbow"=>"Rainbow","Fall"=>"Fall","Winter"=>"Winter","Beige"=>"Beige",
                  "Meadow"=>"Meadow","TanMeadow"=>"TanMeadow","TealFlower"=>"TealFlower","Sky"=>"Sky","Circles"=>"Circles"];


$mScenesArrayOriginalName = ["BP"=>"Beaver Pond","FBc"=>"Fifty Balloons","IS"=>"Islamorada","MF"=>"Mossbrae Falls",
				"PG"=>"Palm Grove","PL"=>"Parsons Landing","SG"=>"Stout Grove","SM"=>"Summer Mist",
				"TO"=>"Teton Overlook","YV"=>"Yosemite Valley","NO"=>"No Scene"];
$mPatternArrayOriginalName = ["Beige"=>"Beige","Dawn"=>"Dawn","Dusk"=>"Dusk","Fall"=>"Fall",
					"Meadow"=>"Meadow","Rainbow"=>"Rainbow","Sky"=>"Sky","TanMeadow"=>"Tan Meadow",
					"TealFlower"=>"Teal Flower","Winter"=>"Winter","Circles"=>"Circles"];
 ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>Sereneview</title>
    <style>
      .img-thumbnail{
      width: 250px;
      overflow: hidden;
      margin: auto;
    }
    td{
      text-align : center;
      text-transform: uppercase;
      font-size: 10px;
    }
    </style>
  </head>

<body style="font-family: 'Lato', sans-serif;">
<div class="container">
<div class="row">
    <div class="col-sm-12" style="text-align: center;text-align: center;">
        <h1><img width="180" src="img/icp_logo.png">
          <!-- <small style="font-size: 12px;">Hospital Curtains | Scenic Overheads | Wall Treatments</small> -->
        </h1>
    </div>
</div>
<div class="row">
	<div class="col-sm-12">
		<div class="panel panel-default">
			<div class="panel-heading">
            <h3 style="text-align: center;">Your Curtain Preview</h3>
			</div>
				<div class="panel-body">
					<div class="row" style="text-align: center;">

						<?php foreach($mArray as $key=>$element): ?>
            <h4 style="text-align: center;">Curtain#<?php echo $key+1; ?></h2>
            <?php 
              $pluginDirURL = "http://".$_SERVER['SERVER_NAME']."/wp-content/plugins/build-curtain/";
              $scenePath = $pluginDirURL."scenes/".$element[0]."_".$mScenesArray[$element[0]].".jpg";
              $patternPath = $pluginDirURL."patterns/".$mPatternArray[$element[1]].".png";;
            ?>
            <table class="table" style="border:1px solid black;">
              <thead>
                <tr>
                  <th scope="col" style="text-align: center;">Front</th>
                  <th scope="col" style="text-align: center;">Back</th>
                  <th scope="col" style="text-align: center;"># Panels</th>
                </tr>
              </thead>
              <?php if($element[0] != 'NO'): ?>
              <tbody>
                <tr>
                  <td>
                    <img src="<?php echo $scenePath; ?>" class="img-thumbnail" ></img>
                    <figcaption><?php echo $mScenesArrayOriginalName[$element[0]]; ?></figcaption>
                  </th>
                  <td>
                    <img src="<?php echo $patternPath; ?>" class="img-thumbnail" ></img>
                    <figcaption><?php echo $mPatternArrayOriginalName[$element[1]]; ?></figcaption>
                  </td>
                  <td class="text-center align-middle text-info"><h2>1</h2></td>
                </tr>
                <?php if($element[2] >1): ?>
                  <tr>
                  <td>
                    <img src="<?php echo $patternPath; ?>" class="img-thumbnail" ></img>
                    <figcaption><?php echo $mPatternArrayOriginalName[$element[1]]; ?></figcaption>
                  </th>
                  <td>
                    <img src="<?php echo $patternPath; ?>" class="img-thumbnail" ></img>
                    <figcaption><?php echo $mPatternArrayOriginalName[$element[1]]; ?></figcaption>
                  </td>
                  <td class="text-center align-middle text-info"><h2><?php echo ($element[2]-1); ?></h2></td>
                </tr>
                <?php endif;?>
                
              </tbody>
              <?php else : ?>
                <tbody>
                <tr>
                  <td>
                    <img src="<?php echo $patternPath; ?>" class="img-thumbnail" ></img>
                    <figcaption><?php echo $mPatternArrayOriginalName[$element[1]]; ?></figcaption>
                  </th>
                  <td>
                    <img src="<?php echo $patternPath; ?>" class="img-thumbnail" ></img>
                    <figcaption><?php echo $mPatternArrayOriginalName[$element[1]]; ?></figcaption>
                  </td>
                  <td class="text-center align-middle text-info"><h2><?php echo ($element[2]); ?></h2></td>
                </tr>
                </tbody>
              <?php endif; ?>
            </table>
            <pagebreak>
            <?php endforeach; ?>
          </div>
			</div>
		</div>
	</div>
</div>
</div>
</body>
</html>
<? //require('_footer.php') ?>
