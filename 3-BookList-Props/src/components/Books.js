import React from "react";

// Destructuring in the function parameter
const Books = ({img, desc, title, author}) => {
	return (
		<div>
			<article className='book'>
				<img src={img} alt='' />
				<h5>{desc}</h5>
				<h1>{title}</h1>
				<h4>{author}</h4>
			</article>
		</div>
	);
};

export default Books;
