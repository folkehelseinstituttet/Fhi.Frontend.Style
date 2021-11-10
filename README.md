# Fhi.Frontend.Style

Package containing fhi styling in both css and scss form for easy use in projects

## Usage

**NB!** Only `SourceSansPro` and `CrimsonText` are distributed with this package. `BrandonText` are proprietary, and needs to be imported in projects where it's a design requirement.

If you want the full style library

```scss
@import "~@folkehelseinstituttet/style/scss/style.scss";
```

If you only need the variables for use in ex. a library

```scss
@import "~@folkehelseinstituttet/style/scss/variables.scss";
```




// Update README (merge the two README's and remove deprecated info)

// PR v4.0.0
// - Delete scss/
// - Updaet package.json accordingly
// - Delete "$white: $fhi-white; // DEPRECATED! Use $fhi-white"








# Syntax and folder structure

- [Syntax](#syntax)
  - [SASS](#sass)
  - [BEM](#bem)
    - [BEM in a nutshell](#bem-in-a-nutshell)
- [Folder structure](#folder-structure)

## Syntax

### SASS

This project is using [SCSS syntax](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax).

### BEM

This project is using BEM syntax, but only in the folder `style/blocks`

#### BEM in a nutshell

```css
.person {}
.person--female {}
.person__hand {}
.person__hand--left {}
```

```html
<div class="person person--female">
  <div class="person__hand person__hand--left"></div>
</div>
```

More info about BEM: [getbem.com](http://getbem.com/introduction)

## Folder structure

```sh
style/
    blocks/ 
        #BEM syntax in this folder only
        _fhi.[BEM-block-name].block.scss
        ...

    bootstrap/
        #All Bootstrap overrides
        ...

    fonts/
        #PTSerif, SourceSansPro
        _fonts.scss

    #All "FHI basics" styles
    _[file-name].scss
    ...

variables/
    ...

style.scss #All scss output
variables.scss #Output for libraries
```
