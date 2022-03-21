import { Icon } from '@iconify/react';
import React from 'react'

const ContactLink = ({ link, title, icon }) => {
  return (
		<a href={link} title={title} className="group">
			<Icon
				icon={icon}
				className={`w-[40px] h-auto text-white group-hover:scale-110 transition-all ease-out duration-200 cursor-pointer`}
			/>
		</a>
	);
}

export default ContactLink