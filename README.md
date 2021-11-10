# Fhi.Frontend.Style

CSS styling used by [Folkehelseinstituttet](https://www.fhi.no), based on [Bootstrap](https://getbootstrap.com) front-end framework.

- [Get started](#get-started)
  - [Install](#install)
  - [Use in project](#use-in-project)
- [Contribute](#contribute)
- [Demo and documentation](#demo-and-documentation)
- [Info about fonts](#info-about-fonts)

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

## Contribute

Read about [how to contribute](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/CONTRIBUTING.md)

## Demo and documentation

Live examples in our demo app: [https://frontendbibliotek.fhi.no](https://frontendbibliotek.fhi.no)
Repo for demo app: [Fhi.Frontend.Demo](https://github.com/folkehelseinstituttet/Fhi.Frontend.Demo)

## Info about fonts

Only `SourceSansPro` and `CrimsonText` are distributed with this package. `BrandonText` are proprietary, and must be imported in projects where it's a design requirement.
