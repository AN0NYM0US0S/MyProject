import React from 'react';
import { Code } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">DevFirm</span>
    </div>
  );
};

export default Logo;