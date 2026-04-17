import { useEffect, useState } from "react";

export const useModal = (trigger: boolean) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (trigger) setIsOpen(true);
	}, [trigger]);
  
  const handleClose = () => setIsOpen(false);

  return {isOpen, handleClose}
};

