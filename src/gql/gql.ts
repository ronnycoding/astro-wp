/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetNodeByURI($uri: String!) {\n  nodeByUri(uri: $uri) {\n    __typename\n    isContentNode\n    isTermNode\n    ... on Post {\n      id\n      title\n      date\n      uri\n      excerpt\n      slug\n      categories {\n        nodes {\n          name\n          uri\n        }\n      }\n      featuredImage {\n        node {\n          srcSet\n          sourceUrl\n          altText\n        }\n      }\n      seo {\n        ...SEOMetadata\n      }\n      editorBlocks {\n        ...WPBlocks\n      }\n    }\n    ... on Page {\n      id\n      title\n      uri\n      slug\n      date\n      featuredImage {\n        node {\n          srcSet\n          sourceUrl\n          altText\n          mediaDetails {\n            height\n            width\n          }\n        }\n      }\n      seo {\n        ...SEOMetadata\n      }\n      editorBlocks {\n        ...WPBlocks\n      }\n    }\n    ... on Category {\n      id\n      name\n      posts {\n        nodes {\n          date\n          title\n          excerpt\n          uri\n          slug\n          categories {\n            nodes {\n              name\n              uri\n            }\n          }\n          featuredImage {\n            node {\n              srcSet\n              sourceUrl\n              altText\n            }\n          }\n        }\n      }\n    }\n  }\n  menus(where: {location: MENU_1}) {\n    nodes {\n      name\n      menuItems {\n        nodes {\n          uri\n          url\n          order\n          label\n        }\n      }\n    }\n  }\n  generalSettings {\n    title\n    url\n    description\n  }\n}": types.GetNodeByUriDocument,
    "fragment SEOMetadata on PostTypeSEO {\n  canonical\n  cornerstone\n  focuskw\n  metaDesc\n  metaKeywords\n  metaRobotsNofollow\n  metaRobotsNoindex\n  opengraphAuthor\n  opengraphDescription\n  opengraphModifiedTime\n  opengraphPublishedTime\n  opengraphPublisher\n  opengraphSiteName\n  opengraphTitle\n  opengraphType\n  opengraphUrl\n  readingTime\n  title\n  twitterDescription\n  twitterTitle\n}": types.SeoMetadataFragmentDoc,
    "fragment WPBlocks on EditorBlock {\n  __typename\n  name\n  clientId\n  ... on CoreParagraph {\n    attributes {\n      content\n    }\n  }\n  ... on CoreHeading {\n    attributes {\n      level\n      content\n    }\n  }\n  ... on CoreList {\n    clientId\n    attributes {\n      ordered\n    }\n    innerBlocks {\n      ... on CoreListItem {\n        attributes {\n          content\n        }\n      }\n    }\n  }\n  ... on CoreImage {\n    mediaDetails {\n      file\n      meta {\n        caption\n      }\n    }\n  }\n}": types.WpBlocksFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetNodeByURI($uri: String!) {\n  nodeByUri(uri: $uri) {\n    __typename\n    isContentNode\n    isTermNode\n    ... on Post {\n      id\n      title\n      date\n      uri\n      excerpt\n      slug\n      categories {\n        nodes {\n          name\n          uri\n        }\n      }\n      featuredImage {\n        node {\n          srcSet\n          sourceUrl\n          altText\n        }\n      }\n      seo {\n        ...SEOMetadata\n      }\n      editorBlocks {\n        ...WPBlocks\n      }\n    }\n    ... on Page {\n      id\n      title\n      uri\n      slug\n      date\n      featuredImage {\n        node {\n          srcSet\n          sourceUrl\n          altText\n          mediaDetails {\n            height\n            width\n          }\n        }\n      }\n      seo {\n        ...SEOMetadata\n      }\n      editorBlocks {\n        ...WPBlocks\n      }\n    }\n    ... on Category {\n      id\n      name\n      posts {\n        nodes {\n          date\n          title\n          excerpt\n          uri\n          slug\n          categories {\n            nodes {\n              name\n              uri\n            }\n          }\n          featuredImage {\n            node {\n              srcSet\n              sourceUrl\n              altText\n            }\n          }\n        }\n      }\n    }\n  }\n  menus(where: {location: MENU_1}) {\n    nodes {\n      name\n      menuItems {\n        nodes {\n          uri\n          url\n          order\n          label\n        }\n      }\n    }\n  }\n  generalSettings {\n    title\n    url\n    description\n  }\n}"): (typeof documents)["query GetNodeByURI($uri: String!) {\n  nodeByUri(uri: $uri) {\n    __typename\n    isContentNode\n    isTermNode\n    ... on Post {\n      id\n      title\n      date\n      uri\n      excerpt\n      slug\n      categories {\n        nodes {\n          name\n          uri\n        }\n      }\n      featuredImage {\n        node {\n          srcSet\n          sourceUrl\n          altText\n        }\n      }\n      seo {\n        ...SEOMetadata\n      }\n      editorBlocks {\n        ...WPBlocks\n      }\n    }\n    ... on Page {\n      id\n      title\n      uri\n      slug\n      date\n      featuredImage {\n        node {\n          srcSet\n          sourceUrl\n          altText\n          mediaDetails {\n            height\n            width\n          }\n        }\n      }\n      seo {\n        ...SEOMetadata\n      }\n      editorBlocks {\n        ...WPBlocks\n      }\n    }\n    ... on Category {\n      id\n      name\n      posts {\n        nodes {\n          date\n          title\n          excerpt\n          uri\n          slug\n          categories {\n            nodes {\n              name\n              uri\n            }\n          }\n          featuredImage {\n            node {\n              srcSet\n              sourceUrl\n              altText\n            }\n          }\n        }\n      }\n    }\n  }\n  menus(where: {location: MENU_1}) {\n    nodes {\n      name\n      menuItems {\n        nodes {\n          uri\n          url\n          order\n          label\n        }\n      }\n    }\n  }\n  generalSettings {\n    title\n    url\n    description\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SEOMetadata on PostTypeSEO {\n  canonical\n  cornerstone\n  focuskw\n  metaDesc\n  metaKeywords\n  metaRobotsNofollow\n  metaRobotsNoindex\n  opengraphAuthor\n  opengraphDescription\n  opengraphModifiedTime\n  opengraphPublishedTime\n  opengraphPublisher\n  opengraphSiteName\n  opengraphTitle\n  opengraphType\n  opengraphUrl\n  readingTime\n  title\n  twitterDescription\n  twitterTitle\n}"): (typeof documents)["fragment SEOMetadata on PostTypeSEO {\n  canonical\n  cornerstone\n  focuskw\n  metaDesc\n  metaKeywords\n  metaRobotsNofollow\n  metaRobotsNoindex\n  opengraphAuthor\n  opengraphDescription\n  opengraphModifiedTime\n  opengraphPublishedTime\n  opengraphPublisher\n  opengraphSiteName\n  opengraphTitle\n  opengraphType\n  opengraphUrl\n  readingTime\n  title\n  twitterDescription\n  twitterTitle\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WPBlocks on EditorBlock {\n  __typename\n  name\n  clientId\n  ... on CoreParagraph {\n    attributes {\n      content\n    }\n  }\n  ... on CoreHeading {\n    attributes {\n      level\n      content\n    }\n  }\n  ... on CoreList {\n    clientId\n    attributes {\n      ordered\n    }\n    innerBlocks {\n      ... on CoreListItem {\n        attributes {\n          content\n        }\n      }\n    }\n  }\n  ... on CoreImage {\n    mediaDetails {\n      file\n      meta {\n        caption\n      }\n    }\n  }\n}"): (typeof documents)["fragment WPBlocks on EditorBlock {\n  __typename\n  name\n  clientId\n  ... on CoreParagraph {\n    attributes {\n      content\n    }\n  }\n  ... on CoreHeading {\n    attributes {\n      level\n      content\n    }\n  }\n  ... on CoreList {\n    clientId\n    attributes {\n      ordered\n    }\n    innerBlocks {\n      ... on CoreListItem {\n        attributes {\n          content\n        }\n      }\n    }\n  }\n  ... on CoreImage {\n    mediaDetails {\n      file\n      meta {\n        caption\n      }\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;