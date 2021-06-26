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
		const afterElement = getDragAfterElement(container, e.clientY);
		console.log(afterElement);
		const draggable = document.querySelector('.dragging');
		// if (afterElement === null) {
		// container.appendChild(draggable);
		// } else {
		container.insertBefore(draggable, afterElement);
		// }
	});
});

// Make it in order using mouse position.
function getDragAfterElement(container, y) {
	const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

	return draggableElements.reduce(
		(closest, child) => {
			const box = child.getBoundingClientRect();
			const offset = y - box.top - box.height / 2; // exact center of the box
			if (offset < 0 && offset > closest.offset) {
				console.log(offset, child);
				return { offset: offset, element: child };
			} else {
				console.log(closest);
				return closest;
			}
		},
		{ offset: Number.NEGATIVE_INFINITY }
	).element;
}
