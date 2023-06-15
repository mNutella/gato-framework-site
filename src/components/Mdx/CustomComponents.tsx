import * as React from "react";
import Image from "next/image";
import Link from "next/link";

function CustomLink({ href, ...rest }: any) {
  if (!href) return null;

  if (href.startsWith("/")) {
    return (
      <Link className="link" href={href} {...rest}>
        {rest.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a className="link" href={href} {...rest} />;
  }

  return (
    <a
      className="link"
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      {...rest}
    />
  );
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Ol({ children, ...rest }: any) {
  const renderChildren = () => {
    let liCounter = 0;
    return React.Children.map(children, (child) => {
      if (child.type === "li") {
        liCounter++;

        return (
          <li className="relative space-y-3 p-6 bg-neutral-800 border border-neutral-700 rounded-3xl text-">
            <div className="absolute -left-2 -top-2 flex w-10 h-10 bg-neutral-700 border border-neutral-600 p-3 items-center justify-center rounded-full">
              {liCounter}
            </div>
            {child.props.children}
          </li>
        );
      }

      return child;
    });
  };

  return (
    <ol className="py-6 space-y-6" {...rest}>
      {renderChildren()}
    </ol>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  ol: Ol,
  h2: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <h2
      className="first:mt-0 mb-8 mt-16 md:mt-24 text-2xl md:text-3xl lg:text-5xl text-neutral-200 scroll-mt-32"
      {...props}
    />
  ),
  table: (props: any) => <table className="table-auto" {...props} />,
};

export default components;
