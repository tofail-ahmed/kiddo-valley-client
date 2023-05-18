import React, { useEffect } from 'react';

const DynamicTitle = ({ title }) => {

      useEffect(() => {
            document.title = title; // Update the document title
      }, [title]);

      return null
};

export default DynamicTitle;