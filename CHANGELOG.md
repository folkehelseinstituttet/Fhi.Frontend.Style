# 6.5.0

> Feb 7, 2025

* :gift: **New** Icon: Flask (beaker) [(#409)](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/pull/409)
* :gift: **New** Icon: Copy [(#409)](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/pull/409)

## 6.4.0

> Oct 16, 2024

* :tada: **Enhancement** Add reference to github repo in package.json [(#403)](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/pull/403)
* :tada: **Enhancement** Add hover border color (`#cfd0cb`) to icon button [(#404)](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/pull/404)

## 6.3.1

> Sep 9, 2024

* :bug: **Bugfix** Update CSS for Bootstrap `.form-label` and `.form-text` [(#398)](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/pull/398)

## 6.3.0

> Aug 26, 2024

* :bug: **Bugfix** Reset font imports to the pre 6.2.2 solution, and added a script for copying the fonts to the css folder. And update the info in the README about using CSS instead of SCSS. [(#393)](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/pull/393)
* :gift: **New** New icon added: Lock (🔒) [(#395)](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/pull/395)

## 6.2.2

> Jun 5, 2024

* :bug: **Bugfix** Embedded fonts and `x` marker on `::-webkit-search-cancel-button` as base64
* :bug: **Bugfix** Removed padding on `.modal-fullscreen` that in odd cases led to accidental closing of the modal

## 6.2.1

> May 27, 2024

* :bug: **Bugfix** Updated references to import of scss files in npm packages to recommended standards (removed relative reference to `./node_modules/`)

## 6.2.0

> Apr 19, 2024

* :tada: **Enhancement** Disabled states on button group buttons and dropdown items

## 6.1.1

> Mar 22, 2024

* :tada: **Enhancement** Improved custom radio button visuals on system zoom

## 6.1.0

> Mar 19, 2024

* :tada: **Enhancement** Possibility to add icon on a Tab

## 6.0.0

> Feb 29, 2024

* :boom: **Breaking** Color palette cleanup (some core color variables removed)
* :boom: **Breaking** Removed `.fhi-btn-flat`
* :tada: **Enhancement** Button group redesigned, added possibility to include split-button (dropdown) in group
* :tada: **Enhancement** Font family Lato is new global font
* :tada: **Enhancement** Secondary button colors
* :tada: **Enhancement** Table styling improved (th in particular)
* :tada: **Enhancement** Star icon
* :tada: **Enhancement** Modal: alignment of close button (x icon) changed to start
* :tada: **Enhancement** Improved visuals on Logo / project name
* :tada: **Enhancement** Border on Icon Button
* :tada: **Enhancement** Circular variant of Icon Button (without text)

## 5.9.0

> Jan 22, 2024

* :tada: **Enhancement** Added 4 new icons
* :tada: **Enhancement** Upgrade to Bootstrap@5.3.2
* :tada: **Enhancement** Button group bg color white when not active

## 5.8.0

> Jan 08, 2024

* :tada: **Enhancement** Added 3 new icons
* :tada: **Enhancement** Adjusted height on menu buttons
* :tada: **Enhancement** Navigation tile new design. Markup adjusted, but previous markup doesn't break.
* :tada: **Enhancement** Headings (1-5) font sizes reduced, most notably on H1
* :gift: **New** Added CSS class for tighter GUI (For admin type solutions)

## 5.7.0

> Dec 15, 2023

* :tada: **Enhancement** Support change in NgbDatepicker (NgBootstrap v15)
* :tada: **Enhancement** Updated donut chart icon
* :tada: **Enhancement** Add `fhi-btn-link` (`fhi-btn-flat` will be deprecated in next major release)
* :tada: **Enhancement** Datepicker with error padding fix

## 5.6.0

> Aug 28, 2023

* :gift: **New** Error page heading
* :tada: **Enhancement** Improved visuals on interaktive tags w/state
* :gift: **New** Progress bar

## 5.5.0

> Aug 14, 2023

* :gift: **New** Added Tag state alternative
* :tada: **Enhancement** Fullscreen modal
* :gift: **New** Added Cards

## 5.4.0

> Jun 28, 2023

* :gift: **New** Added refresh and reset icons (arrow-clockwise/arrow-counterclockwise)

## 5.3.0

> Jun 14, 2023

* :gift: **New** Added popover

## 5.2.0

> Jun 5, 2023

* :bug: **Bugfix** Hex on danger/error colors adjusted
* :tada: **Enhancement** Error messages has improved visuals
* :tada: **Enhancement** Breadcrumb separator icon reversed
* :tada: **Enhancement** Using .form-text on Form help text
* :tada: **Enhancement** Added fullscreen and log out icons
* :bug: **Bugfix** z-index fix on Drawer and improved specificity on drawer containers
* :gift: **New** Checkbox Tile
* :gift: **New** Radio Button Tile

## 5.1.0

> May 15, 2023

* :tada: **Enhancement** Improved styling on Drawer to prevent it from breaking in some cases
* :tada: **Enhancement** Navigation tiles: icon placed on bottom, max tree lines of description visible
* :bug: **Bugfix** Path to .scss import files corrected ([README.md](README.md#use-in-project))
* :tada: **Enhancement** Added health/living/social icons

## 5.0.0

> Mar 28, 2023

* :boom: **Breaking** Icon set renewed - icons added, some changed and some removed
* :boom: **Breaking** Old SASS imports break (pre 4.1), see [README.md](README.md#use-in-project)
* :boom: **Breaking** Updated variable naming conventions
* :boom: **Breaking** Global headers prior to v.3.10 breaks
* :boom: **Breaking** Material Tree removed
* :tada: **Enhancement** Removed styling for Tree view builder
* :tada: **Enhancement** Danger color changed to a lighter shade of pink
* :bug: **Bugfix** Drawer trigger text now visible on Safari

## 4.2.0

> Feb 28, 2023

* :tada: **Enhancement** Navigation tile without icon
* :tada: **Enhancement** Menu button without icon
* :tada: **Enhancement** Tabs - fhi-prefixed
* :bug: **Bugfix** Radio group hover effect
* :bug: **Bugfix** Search button hover effect

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
    * `$fhi-blue-light-1`
    * `$fhi-blue-light-2`
    * `$fhi-blue-dark-2`
    * `$fhi-blue-dark-3`
    * `$fhi-pink-dark-2`
    * `$fhi-pink-dark-3`
  * _Renamed color variables:_
    * `$fhi-blue-dark-1` => `$fhi-blue-3`
    * `$fhi-pink-light-2` => `$fhi-pink-light-1`
    * `$fhi-pink-light-4` => `$fhi-pink-light-2`
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
