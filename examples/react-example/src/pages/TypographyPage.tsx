export function TypographyPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Typography</h1>
        <p className="text-muted-foreground mt-2">
          Typography component for consistent text styles across your application.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add typography</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Headings</h2>
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Heading 1
            </h1>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Heading 2
            </h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Heading 3
            </h3>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Heading 4
            </h4>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Paragraph</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This is a paragraph with default styling. It provides consistent text
            rendering across your application with proper line height and spacing.
            The text flows naturally and is easy to read.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Blockquote</h2>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "The only way to do great work is to love what you do. If you haven't
            found it yet, keep looking. Don't settle." - Steve Jobs
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Inline Code</h2>
          <p className="leading-7">
            Install the package using{' '}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              npm install galaxy-ui
            </code>{' '}
            command in your terminal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Lead Text</h2>
          <p className="text-xl text-muted-foreground">
            A modal dialog that interrupts the user with important content and
            expects a response. This is commonly used for confirmations or
            important notifications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Large Text</h2>
          <div className="text-lg font-semibold">
            Large text for emphasis and important information
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Small Text</h2>
          <small className="text-sm font-medium leading-none">
            Small text for secondary information, captions, or footnotes
          </small>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Muted Text</h2>
          <p className="text-sm text-muted-foreground">
            Muted text with reduced opacity for less important content or
            supplementary information that doesn't need to stand out.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Complete Example</h2>
          <div className="space-y-6 max-w-3xl border rounded-lg p-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Building Better UIs
            </h1>

            <p className="text-xl text-muted-foreground">
              Galaxy UI provides a comprehensive set of components to help you
              build beautiful and accessible user interfaces.
            </p>

            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Getting Started
            </h2>

            <p className="leading-7">
              Start by installing the CLI tool using{' '}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                npm install -g galaxy-ui
              </code>
              . Then initialize your project with the components you need.
            </p>

            <blockquote className="mt-6 border-l-2 pl-6 italic">
              "Design is not just what it looks like and feels like. Design is
              how it works." - Steve Jobs
            </blockquote>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Features
            </h3>

            <p className="leading-7">
              Our component library includes everything you need to build modern
              web applications with React, Vue, and Angular support.
            </p>

            <small className="text-sm font-medium leading-none text-muted-foreground">
              Last updated: January 2025
            </small>
          </div>
        </section>
      </div>
    </div>
  )
}
