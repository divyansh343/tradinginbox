import React from 'react'

const BoxSection = () => {
  return (
    <div>
      <section className="bg-base-200 py-14 lg:py-20">
        <div className="container px-5 lg:px-28">
          <div className="heading mb-5 text-center">
            <h6 className="!text-secondary">Drive more lead with Plurk</h6>
            <h4 className="">Our response management having automatically track customer sentiment</h4>
          </div>
          <div className='grid content-center'>

            <div className="mt-14 bg-base-300 border-primary shadow grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-20 lg:grid-cols-2" >
              <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                <h4 className="">Tenancy Optimization</h4>
                <p className="mt-6 text-lg font-semibold ">
                  Optimize your SaaS solutions’ tenancy by leveraging our deep understanding of the unit economics of SaaS products. We can
                  take existing single-tenant applications and securely deliver a cost optimized multi-tenant solution.
                </p>
                <a href="javascript:" className="mt-8 inline-flex items-center gap-4 text-lg font-extrabold  transition hover:text-secondary lg:mt-14">
                  <span>Learn More</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0398 3.96094C18.4495 2.36891 16.4227 1.28435 14.2158 0.844459C12.0089 0.404569 9.7212 0.629129 7.64196 1.48972C5.56274 2.35031 3.7855 3.80827 2.53506 5.67914C1.28462 7.55001 0.617188 9.7497 0.617188 12C0.617188 14.2503 1.28462 16.45 2.53506 18.3209C3.7855 20.1917 5.56274 21.6497 7.64196 22.5103C9.7212 23.3709 12.0089 23.5954 14.2158 23.1556C16.4227 22.7157 18.4495 21.6311 20.0398 20.0391C21.0961 18.9837 21.934 17.7305 22.5057 16.3511C23.0775 14.9717 23.3717 13.4932 23.3717 12C23.3717 10.5068 23.0775 9.0283 22.5057 7.64891C21.934 6.26952 21.0961 5.01632 20.0398 3.96094ZM15.9382 14.1875C15.9382 14.4196 15.8461 14.6421 15.682 14.8062C15.5179 14.9703 15.2953 15.0625 15.0632 15.0625C14.8312 15.0625 14.6086 14.9703 14.4445 14.8062C14.2804 14.6421 14.1882 14.4196 14.1882 14.1875V11.0484L9.5617 15.6859C9.3925 15.8446 9.1702 15.9344 8.9382 15.9375C8.7059 15.9365 8.4828 15.8465 8.3148 15.6859C8.1505 15.52 8.0583 15.296 8.0583 15.0625C8.0583 14.829 8.1505 14.605 8.3148 14.4391L12.9523 9.8125H9.8132C9.5812 9.8125 9.3586 9.7203 9.1945 9.5562C9.0304 9.3921 8.9382 9.1696 8.9382 8.9375C8.9382 8.7054 9.0304 8.4829 9.1945 8.3188C9.3586 8.1547 9.5812 8.0625 9.8132 8.0625H15.0632C15.1759 8.0622 15.2875 8.0845 15.3914 8.1281C15.6074 8.2155 15.7803 8.3845 15.8726 8.5984C15.9155 8.7064 15.9377 8.8214 15.9382 8.9375V14.1875Z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
              <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                {/* <img src="assets/images/modern-saas/optimization.png" alt="" class="rounded-2xl"> */}
                <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[28rem] border-2 md:border-4 border-base-content/20" width="800" height="500">
                  <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1691993547/krypto/web.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="mt-10 bg-base-300 border-primary shadow bg-opacity-40 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-16 lg:grid-cols-2" >
          
              <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                <h4 className="">Migrate and Modernize</h4>
                <p className="mt-6 text-lg font-semibold">
                  Migrating a legacy system involves taking your old infrastructure and transferring it to the cloud. This does provide
                  potential cost and efficiency benefits. However, it fails to give your application a growth perspective.
                </p>
                <a href="javascript:" className="mt-8 inline-flex items-center gap-4 text-lg font-extrabold  transition hover:text-primary lg:mt-14">
                  <span>Learn More</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0398 3.96094C18.4495 2.36891 16.4227 1.28435 14.2158 0.844459C12.0089 0.404569 9.7212 0.629129 7.64196 1.48972C5.56274 2.35031 3.7855 3.80827 2.53506 5.67914C1.28462 7.55001 0.617188 9.7497 0.617188 12C0.617188 14.2503 1.28462 16.45 2.53506 18.3209C3.7855 20.1917 5.56274 21.6497 7.64196 22.5103C9.7212 23.3709 12.0089 23.5954 14.2158 23.1556C16.4227 22.7157 18.4495 21.6311 20.0398 20.0391C21.0961 18.9837 21.934 17.7305 22.5057 16.3511C23.0775 14.9717 23.3717 13.4932 23.3717 12C23.3717 10.5068 23.0775 9.0283 22.5057 7.64891C21.934 6.26952 21.0961 5.01632 20.0398 3.96094ZM15.9382 14.1875C15.9382 14.4196 15.8461 14.6421 15.682 14.8062C15.5179 14.9703 15.2953 15.0625 15.0632 15.0625C14.8312 15.0625 14.6086 14.9703 14.4445 14.8062C14.2804 14.6421 14.1882 14.4196 14.1882 14.1875V11.0484L9.5617 15.6859C9.3925 15.8446 9.1702 15.9344 8.9382 15.9375C8.7059 15.9365 8.4828 15.8465 8.3148 15.6859C8.1505 15.52 8.0583 15.296 8.0583 15.0625C8.0583 14.829 8.1505 14.605 8.3148 14.4391L12.9523 9.8125H9.8132C9.5812 9.8125 9.3586 9.7203 9.1945 9.5562C9.0304 9.3921 8.9382 9.1696 8.9382 8.9375C8.9382 8.7054 9.0304 8.4829 9.1945 8.3188C9.3586 8.1547 9.5812 8.0625 9.8132 8.0625H15.0632C15.1759 8.0622 15.2875 8.0845 15.3914 8.1281C15.6074 8.2155 15.7803 8.3845 15.8726 8.5984C15.9155 8.7064 15.9377 8.8214 15.9382 8.9375V14.1875Z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
              <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                {/* <img src="assets/images/modern-saas/migrate-modernize.png" alt="" class="rounded-2xl">
                 */}
                <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-auto w-full sm:w-[28rem] border-2 md:border-4 border-base-content/20" width="800" height="500">
                  <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1691993547/krypto/web.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BoxSection