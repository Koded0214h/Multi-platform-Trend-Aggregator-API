// src/components/Demo.jsx
import React from 'react';

const Demo = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            See It in Action
          </h2>
          <p className="mt-3 text-base text-gray-300 sm:text-lg lg:mt-4 lg:text-xl">
            Watch a quick demo to see how easily you can integrate our API and start gathering insights.
          </p>
        </div>
        <div className="relative mx-auto mt-8 max-w-5xl rounded-xl shadow-2xl shadow-primary/20 sm:mt-12 lg:mt-16">
          <div className="relative flex items-center justify-center aspect-video rounded-xl bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD4J5DtiqBIKosiKK3z1WLW_o28i0GgJgiUaQSoXDIdlLZYPFBgUpKarsMeIoPXux9uvTWkFrA3MrRUk75sTScCogVi8M6Swfjbe8Ml5GRWHCUiNQJXv2Vf42w5bMcMlmQt2qpdCdurJG7OYHnuM0x00KfzlBOc_bxw7loiq6bMF5my_IYCKksJfLtYP-nqypy5H-FMSMgNIsAyBxYKe_I8egcbitoWbVVS9pTOhdO6jY97mBjKjPbgNHjuNpfitN57Kn0J8uJkBbj")'}}>
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-background-dark/50 text-white transition-transform hover:scale-110 sm:h-20 sm:w-20">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg" className="sm:h-8 sm:w-8">
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;