// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kofa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
