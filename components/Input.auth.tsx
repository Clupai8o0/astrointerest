import React from "react";
import { Icon } from "@iconify/react";

interface Props {
	title: string;
	type: string;
	icon: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ title, type, icon, value, setValue }: Props) => {
	return (
		<div className="my-1 w-full">
			<label htmlFor={title} className="capitalize">
				{title}
			</label>
			<div className=" border rounded-md py-2 px-2 mt-1 flex">
				<input
					type={type}
					name={title}
					id={title}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className="w-full bg-transparent outline-none"
				/>
				<Icon icon={icon} className="h-6 w-6 text-white ml-1" />
			</div>
		</div>
	);
};

export default Input;
