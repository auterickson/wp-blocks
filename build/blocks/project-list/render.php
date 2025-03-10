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
]);

if ($query->have_posts()) :
	?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<?php
			// Get ACF fields
			$project_image = get_field('project_image'); // Image field (returns array)
			$description = get_field('project_description'); // Text Area field
			$project_link = get_field('project_link'); // URL field
			$technologies = get_field('project_technologies'); // Text field

			// Get the image URL (ACF stores images as an array)
			$project_image_url = $project_image ? $project_image['url'] : 'https://via.placeholder.com/300';
			?>

			<div class="project-card" style="background-color: <?= esc_attr(isset($attributes['cardColor']) ? $attributes['cardColor'] : '#ffffff') ?>;">
				<!-- Project Image -->
				<div class="project-card-image">
					<img src="<?= esc_url($project_image_url); ?>" alt="<?= esc_attr(get_the_title()); ?>">
				</div>

				<!-- Project Content -->
				<div class="project-card-content">
					<h3 class="name" style="color: <?= esc_attr(isset($attributes['headingColor']) ? $attributes['headingColor'] : '#000000') ?>"><?= get_the_title(); ?></h3>

					<!-- View More Button -->
					<button class="view-more-btn" onclick="openModal(<?= get_the_ID(); ?>)">View More</button>
				</div>
			</div>

			<!-- Modal Structure -->
			<div class="modal" id="modal-<?= get_the_ID(); ?>" style="display: none;">
				<div class="modal-content">
					<span class="close-btn" onclick="closeModal(<?= get_the_ID(); ?>)">&times;</span>
					<h3 class="name" style="color: <?= esc_attr(isset($attributes['headingColor']) ? $attributes['headingColor'] : '#000000') ?>"><?= get_the_title(); ?></h3>
					<div class="description" style="color: <?= esc_attr(isset($attributes['textColor']) ? $attributes['textColor'] : '#000000') ?>;">
						<p><?= esc_html($description); ?></p>
					</div>
					<?php if ($technologies) : ?>
						<p><strong>Technologies Used:</strong> <?= esc_html($technologies); ?></p>
					<?php endif; ?>
					<?php if ($project_link) : ?>
						<a href="<?= esc_url($project_link); ?>" class="project-link" target="_blank" rel="noopener noreferrer">
							View Project
						</a>
					<?php endif; ?>
				</div>
			</div>

		<?php endwhile; ?>
	</div>

<?php endif; ?>
<?php wp_reset_postdata(); ?>

<script>
	// Open Modal
	function openModal(projectId) {
		const modal = document.getElementById(`modal-${projectId}`);
		modal.style.display = "block";
	}

	// Close Modal
	function closeModal(projectId) {
		const modal = document.getElementById(`modal-${projectId}`);
		modal.style.display = "none";
	}

	// Close modal when clicked outside the modal content
	window.onclick = function(event) {
		const modals = document.querySelectorAll('.modal');
		modals.forEach((modal) => {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		});
	}
</script>
