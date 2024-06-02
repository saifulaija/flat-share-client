import FlatRequestForm from '@/components/Form/FlatRequestForm';
import CustomHeader from '@/components/shared/CustomHeader/CustomHeader';
import React from 'react';

type TProps = {
  params: {
    flatId: string;
  };
};

const FlatSharedRequestPage = ({ params }: TProps) => {
  const { flatId } = params;
  return (
    <div className="md:p-20">
      <CustomHeader title="Add Your Flat Request" />
      <div className="mt-10 ">
        <FlatRequestForm flatId={flatId} />
      </div>
    </div>
  );
};

export default FlatSharedRequestPage;
