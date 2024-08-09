# WordPress CLI Commands

This document outlines various useful WordPress CLI commands for managing plugins, themes, and other WordPress functionalities within a Docker environment.

## Table of Contents

- [WordPress CLI Commands](#wordpress-cli-commands)
  - [Table of Contents](#table-of-contents)
  - [Plugin Management](#plugin-management)
  - [Theme Creation](#theme-creation)
  - [Installing Essential Plugins](#installing-essential-plugins)

## Plugin Management

To install and activate a plugin:

```bash
docker exec wpcli wp plugin install [plugin-slug|zip-url] --activate
```

Replace `[plugin-slug|zip-url]` with either the plugin's slug from the WordPress repository or a direct URL to the plugin's zip file.

## Theme Creation

To create a new WordPress theme:

```bash
docker exec wpcli wp scaffold _s sample-theme --theme_name="Sample Theme" --author="John Doe"
```

This command creates a new theme based on the `_s` (Underscores) starter theme. Customize the `sample-theme`, `"Sample Theme"`, and `"John Doe"` parameters as needed.

## Installing Essential Plugins

Here's a list of recommended plugins along with their installation commands:

```bash
# GraphQL API for WordPress
docker exec wpcli wp plugin install wp-graphql --activate

# Headless Mode
docker exec wpcli wp plugin install headless-mode --activate

# Yoast SEO
docker exec wpcli wp plugin install wordpress-seo --activate

# Add WPGraphQL SEO
docker exec wpcli wp plugin install add-wpgraphql-seo --activate

# WPGraphQL Gutenberg
docker exec wpcli wp plugin install https://github.com/pristas-peter/wp-graphql-gutenberg/archive/refs/heads/develop.zip --activate

# WPGraphQL Content Blocks
docker exec wpcli wp plugin install https://github.com/wpengine/wp-graphql-content-blocks/releases/latest/download/wp-graphql-content-blocks.zip --activate

# (Optional) Advanced Custom Fields
docker exec wpcli wp plugin install advanced-custom-fields --activate

# (Optional) Custom Post Type UI
docker exec wpcli wp plugin install custom-post-type-ui --activate
```

Note: Always ensure you're using the latest version of plugins, especially when installing from external sources.
