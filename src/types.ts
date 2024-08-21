import {
  CoreCode,
  CoreHeading,
  CoreImage,
  CoreList,
  CoreListItem,
  CoreParagraph,
  CoreQuote,
  Page,
  Post,
} from "./gql/graphql";

export type WPBlocks =
  | CoreParagraph
  | CoreHeading
  | CoreList
  | CoreListItem
  | CoreImage
  | CoreQuote
  | CoreCode;

export type WPContentTypes = Page | Post | WPBlocks;

export type {
  CoreCode,
  CoreHeading,
  CoreImage,
  CoreList,
  CoreListItem,
  CoreParagraph,
  CoreQuote,
  Page,
  Post,
};
