<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/wp-config.php');
global $wpdb;
$tableName = $wpdb->prefix . 'icp_curtain_builder';
$wpdb->insert($tableName, array(
    'email' => 'd@d.com',
    'url' => 'kumkum@gmail.com',
    'time' => date('Y-m-d H:i:s')
));