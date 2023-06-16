import * as React from "react";
import Image from "next/image";
import Link from "next/link";

type ContentItem = {
  name: string;
  href?: string;
};

function Content({ title, items }: { title: string; items: ContentItem[] }) {
  return (
    <div className="p-6 mb-16 bg-neutral-800 rounded-3xl border border-neutral-700 space-y-6">
      <h2 className="text-2xl md:text-3xl text-neutral-300">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={"con-" + index}>
            {item?.href ? (
              <CustomLink className="content-link" href={item.href}>
                {item.name}
              </CustomLink>
            ) : (
              <p className="text-xl text-neutral-500">{item.name}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
          <li className="relative space-y-3 py-3 px-6 bg-neutral-800 border border-neutral-700 rounded-3xl">
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

// function Ul({ children, ...rest }: any) {
//   const renderChildren = () => {
//     return React.Children.map(children, (child) => {
//       if (child.type === "li") {

//         return (
//           <li className="relative">
//             {child.props.children}
//           </li>
//         );
//       }

//       return child;
//     });
//   };

//   return (
//     <ul className="mt-0 space-y-0" {...rest}>
//       {renderChildren()}
//     </ul>
//   );
// }

const components = {
  Image: RoundedImage,
  a: CustomLink,
  ol: Ol,
  // ul: Ul,
  h2: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <h2
      className="relative first:mt-0 mb-8 mt-16 text-2xl md:text-3xl lg:text-5xl text-neutral-200 scroll-mt-32"
      {...props}
    />
  ),
  table: (props: any) => <table className="table-auto" {...props} />,
  Content,
};

export default components;
