const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

// Detect when drag started and make the moving draggable blur
draggables.forEach((draggable) => {
	draggable.addEventListener('dragstart', () => {
		draggable.classList.add('dragging');
	});

	draggable.addEventListener('dragend', () => {
		draggable.classList.remove('dragging');
	});
});

// Add draggable box into the container when draggover
containers.forEach((container) => {
	container.addEventListener('dragover', (e) => {
		e.preventDefault();
		const draggable = document.querySelector('.dragging');
		container.appendChild(draggable);
	});
});
