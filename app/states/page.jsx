export default function States() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2 className={`mb-3 text-2xl font-semibold mt-5`}>
              Handling States
            </h2>
            <p className="lg:hover:bg-violet-600">
                You can apply Tailwind classes conditionally by adding a modifier to the 
                beginning of the class specifying the condition. *Example
            </p>
            <p>
                You can use modifiers for just about anything to mimic regular CSS.
                However, keep in mind that some psuedo selectors are different. For example,
                in CSS it's :first-child, but in Tailwind it's :first
            </p>
            <p>
                Psuedo Classes - :hover, :focus, :first-child, etc.
            </p>
            <p>
                Psuedo Elements - ::before, ::placeholder, ::selection, etc.
            </p>
            <p>
                Media Queries - :sm, :md, :lg, etc.
            </p>
            <p>
                Attriubutes - [open], [aria-checked=“true”], etc.
            </p>
            <p>
                You can also stack these selectors like :md:hover:bg-fuchsia-600
            </p>
      </main>
    )
  }
  