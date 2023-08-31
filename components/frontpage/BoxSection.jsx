import React from 'react'

const BoxSection = () => {
  return (


    <div className=" bg-white py-24">

      <div className="mx-auto w-full max-w-7xl px-4">

        <div className="mb-10 max-w-2xl">
          <p className="font-sans text-base font-normal leading-normal  text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider">Rock Solid</p><h2 className="font-heading text-4xl font-light leading-normal  text-muted-800 mx-auto mb-4 dark:text-white"> Why choose Tairo </h2>
          <p className="font-alt text-lg font-normal leading-normal  text-muted-500 dark:text-muted-100 mx-auto mb-4"> Tairo is a modern, clean and fully responsive Nuxt / Tailwind CSS dashboard system. It is built with care and provides a solid foundation for your next project, while yielding an exquisite developer experience. </p></div>

        <div className="mb-10 grid gap-y-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">

          <div className="relative"><h3 className="font-heading text-lg font-light leading-normal  mb-3"> User Experience </h3>

            <div className="space-y-4">
              <p className="font-alt text-sm font-normal leading-normal  text-muted-500 dark:text-muted-400"> We understand the importance of creating a dashboard that not only looks great but is also easy to use and accessible for everyone. </p>
              <p className="font-alt text-sm font-normal leading-normal  text-muted-500 dark:text-muted-400"> That&apos;s why our team has put in countless hours of work, paying close attention to every detail, to ensure that Tairo delivers a seamless user experience. From the color schemes to the typography, every aspect has been carefully crafted to make sure it is pleasing to the eye and easy to navigate. </p>
              <p className="font-alt text-sm font-normal leading-normal  text-muted-500 dark:text-muted-400"> But it&apos;s not just about the aesthetics. Our team has also made accessibility a top priority, ensuring that our dashboard is accessible to all users, regardless of their abilities. We have implemented features such as keyboard navigation and focus rings. </p></div></div>

          <div className="relative"><h3 className="font-heading text-lg font-light leading-normal  mb-3"> Developer Experience </h3>

            <div className="space-y-4">
              <p className="font-alt text-sm font-normal leading-normal  text-muted-500 dark:text-muted-400"> We get that creating a dashboard is not just about the end-users but also about the developers who build it. That&apos;s why we have put a lot of effort into making the developer experience as smooth and efficient as possible. </p>
              <p className="font-alt text-sm font-normal leading-normal  text-muted-500 dark:text-muted-400"> We have chosen tools that developers love, such as Visual Studio Code, and optimized Tairo for the best possible experience. Our developers have created a set of custom settings and plugins to make coding with Tairo a breeze. We have integrated plugins like Vue Language Features, Nuxt Component Meta, and Nuxt Dev Tools, which enable developers to easily create and manage their projects. </p>
              <p className="font-alt text-sm font-normal leading-normal  text-muted-500 dark:text-muted-400"> Tairo supports Typescript and implements features like props autocompletion, which helps developers avoid typing errors and increase their productivity. To make it even more customizable, we have made extensible configuration files , so that developers can easily customize and extend Tairo to fit their needs. </p></div></div>

          <div className="relative"><h3 className="font-heading text-lg font-light leading-normal  mb-3"> Nuxt powered </h3>

            <div className="space-y-4">
              <p className="font-alt text-sm font-normal leading-normal  text-muted-500 dark:text-muted-400"> Tairo combines the power of the latest version of Nuxt with the popular Tailwind CSS framework, allowing you to create stunning designs with ease. </p>
              <p className="font-alt text-sm font-normal leading-normal  text-muted-500 dark:text-muted-400"> With Nuxt, you get a fast and efficient web development framework that is perfect for building complex applications. Its modular architecture and easy-to-use syntax make it an ideal choice for developers of all skill levels. And when combined with Tailwind CSS, you get a complete toolkit for designing beautiful and responsive user interfaces. </p>
              <p className="font-alt text-sm font-normal leading-normal text-muted-500 dark:text-muted-400"> With Nuxt, you can take advantage of built-in features such as server-side rendering, static site generation, and automatic code splitting. This means your dashboard will be lightning-fast, SEO-friendly, and easy to maintain. </p></div></div></div>

        <div>
          {/* <img src="/img/illustrations/nation.svg" width="768" height="432" alt="placeholder-image" class="mx-auto max-w-full sm:max-w-3xl" loading="lazy" decoding="async"> */}

          <div className="mx-auto mb-3 max-w-md text-center"><h3 className="font-heading text-xl font-light leading-normal text-muted-800 mb-1 dark:text-white"> Get Tairo now </h3>
            <p className="font-alt text-sm font-normal leading-normal text-muted-500 dark:text-muted-100"> Don&apos;t waste time, it&apos;s time to kickstart your new app. Start building your next project with Tairo today. </p></div>

          <div className="my-2 flex justify-center gap-2">
            
           
            </div>

          <div>
            <p className="font-alt text-sm font-normal leading-normal text-muted-400 text-center"> Made by <a href="https://cssninja.io" rel="noopener noreferrer" className="hover:text-primary-500 underline-offset-4 transition-colors duration-200 hover:underline">cssninja.io</a></p></div></div></div></div>
  )
}

export default BoxSection