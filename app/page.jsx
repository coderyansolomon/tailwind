export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h2 className={`mb-3 text-2xl font-semibold mt-5`}>
            Tailwind Overview
          </h2>
          <p>
            Tailwind is a CSS framework packed with built-in classes allowing you to
            style your applications. You effectively install tailwind and then add these 
            classes to your your HTML, or JSX in React's case, to style your apps.
          </p>
          <p>
          It works by scanning your HTML files and JavaScript components for class names, 
          generating the corresponding styles and then writing them to a CSS file.
          </p>
          <p>
            This can make it easy to remain consistent when it comes to your styling. And you
            don't need to worry as much about have several developers working in several different
            styles sheets using different classes for everything.
          </p>
          <p>
            Tailwind also removes any unused css automatically. This results in good performance
            with most Tailwind applications shipping less than 10kB of css code.
          </p>
          <p>
            Additonally, you don't need to mess around with media queries. And you can effectively 
            add mobile styles right into your markup. Different element states (e.g. hover) can also
            be done quite easily in tailwind.
          </p>
          <p>
            Tailwind uses the latest CSS features, and promises to stay up to date with modern CSS.
            *Examples of how Tailwind works
          </p>
    </main>
  )
}
