import { Select } from "@/shared/ui/Select";
import { useFormContext } from "react-hook-form";
import { useGetSpecializationsListQuery } from "../../api/specializationApi";
import { FormField } from "@/shared/ui/FormField";

const SpecializationSelect = () => {
	const { control } = useFormContext();
	const { data: specializations } = useGetSpecializationsListQuery({});

	return (
		<>
			<FormField
				name="specialization"
				label="IT специализация"
				control={control}
				render={({ value, onChange }) => (
					<Select
						value={value}
						onChange={onChange}
						options={
							specializations?.data?.map((item) => ({
								value: item.id,
								title: item.title,
							})) || []
						}
					/>
				)}
			/>
		</>
	);
};

export default SpecializationSelect;
