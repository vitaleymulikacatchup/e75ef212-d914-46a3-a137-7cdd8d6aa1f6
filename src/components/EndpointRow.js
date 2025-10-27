import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Lock } from 'lucide-react';

function EndpointRow({ method, path, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getMethodColor = (method) => {
    switch (method.toLowerCase()) {
      case 'get':
        return 'method-get';
      case 'post':
        return 'method-post';
      case 'put':
        return 'method-put';
      case 'delete':
        return 'method-delete';
      case 'patch':
        return 'method-patch';
      default:
        return 'bg-gray-500';
    }
  };

  const getRowClass = (method) => {
    switch (method.toLowerCase()) {
      case 'get':
        return 'endpoint-row get';
      case 'post':
        return 'endpoint-row post';
      case 'put':
        return 'endpoint-row put';
      case 'delete':
        return 'endpoint-row delete';
      case 'patch':
        return 'endpoint-row patch';
      default:
        return 'endpoint-row';
    }
  };

  return (
    <div className={getRowClass(method)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-opacity-75 transition-colors"
      >
        <div className="flex items-center space-x-4">
          <span className={`method-badge ${getMethodColor(method)}`}>
            {method.toUpperCase()}
          </span>
          <span className="font-mono text-sm text-gray-800">{path}</span>
          {description && (
            <span className="text-sm text-gray-600">{description}</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Lock className="w-4 h-4 text-gray-400" />
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-4 pb-4 bg-white border-t border-gray-200">
          <div className="mt-4">
            <p className="text-sm text-gray-600">Endpoint details would be displayed here.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EndpointRow;