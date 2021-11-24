# Icons setup

## Principle
Icons are generated using the `generateIconsMap.js` node script. This generates a SASS file `_generated-icons-map.scss` that holds a SASS map variable, which is imported in the `_icon.variables.scss`.

### Source files
Icons should only be of SVG type, placed in the `/src/icons/svg-icons/[source-type]/` directory. The file names must be uniqe, even if in different directories. The file names will be the name of the icon classes. Eg. the `chevron-down.svg` will end up in an `.icon-chevron-down` css class in the style sheet.

The color of the icon, either fill or stroke, should be set with the placeholder `%%COLOR%%` like this: `fill="%%COLOR%%"` / `stroke="%%COLOR%%`. It will be replaced by the default `$icons-color` SASS variable that might be overridden before importing this library in your project.

When new icon files are added, run `npm run generate-icons-map` to re-generate a new `_generated-icons-map.scss` that should be pushed and merged to repo.

## Icons sub selection
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

Please find the [full set of available icons in ICONS-LIST.md](ICONS-LIST.md).
