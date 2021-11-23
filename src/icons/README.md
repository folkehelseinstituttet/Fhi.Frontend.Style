# Icons setup

## Principle
Icons are generated using the `generateIconsMap.js` node script. This generates a SASS file `_generated-icons-map.scss` that holds a SASS map variable, which is imported in the `_icon.variables.scss`.

### Source files
Icons should only be of SVG type, placed in the `/src/icons/svg-icons/[source-type]/` directory.

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

[Find the current list of icons in the ICONS-LIST.md](ICONS-LIST.md).
