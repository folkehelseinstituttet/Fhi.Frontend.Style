# Icon setup

## Principle
A list of file names and content is generated using the `generate-icon-map.js` node script, which fetches all the svg files in the `./svg-icons` directory. This generates a SASS file `_icon-map.GENERATED.scss` that holds a SASS map variable, which in turn is used to generate icon css classes like this; `.icon-[file-name]` with property `background-image: url([encoded svg content]);`.

## SVG source files
Icons should only be of SVG type, placed in the `/src/fhi/icons/svg-icons/[source-type]/` directory. The file names must be uniqe, even if in different sub directories.

When new icon files are added, run `npm run generate-icon-map` to generate a new `_generated-icons-map.scss` that should be committed and pushed.

## Include a subset of icons
It is possible to cherrypick a subset of the icons in this library, to decrease the file size of the css build.

Create a SASS map named `$included-icons` and include your selection:
```scss
// IMPORTANT! [chevron-down] MUST be included if you use @folkehelseinstituttet/angular-components
$included-icons: (
  'chevron-down', // <- Mandatory
  'chevron-up',
);
// This will generate icon classes for these three icons only.
```
**Note**: this must be added before the import of the style library in your project.

### List of available icons
Please find the [current set of available icons in icon-list.GENERATED.md here](icon-list.GENERATED.md).
[See a list of current icons available here](https://designsystem.fhi.no/developer/visual-identity/Icons).
