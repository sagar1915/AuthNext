import React from "react";

const RegisterPage = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<nav className="bg-red-500 text-white">This is a Auth navbar</nav>
			{children}
		</div>
	);
};

export default RegisterPage;
