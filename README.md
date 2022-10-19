# Fhi.Frontend.Style

CSS styling used by Folkehelseinstituttet, based on [Bootstrap](https://getbootstrap.com) frontend framework.

## Get started

### Install

Install with [npm](https://www.npmjs.com): `npm install @folkehelseinstituttet/style`

### Use in project

If you want the full style library

```scss
@import "~@folkehelseinstituttet/style/scss/style.scss";
```

If you only need the variables for use in ex. a library

```scss
@import "~@folkehelseinstituttet/style/scss/variables.scss";
```

If you want to use CSS instead of SCSS

- run `npm pack`
- add `~@folkehelseinstituttet/style/css/style.css` to your project

## Contribute

Read about how to contribute [here](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/CONTRIBUTING.md). These two chapters are especially important:

- [Coding conventions](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/CONTRIBUTING.md#coding-conventions)  
- [Pull request guidelines](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/CONTRIBUTING.md#pull-request-guidelines-for)  

## Demo and documentation

Live examples in our demo app: [https://designsystem.fhi.no](https://designsystem.fhi.no)
Repo for demo app: [Fhi.Frontend.Demo](https://github.com/folkehelseinstituttet/Fhi.Frontend.Demo)

## Info about fonts

Only `SourceSansPro` and `CrimsonText` are distributed with this package. `BrandonText` are proprietary, and must be imported in projects where it's a design requirement.
