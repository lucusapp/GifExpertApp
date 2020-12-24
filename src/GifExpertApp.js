import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {Gifgrid} from './components/GifGrid';

export const GifExpertApp = () => {

	const [categories, setCategories] = useState([
		'One Punch'

	]);
	// const handleAdd = () => {
	// 	//  setCategories([...categories, 'Hunterxhunter'])
	// 	setCategories((cats) => [...cats, 'HunterxHunter']);
	// };

	return (
		<> 
			<h2>GifExpertApp</h2>
			<AddCategory setCategories ={setCategories} />
			<hr />

			<ol>
				{
				categories.map(category => (
					//  return <li key={category}>{category}</li>;
					<Gifgrid
						key={category}
						category={category} />
				))}
			</ol>
		</>
	);
};
