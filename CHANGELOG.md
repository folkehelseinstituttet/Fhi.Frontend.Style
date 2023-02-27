# Unreleased

> Feb 27, 2023

* :tada: **Enhancement** Navigation tile without icon
* :tada: **Enhancement** Menu button without icon
* :bug: **Bugfix** Search button hover effect
* :tada: **Enhancement** Tabs - fhi-prefixed

## 4.1.0

> Feb 14, 2023

* :tada: **Enhancement** Getting ready to omit import of styles for components depending on Angular
* :tada: **Enhancement** Updated SASS imports, see [README.md](README.md#use-in-project)
  * _`@import "~@folkehelseinstituttet/style/scss/style.scss";` and \
  `@import "~@folkehelseinstituttet/style/scss/variables.scss";` are deprecated_
  Will break in **v5** :boom:
* :tada: **Enhancement** Updated variable naming conventions.
  * See diff for reference.
  Will break in **v5** :boom:

## 4.0.1

> Feb 1, 2023

* :bug: **Bugfix** Remove import of obsolete variable file

## 4.0.0

> Feb 1, 2023

* :tada: **Enhancement** Support for forms with left aligned labels
* :tada: **Enhancement** Main menu and pageheader file structure improved
  * _Global headers with markup prior to 3.10 will break in **v5** :boom:_
* :tada: **Enhancement** Improved state visibility on switch toggler
* :gift: **New** Added utility section on global header
* :tada: **Enhancement** Focus state no longer depending on what-input library, color of focus changed from red to blue
* :tada: **Enhancement** Table visuals adjusted
* :tada: **Enhancement** Minor visual adjustments to global header and navigation tile
* :boom: **Breaking** Color adjustments
  * _Removed color variables:_
    * ![#65adc3](https://via.placeholder.com/10/65adc3/000000?text=+) `$fhi-blue-light-1`
    * ![#057e9a](https://via.placeholder.com/10/057e9a/000000?text=+) `$fhi-blue-light-2`
    * ![#2e3152](https://via.placeholder.com/10/2e3152/000000?text=+) `$fhi-blue-dark-2`
    * ![#181B40](https://via.placeholder.com/10/181B40/000000?text=+) `$fhi-blue-dark-3`
    * ![#e22867](https://via.placeholder.com/10/e22867/000000?text=+) `$fhi-pink-dark-2`
    * ![#b10640](https://via.placeholder.com/10/b10640/000000?text=+) `$fhi-pink-dark-3`
  * _Renamed color variables:_
    * ![#393c61](https://via.placeholder.com/10/393c61/000000?text=+) `$fhi-blue-dark-1` => `$fhi-blue-3`
    * ![#faedec](https://via.placeholder.com/10/faedec/000000?text=+) `$fhi-pink-light-2` => `$fhi-pink-light-1`
    * ![#fad1cd](https://via.placeholder.com/10/fad1cd/000000?text=+) `$fhi-pink-light-4` => `$fhi-pink-light-2`
* :tada: **Enhancement** Tags - filter option border change
* :gift: **New** Add datepicker

## 3.11.0

> Nov 24, 2022

* :gift: **New** Add double select component (year interval and week selections)
* :gift: **New** Add Tree view checkboxes
* :gift: **New** Add Tree view navigation
* :gift: **New** Add button group
* :gift: **New** Add drawer
* :tada: **Enhancement** Contrast fix for links in arch footer
* :gift: **New** Add spinners
* :gift: **New** Add module for global footer
* :tada: **Enhancement** Update CONTRIBUTING and README
* :bug: **Bugfix** Secondary color variable reset

## 3.10.0

> Okt 24, 2022

* :gift: **New** Added module for global header
* :bug: **Bugfix** Add calc() to remove build warnings
* :tada: **Enhancement** Update grid
* :tada: **Enhancement** Update README (and change "New" icon :wink:)
* :gift: **New** Add tabs
* :gift: **New** Add breadcrumb
* :tada: **Enhancement** Update design for pagination

## 3.9.0

> Sep 22, 2022

* :gift: **New** Added shortcut buttons
* :gift: **New** Added icon button
* :tada: **Enhancement** New wrapper on search text in search button
* :tada: **Enhancement** Update button system. Outline type classes is deprecated
* :gift: **New** Added navigation tile, CTA for main entry navigation

## 3.8.0

> Sep 9, 2022

* :gift: **New** Added search bar with autocomplete

## 3.7.0

> Sep 6, 2022

* :gift: **New** Added Badge
* :gift: **New** Added Tag system
* :bug: **Bugfix** Remove z-index on main menu when not open
* :tada: **Enhancement** Some adjustments to heading fonts
* :tada: **Enhancement** Adjusted checkmark graphic on checkboxes

## 3.6.0

> Aug 26, 2022

* :tada: **Enhancement** Third accordion variant added. Accordions getting new hover color.
* :bug: **Bugfix** Border-radius on large buttons reset to same as other buttons
* :gift: **New** Added modal
* :gift: **New** Added alerts

## 3.5.0

> Aug 13, 2022

* :gift: **New** Added toasts
* :gift: **New** Added tooltip

## 3.4.2

> Jul 26, 2022

* :bug: **Bugfix** Added Maps to Bootstrap-core as it contains variables used in utilities from version 5.2.0

## 3.4.1

> May 31, 2022

* :tada: **Enhancement** Made styling for Circlon Angular Tree Structure component independent of custom FHI css classes

## 3.4.0

> June 1, 2022

* :gift: **New** Styling for Circlon Angular Tree Structure component

## 3.3.1

> May 12, 2022

* :bug: **Bugfix** Remove DartSass because of some reference issues

## 3.3.0

> May 3, 2022

* :gift: **New** Changed from NodeSass to DartSass
* :tada: **Enhancement** Increased font size on Accordion toggler
* :bug: **Bugfix** Issue with sorting icons on sorting table
* :bug: **Bugfix** Prevent toggler icon on sortable table to fall down below text
* :gift: **New** Added round button

## 3.2.3

> Jan 27, 2022

* :bug: **Bugfix** Removed the switching of double quotes to single quotes on svg encoding

## 3.2.2

> Des 21, 2021

* :bug: **Bugfix** Export all files and folders to npm

## 3.2.1

> Des 20, 2021

* :bug: **Bugfix** Make sure `/import` is part of npm and update path for fonts

## 3.2.0

> Des 17, 2021

* :tada: **Enhancement** Icon system is now generated when adding icon files
* :gift: **New** Added styles for table with selectable rows
* :tada: **Enhancement** Revise the projects folder structure
* :tada: **Enhancement** Update README and CONTRIBUTING

## 3.1.0

> Nov 09, 2021

* :gift: **New** Added styles for accordions
* :gift: **New** Icons system setup
* :tada: **Enhancement** Buttons have the same height on all screen sizes (44px)
* :bug: **Bugfix** Pagination focus background color changed
* :tada: **Enhancement** Added tab focus on switch toggle
* :gift: **New** Added styles for table sorting
* :tada: **Enhancement** Update pull request guidelines in CONTRIBUTING

## 3.0.1

> Oct 15, 2021

* :bug: **Bugfix** FHI main menu breakpoint fix and removed border below table heading

## 3.0.0

> Oct 14, 2021

* :boom: **Breaking** Upgrading to Bootstrap 5 (5.1.2).
* :gift: **New** Added styling to bootstrap table.
* :tada: **Enhancement** Rename switch-file.
* :bug: **Bugfix** Radio buttons showing state also on Windows high contrast.

## 2.1.0

> Apr 12, 2021

* :tada: **Enhancement** Reintroduce the fhi-app and fhi-main-menu blocks into the package
* :tada: **Enhancement** Remove ngDatepicker variables
* :boom: **Breaking** Remove _fhi-app.block.scss and assosiated variables
* :gift: **New** Establish CI build that runs on every push and pull-request.
* :tada: **Enhancement** Rename Release workflow. Remove unused publish workflow.

## 2.0.3

> Apr 8, 2021

* :bug: **Bugfix** Fix broken GitHub release action again

## 2.0.2

> Apr 8, 2021

* :bug: **Bugfix** Fix broken GitHub release action

## 2.0.1

> Apr 8, 2021

* :bug: **Bugfix** Reset bootstrap path

## 2.0.0

> Apr 7, 2021

* :boom: **Breaking** Remove block fhi-main-menu

## 1.4.1

> Apr 7, 2021

* :bug: **Bugfix** Move `bootstrap/variables` from `style.scss` to `variables.scss` so libraries can access them

## 1.4.0

> Mar 26, 2021

* :tada: **Enhancement** Update pull request guidelines in CONTRIBUTING
* :tada: **Enhancement** Add font CrimsonText and remove font PTSerif
* :tada: **Enhancement** Update `./scss/README.md`
* :tada: **Enhancement** Translate (or delete) all comments in norwegian
* :tada: **Enhancement** Move all Bootstrap variables into dedicated file
* :tada: **Enhancement** Change the folder structure
* :tada: **Enhancement** Add `*.orig` to .gitignore and fix markdown syntax errors in CHANGELOG
* :tada: **Enhancement** Update color palette
* :tada: **Enhancement** Add table of contents to CONTRIBUTING
* :tada: **Enhancement** Add pull request guidelines to CONTRIBUTING
* :gift: **New** Add custom form switch

## 1.3.0

> Mar 5, 2021

* :gift: **New** Added styling to bootstrap checkbox
* :gift: **New** Added styling to bootstrap radio-button
* :gift: **New** Added styling to bootstrap pagination

## 1.2.1

> Feb 25, 2021

* :bug: **Bugfix** Add `files["/fonts"]` to `package.json`

## 1.2.0

> Feb 25, 2021

* :tada: **Enhancement** Update BrandonText and CrimsonText font-variables and add the new fallback fonts
* :tada: **Enhancement** Update font-family h1-h5
* :tada: **Enhancement** Remove NgbDatepicker
* :tada: **Enhancement** Remove files only relevant for Demo-app
* :tada: **Enhancement** Get scss up to date with the old Azure repo

## 1.1.0

> Feb 18, 2021

* :tada: **Enhancement** Fixed styling for button

## 1.0.0

> Feb 04, 2021

* :boom: **Breaking** Created `@folkehelseinstituttet/style`
* :gift: **New** Added SCSS to package

## Examples

* :gift: **New**
* :tada: **Enhancement**
* :bug: **Bugfix**
* :boom: **Breaking**
