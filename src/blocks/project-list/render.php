<?php
/**
 * Variables WP gives us
 * @var array $attributes Array of block attributes
 * @var string $content The Post content from the save function
 */
$query = new WP_Query([
		'post_type' => 'project',
		'orderby' => 'title',
		'order' => 'ASC',
	]
)
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while($query->have_posts()) : $query->the_post(); ?>
		<div class="project-card" style="background-color: <?= $attributes['cardColor']?>">
			<div class="project-card-image">
				<?php echo get_the_post_thumbnail(get_the_ID(), 'medium'); ?>
			</div>
			<div class="project-card-content">
				<h3 class="name" style="color: <?= $attributes['headingColor'] ?>"><?= get_the_title() ?> </h3>
				<div class="description" style="color: <?= $attributes['textColor'] ?>">
					<p><?= get_post_meta(get_the_ID(), 'project_description', true); ?></p>
				</div>
			</div>
				</div>
	<?php endwhile; ?>

</div>


