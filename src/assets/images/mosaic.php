<?php
$url = 'images/appbanner.jpg';
/**
 * Turn an image into a mosaic
 * @param string $url Path to the image
 * @param int $sharpness Sample every x pixels. The td outputs will be x pixels high and wide
 * @param boolean $use_rgba Use rgba instead of hex (probably won't work for a lot of email providers)
 * @return string The table that will replicate the image
 */
function mosaic($url, $sharpness = 5, $use_rgba = false) {
    list($w, $h, $type) = getimagesize($url);
    $resource = imagecreatefromstring(file_get_contents($url));
    //create the image the 
    $img = '<table style="border-collapse: collapse; height:' . $h . 'px; width:' . $w . 'px; ">';
    for ($y = 0; $y < $h; $y+=$sharpness) {
        $img .= '<tr>';
        for ($x = 0; $x < $w; $x+=$sharpness) {
            $color = imagecolorat($resource, $x, $y);
            //get an rgba colour
            $rgba = imagecolorsforindex($resource, $color);
            $rgba['alpha'] = 1 - $rgba['alpha'];
            $colour_string = $use_rgba? 'rgba('.implode(',',$rgba).')':rgb2hex($rgba);
            $img .= '<td style="background:' . $colour_string . ';"></td>';
        }
        $img .= '</tr>';
    }
    $img .= '</table>';
    return $img;
}
/**
 * Convert an rgb array to a hex string
 * @param array $rgba Format array('red'=>N1, 'green'=>N2, 'blue'=>N3, 'alpha'=>N4);
 * @return type 
 */
function rgb2hex(array $rgb) {
    if(isset($rgb['alpha'])){
        unset($rgb['alpha']);
    }
    $out = "";
    foreach ($rgb as $c) {
        $hex = base_convert($c, 10, 16);
        $out .= ($c < 16) ? ("0" . $hex) : $hex;
    }
    return '#'.strtoupper($out);
}
?>
<style>
    td{
        padding:0;
        overflow:hidden;
    }
</style>
<?php
echo mosaic($url);