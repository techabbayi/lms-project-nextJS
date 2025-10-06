import React from "react";

const Card = ({ children, className = "" }) => (
    <div
        className={`bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl p-6 border border-gray-200 ${className}`}
    >
        {children}
    </div>
);

export default Card;
