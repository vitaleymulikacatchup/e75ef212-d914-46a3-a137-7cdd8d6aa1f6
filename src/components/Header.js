import React from 'react';

function Header() {
  return (
    <header className="swagger-header text-white px-6 py-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-swagger-green rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">S</span>
          </div>
          <span className="text-swagger-green font-semibold text-lg">Swagger</span>
        </div>
      </div>
    </header>
  );
}

export default Header;