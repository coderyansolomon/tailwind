export default function UtilityFirst() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2 className={`mb-3 text-2xl font-semibold mt-5`}>
              Utility First
            </h2>
            <p>
              Traditionally, in CSS you would need to add a class to your HTML, and then
              use a CSS selector to select the class and write different CSS properties
              and values to style that selected element.
            </p>
            <p>
                When using Tailwind, things are a bit different. You style elements by
                providing pre-existing classes to your HTML (or JSX). So, these Tailwind
                'utility' classes will automatically apply styles that Tailwind has already
                written. Don't worry though, Tailwind doesn't include all possible CSS, only
                the CSS you use. *Example styling this paragraph
            </p>
            <p> 
                What are some benefits of doing things this way? You no longer need to worry
                about naming classes. Nor do you need to worry about adding a class that does 
                something another developer already implemented. Also, everying is reusable. And you're
                not just adding more and more styles every time you want to style something. This 
                approach also prevents your CSS from being global. And your styles are scoped to the 
                HTML your applying classes to.
            </p>
            <p>
                Now, you might be thinking, isn't this just like using inline styles? Well, kinda,
                but it has some benefits over using just inline styles. With inline styles, all of 
                your styles are basically just magic numbers. But when using Tailwind, your styles
                are coming from a predefined design system, making it easier to have a consistent
                look and feel for your application. Also, with inline styles responsive design
                can get messy. Tailwind makes that much easier. The same can be said for styling 
                different states like hover, active, etc.
            </p>
      </main>
    )
  }
  