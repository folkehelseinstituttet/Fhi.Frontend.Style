# Icons setup

## Principle
Icons are generated using the `generateIconsMap.js` node script. This generates a SASS file `_generated-icons-map.scss` that holds a SASS map variable, which is imported in the `_icon.variables.scss`.

### Source files
Icons should only be SVGs, placed in the `/src/icons/svg-icons/[source-type]/` directory.

When new icon files are added, run `npm run generate-icons-map` to re-generate a new `_generated-icons-map.scss` that should be pushed and merged to repo.
