import { Metadata } from 'next';
import React from 'react'
import PrivacyPolicy from './components/PrivacyPolicy';
export const metadata: Metadata = {
    title: "ShareNest || privacy-policy",
    description: "Generated by create ShareNest",
  };
const PrivacyPolicyPage = () => {
  return (
    <div>
        <PrivacyPolicy/>
    </div>
  )
}

export default PrivacyPolicyPage