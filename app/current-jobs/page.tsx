"use client";

import ReadPage from '@/components/home/read'
import Quick from '@/components/home/quick';

import React from 'react';
function page() {
  return (
    <div>
      <Quick/>      
      <ReadPage/>
    </div>
  )
}

export default page
