# Fhi.Frontend.Style

CSS styling used by Folkehelseinstituttet, based on [Bootstrap](https://getbootstrap.com) frontend framework.

## Dependencies

| Fhi.Frontend.Style | Bootstrap | Node/NPM |
| ------------------ | --------- | -------- |
| Unreleased         | 5.3.2     | 18/9*    |
| 5.x.x              | 5.2.x     | 16/8*    |
| 4.x.x              | 5         | 16/8*    |
| 3.x.x              | 5         | 16/8*    |

_* [designsystem.fhi.no](https://designsystem.fhi.no) uses these Node/NPM versions, older versions may work, but then you're on your own_ :wink:

## Changelog

You find the [changelog here](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/CHANGELOG.md)

## Get started

### Install

Install with [npm](https://www.npmjs.com): `npm install @folkehelseinstituttet/style`

### Use in project

If you want the full style library

```scss
@import "@folkehelseinstituttet/style/import/all.scss";
```

If you only need the variables for use in ex. a library

```scss
@import "@folkehelseinstituttet/style/import/all-variables.scss";
```

If you want to use CSS instead of SCSS

- run `npm pack`
- add `~@folkehelseinstituttet/style/css/style.css` to your project

## Contribute

Read about how to contribute [here](https://github.com/folkehelseinstituttet/Fhi.Frontend.Demo/blob/dev/CONTRIBUTING.md)

## Demo and documentation

Live examples in our demo app: [https://designsystem.fhi.no](https://designsystem.fhi.no)
Repo for demo app: [Fhi.Frontend.Demo](https://github.com/folkehelseinstituttet/Fhi.Frontend.Demo)

## Info about fonts

Only `SourceSansPro` and `CrimsonText` are distributed with this package. `BrandonText` are proprietary, and must be imported in projects where it's a design requirement.
