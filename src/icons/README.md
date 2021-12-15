# Icon setup

## Principle
A list of file names and content is generated using the `generateIconsMap.js` node script, which fetches all the svg files in the `./svg-icons` directory. This generates a SASS file `_generated-icons-map.scss` that holds a SASS map variable, which in turn is used to generate icon css classes like this; `.icon-[file-name]` with property `background-image: url([encoded svg content]);`.

## SVG source files
Icons should only be of SVG type, placed in the `/src/icons/svg-icons/[source-type]/` directory. The file names must be uniqe, even if in different sub directories.

The color of the icon, either fill or stroke, should be set with the placeholder `%%COLOR%%` like this: `fill="%%COLOR%%"` / `stroke="%%COLOR%%`. It will be replaced by the default `$icons-color` SASS variable that might be overridden before importing this library in your project.

When new icon files are added, run `npm run generate-icons-map` to regenerate a new `_generated-icons-map.scss` that should be pushed and merged to repo.

## Include fewer icons in your project with $included-icons
It is possible to use only a subset of the icons in this library. This will generate a smaller CSS file, hence improving performance.

Create a SASS list named `$included-icons`, eg.
```scss
$included-icons: (
  'chevron-down',
  'chevron-up',
);
```
This will generate icon classes for these two icons only.
**Note**: must be added before the import of this library in your project.

### List of available icons
Please find the [current set of available icons in icon-list.GENERATED.md here](icon-list.GENERATED.md).
