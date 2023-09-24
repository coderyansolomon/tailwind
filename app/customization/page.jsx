import Link from "next/link";

export default function Customization() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2 className={`mb-3 text-2xl font-semibold mt-5 font-sans-serif`}>
              Customization
            </h2>
            <p>
                You can adjust your theme at scale within your tailwind.config.js. For example, you 
                can adjust colors, fonts, spacing, etc. See custom colors here {' '} 
                <Link href={'https://tailwindcss.com/docs/customizing-colors'}>
                    Colors Docs
                </Link>
            </p>
            <p>
              When you absolutely need to, you can use arbitrary values in Tailwind by
              using square bracket notation. For example, text-[32px] or bg-[#bada55]. 
              To handle spaces, you can use underscores. So, instead of 
              grid-cols-[1fr 500px 2fr] it would be: grid-cols-[1fr_500px_2fr]
            </p>
            <p>
              You can also use CSS variables within your Tailwind classes. For example,
              bg-[--bg-color]. You just need to add the variable to your global.css
            </p>
            <p>
              You can also use the square bracket notation to use psuedo selectors. E.g. 
              [&:nth-child(5)]:hover:underline
            </p>
            <p>
              One way to add base-styles in Tailwind is by adding them to your root body element.
              For example, adding  
              className="text-red-500" to the body element.
            </p>
            <p>
              If you want to use your Tailwind theme within CSS, you can use the built in theme
              function Tailwind gives you. For example, {`.btn-blue {
                background-color: theme(colors.blue.500);
              }`}
            </p>
            <p>
              Similarly, if you want to have your CSS media queries based on your Tailwind breakpoints,
              you can use the built-in screen function. For example, {`
                @media screen(sm) {
                  /* ... */
                }
              `}
            </p>
      </main>
    )
  }
  