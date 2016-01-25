<?php
/**
 * Created by PhpStorm.
 * User: Fer
 * Date: 25/01/2016
 * Time: 20:54
 */

$jsondata = array();

if( isset($_GET['param']) ) {

    if( $_GET['param'] == 'valor' ) {

        $jsondata['success'] = true;
        $jsondata['message'] = 'Hola! El valor recibido es correcto.';

    } else {

        $jsondata['success'] = false;
        $jsondata['message'] = 'Hola! El valor recibido no es correcto.';

    }

    //Aunque el content-type no sea un problema en la mayoría de casos, es recomendable especificarlo
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata);


} else {
    echo 'mierda';
}

?>