import Image from 'next/image'
import React from 'react'
import fourImg from '../../assets/images/portraits/four.jpeg'
import sixImg from '../../assets/images/portraits/six.jpeg'

import sec1 from '../../assets/images/sec1.png'
import sec3 from '../../assets/images/sec3.png'
import sec4 from '../../assets/images/sec4.jpeg'


const Section = () => {
  return (
    <div>
      {/* Section */}
      <section className="bg-base-100 p-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <div>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={fourImg} />
                </div>
              </div>
              <div className="chat-header">
                Crypto k🔺
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble chat-bubble-primary ">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={fourImg} />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-primary ">It was you who would bring balance to the Force</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={fourImg} />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-primary ">Not leave it in Darkness</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={sixImg} />
                </div>
              </div>
              <div className="chat-header">
                david
              </div>
              <div className="chat-bubble chat-bubble-primary ">I love you!</div>
              <div className="chat-footer opacity-50">
                Seen at 12:50
              </div>
            </div>
          </div>


          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">Analyze &amp; build what matters most</h2><p className="text-base-content-secondary">Track traffic and clicks on your startups. Find out what your followers enjoy the most, rinse and repeat.</p><p className="text-base-content-secondary">Twitter is unstable... Collect your best fans emails. Truly own your audience.</p>

          </div>
        </div>
      </section>
      {/* Section */}
      {/* Section */}
      <section className="bg-base-100 p-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1691598101/krypto/XNVZF6VyQkWCvuUi_online-video-cutter.com_cj2lzt.mp4" type="video/mp4" />
          </video>

          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">Analyze &amp; build what matters most</h2><p className="text-base-content-secondary">Track traffic and clicks on your startups. Find out what your followers enjoy the most, rinse and repeat.</p><p className="text-base-content-secondary">Twitter is unstable... Collect your best fans emails. Truly own your audience.</p>


          </div>
        </div>
      </section>
      <section className="bg-base-100 p-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">

          <video autoPlay muted loop playsinline="" controls="" className="rounded-3xl aspect-square w-full sm:w-[26rem] border-2 md:border-4 border-base-content/20" width="500" height="500">
            <source src="https://res.cloudinary.com/the-social-charts/video/upload/v1691598222/krypto/3zdZIBvyf4EIxDGk_online-video-cutter.com_hryjeh.mp4" type="video/mp4" />
          </video>


          <div className="space-y-6 md:space-y-8 max-w-lg"><h2 className="text-3xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight">Analyze &amp; build what matters most</h2><p className="text-base-content-secondary">Track traffic and clicks on your startups. Find out what your followers enjoy the most, rinse and repeat.</p><p className="text-base-content-secondary">Twitter is unstable... Collect your best fans emails. Truly own your audience.</p>


          </div>
        </div>
      </section>

     

    </div>
  )
}

export default Section




