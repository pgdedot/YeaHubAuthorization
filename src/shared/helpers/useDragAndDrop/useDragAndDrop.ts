export const useDragAndDrop = (onChange: (file: File) => void) => {
	const onDragOver = (e: React.DragEvent) => e.preventDefault();

	const onDrop = async (e: React.DragEvent) => {
		e.preventDefault();
		const file = e.dataTransfer.files?.[0];
		if (file) onChange(file);
	};

	return { onDragOver, onDrop };
};

export default useDragAndDrop;
