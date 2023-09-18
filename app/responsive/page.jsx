export default function Responsive() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2 className={`mb-3 text-2xl font-semibold mt-5`}>
              Handling States
            </h2>
            <p>
                All utility classes in Tailwind can be applied conditionally at a certain
                breakpoint. Note: It works for ALL Tailwind classes.
            </p>
            <p>
                Tailwind gives you 5 breakpoints by default, and you use the 
                ':' prefix to add the breakpoint to a class.
            </p>
            <p>
                Tailwind is mobile first. Meaning, when you apply a breakpoint to a class, that
                class will be applied at that breakpoint and above. This means you will 
                use unprefixed classes for mobile, and prefixed classes for larger 
                sizes (mobile first). *Docs & Example
            </p>
            <p>
                You can also target a breakpoint range. You can do this by using a breakpoint 
                prefix, and then adding a -max:(breakpoint). For example, 
                md:max-xl:text-red-600 will make the text color red between md and xl breakpoints.
                *Example
            </p>
            <p>
               You can customize your breakpoints in your tailwind.config.js file. Use 
               theme.screen to replace and not use all default breakpoints, but use theme.extend.screens 
               to only replace certain defaults. *Example
            </p>
      </main>
    )
  }
  