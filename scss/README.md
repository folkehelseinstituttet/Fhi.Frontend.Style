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
