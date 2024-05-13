import React from 'react';
import { ThreeDots  } from  'react-loader-spinner'
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      {/* Add your loading animation or message here */}
      <ThreeDots 
height="80" 
width="80" 
radius="9"
color="white" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    </div>
  );
};

export default LoadingScreen;