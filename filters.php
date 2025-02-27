<?php
function ae_add_borders( $block_content = '', $block = [] ) {
	$defaults =[
		'bcBorderStyle' => 'none',
		'bcPadding' => '10px',
		'bcWidth' => '10px',
		'bcRadius' => '10px',
		'bcColor' => 'black',
	];
	$attrs = array_merge($defaults, $block['attrs']);

	//only do this if borders style is set
	if($attrs['bcBorderStyle'] !== 'none') {
		$divStyle = "
			border-style: {$attrs['bcBorderStyle']};
			padding: {$attrs['bcPadding']}px;
			border-width: {$attrs['bcWidth']}px;
			border-radius: {$attrs['bcRadius']}px;
			border-color: {$attrs['bcColor']};
		";
		//wrap the block content with a div with these styles
		$block_content = '<div style="'.$divStyle.'">' . $block_content . '</div>';
	}
	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'ae_add_borders', 10, 2 );
