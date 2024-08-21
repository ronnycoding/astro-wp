import { isGraphType } from "@/lib/utils";
import { CoreListItem, WPBlocks } from "@/types";
import React, { Fragment } from "react";

export const Paragraph: React.FC<React.PropsWithChildren> = ({ children }) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
);

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const Heading: React.FC<
  React.PropsWithChildren<{ level: HeadingLevel }>
> = ({ children, level }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const classNameMap: Record<HeadingLevel, string> = {
    1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    4: "scroll-m-20 text-xl font-semibold tracking-tight",
    5: "scroll-m-20 text-lg font-semibold tracking-tight",
    6: "scroll-m-20 text-base font-semibold tracking-tight",
  };
  return <HeadingTag className={classNameMap[level]}>{children}</HeadingTag>;
};

type ListType = "ordered" | "unordered";

export const List: React.FC<{ type: ListType; content: string[] }> = ({
  type,
  content,
}) => {
  const List = type === "ordered" ? "ol" : "ul";
  const ListItem = "li" as keyof JSX.IntrinsicElements;
  const classNameMap: Record<ListType, string> = {
    ordered: "my-6 ml-6 list-decimal [&>li]:mt-2",
    unordered: "my-6 ml-6 list-disc [&>li]:mt-2",
  };
  return (
    <List className={classNameMap[type]}>
      {content.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  );
};

export const InlineCode: React.FC<React.PropsWithChildren> = ({ children }) => (
  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
    {children}
  </code>
);

export const Lead: React.FC<React.PropsWithChildren> = ({ children }) => (
  <p className="text-xl text-muted-foreground">{children}</p>
);

export const LargeText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <p className="text-lg font-semibold">{children}</p>
);

export const SmallText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <p className="text-sm font-medium leading-none">{children}</p>
);

export const MutedText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <p className="text-sm text-muted-foreground">{children}</p>
);

export const Blockquote: React.FC<React.PropsWithChildren> = ({ children }) => (
  <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
);

export const RenderWPBlocks: React.FC<{ blocks: WPBlocks[] }> = ({
  blocks,
}) => {
  return (
    <>
      {blocks.map((block, index) => {
        if (isGraphType(block, "CoreParagraph") && !!block.attributes) {
          return <Paragraph key={index}>{block.attributes.content}</Paragraph>;
        }
        if (isGraphType(block, "CoreHeading") && !!block.attributes) {
          return (
            <Heading key={index} level={block.attributes.level as HeadingLevel}>
              {block.attributes.content}
            </Heading>
          );
        }
        if (isGraphType(block, "CoreList") && !!block.attributes) {
          return (
            <List
              key={index}
              type={block.attributes.ordered ? "ordered" : "unordered"}
              content={(block.innerBlocks as CoreListItem[]).map(
                (item) => item.attributes?.content || ""
              )}
            />
          );
        }
        if (isGraphType(block, "CoreCode") && !!block.attributes) {
          return (
            <InlineCode key={index}>{block.attributes.content}</InlineCode>
          );
        }
        if (isGraphType(block, "CoreQuote") && !!block.attributes) {
          return <Blockquote key={index}>{block.attributes.value}</Blockquote>;
        }
        if (block.__typename) {
          console.warn(
            `Block of type ${block.__typename} is not supported yet.`
          );
        }
        return <Fragment key={index} />;
      })}
    </>
  );
};
