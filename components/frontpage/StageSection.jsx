import React from 'react'

const StageSection = () => {
  return (
    <section className="py-24 bg-base-100 px-10 lg:px-20">
        <div className="container">
            <div className="text-center max-w-xl mx-auto">
                {/* <h6 className="font-normal uppercase mb-2">How it <span className="font-semibold">Work</span></h6> */}
                <h2 className="text-3xl font-semibold mb-3">How dose it work ?</h2>
                <p className="text-base font-normal text-gray-500">Sed ut perspiciatis unde omnis iste natus error
                    voluptatem accusantium doloremque rem aperiam.</p>
            </div>

            <div className="mt-20">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                    <div>
                        <div className="relative">
                            <div className="text-center">
                                <span className="inline-flex relative z-0 bg-blue-500/10 dark:bg-blue-100/5 h-24 w-24 items-center justify-center" >
                                    <i className="mdi mdi-format-list-bulleted text-5xl"></i>
                                </span>
                                <h5 className="text-xl font-semibold mb-3 mt-5">1. Intuitive visual editor</h5>
                                <p className="text-base font-normal text-gray-500">Nemo enim ipsam quia voluptas sit
                                    aspernatur ist dolores.</p>

                                <div className="hidden lg:block">
                                    {/* <img src="assets/images/arrow-top.png" class="absolute -right-16 top-2/4 w-28"> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <div className="text-center">
                                <span className="inline-flex relative z-0 bg-emerald-500/10 dark:bg-emerald-100/5 h-24 w-24 items-center justify-center" >
                                    <i className="mdi mdi-palette-outline text-5xl"></i>
                                </span>
                                <h5 className="text-xl font-semibold mb-3 mt-5">2. Huge design collection</h5>
                                <p className="text-gray-600 dark:text-gray-400">Nemo enim ipsam quia voluptas sit aspernatur
                                    ist dolores.</p>

                                <div className="hidden lg:block">
                                    {/* <img src="assets/images/arrow-bottom.png" class="absolute -right-20 top-2/4 w-28"> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="text-center">
                            <span className="inline-flex relative z-0 bg-amber-500/10 dark:bg-amber-100/5 h-24 w-24 items-center justify-center" >
                                <i className="mdi mdi-layers-triple text-5xl"></i>
                            </span>
                            <h5 className="text-xl font-semibold mb-3 mt-5">3. One click installation</h5>
                            <p className="text-gray-600 dark:text-gray-400">Nemo enim ipsam quia voluptas sit aspernatur ist
                                dolores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StageSection