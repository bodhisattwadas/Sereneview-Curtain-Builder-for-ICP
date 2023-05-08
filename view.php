<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
$tableName = $wpdb->prefix . 'icp_curtain_builder';
$query = "select * from ".$tableName;
$results = $wpdb->get_results($query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="<?php echo plugin_dir_url( __FILE__ ) . 'css/bootstrap.min.css';?>" rel="stylesheet">
    <link href="<?php echo plugin_dir_url( __FILE__ ) . 'css/dataTables.bootstrap5.min.css';?>" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h2 class="text-center">Download Details</h2>
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <table id="example" class="table table-striped" style="width:100%">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Curtain URL</th>
            <th scope="col">Time</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($results as $key=>$result): ?>
            <tr>
                <td><?php echo $result->id; ?></td>
                <td><?php echo $result->email; ?></td>
                <td><a href="<?php echo $result->url; ?>" target="_blank">Download Image</a></td>
                <td><?php echo $result->time; ?></td>
            </tr>
            <?php endforeach; ?>
            
        </tbody>
        </table>
    </div>
    <div class="col-md-2"></div>
</div>
</div>
<script>
    $(document).ready(function () {
        $('#example').DataTable();
    });
    <script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/jquery.js';?>"></script>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/bootstrap.bundle.min.js';?>"></script>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/dataTables.bootstrap5.min.js';?>"></script>
	<script src="<?php echo plugin_dir_url( __FILE__ ) . 'scripts/jquery.dataTables.min.js';?>"></script>
    
</script>
</body>
</html>