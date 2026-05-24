import React from 'react';

const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-gray-100 pb-8">
      <div className="flex w-full max-w-screen-xl flex-col items-center px-6">

        {/* grid for links */}
        <div className="grid w-full grid-cols-1 gap-4 py-8 text-sm md:grid-cols-3">
          
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Support</strong>

            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration">
                Help Center
              </span>
            </p>

            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration">
                Get help with a safety issue
              </span>
            </p>

            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration">
                Air cover
              </span>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;