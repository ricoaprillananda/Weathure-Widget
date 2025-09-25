import React from 'react';

export const LoadingSkeleton: React.FC = () => (
    <div className="animate-pulse p-4 bg-gray-100 dark:bg-gray-800 rounded-lg" aria-busy="true" aria-label="Loading Weather Data">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-2" />
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2" />
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2" />
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-2" />
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3" />
    </div>
);
