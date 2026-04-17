export const getErrorMessage = (error: unknown): string => {
	if (!error) return "Неизвестная ошибка";

	if (typeof error === "object" && error !== null) {
		if ("data" in error) {
			const err = error as { data?: { message?: string } };
			return err.data?.message || "Ошибка сервера";
		}

		if ("message" in error) {
			const err = error as { message?: string };
			return err.message || "Ошибка";
		}
	}

	return "Что-то пошло не так";
};
