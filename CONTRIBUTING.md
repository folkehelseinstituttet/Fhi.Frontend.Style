# How to contribute

So you're thinking about contributing to Fhi.Frontend.Style? Great! Maintaining and enhancing Fhi.Frontend.Style is a big job, so **the community's help is really appreciated.** Helping out isn't just writing code, it also includes submitting issues, helping confirm issues and improving the documentation.

Table of contents:

- [Submitting Issues](#submitting-issues)
  - [Before you submit an issue](#before-you-submit-an-issue)
  - [Submitting a good issue](#submitting-a-good-issue)
- [Confirming Issues](#confirming-issues)
- [Documentation](#documentation)
- [Fixing Bugs and Adding Features](#fixing-bugs-and-adding-features)
  - [Pull request guidelines for](#pull-request-guidelines-for)
    - [Feature branches](#feature-branches)
    - [Release branches](#release-branches)
    - [PS. If you want to test the package before creating pull request](#ps-if-you-want-to-test-the-package-before-creating-pull-request)
- [License](#license)

## Submitting Issues

Requests for new features and bug reports keep the project moving forward.

### Before you submit an issue

- Ensure you are running the [latest version](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/releases) of Fhi.Frontend.Style
- **Search** the [issue list](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/issues?utf8=✓&q=is%3Aissue) (including closed issues) to make sure it hasn't already been reported.

### Submitting a good issue

- Give the issue a short, clear title that describes the bug or feature request
- Include steps to reproduce the issue
- If possible, include a short code example that reproduces the issue
- Use [markdown formatting](https://guides.github.com/features/mastering-markdown/) as appropriate to make the issue and code more readable.

## Confirming Issues

Before we work on issues, we must confirm them and be able to reproduce them. Confirming issues takes up a great deal of the team's time, so making that job easier is **really appreciated**.

Issues that need confirmation will have the **confirm** label or be unlabeled and have **no milestone**. You can help us to confirm issues by;

- Add steps to reproduce the issue
- Test issues and provide feedback

## Documentation

Great documentation is essential for any open source project and Fhi.Frontend.Style is no exception. [Our README](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/README.md) often lags behind the features that have been implemented or would benefit from better examples.

**PS.** If you would like to contribute to creating an exended, and better, documentation in the form of a [Wiki](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/wiki), help is really appreciated!

## Fixing Bugs and Adding Features

We love pull requests, but would prefer that new contributors start with smaller issues and let us know before you contribute to prevent duplication of work.

It is also a good idea to add a comment to an issue that you are working on to let everyone know. If you stop working on it, also please let us know.

### Pull request guidelines for

#### Feature branches

1. Create a new branch from `main`.
2. Prefix your branch name with either `feature/`, `bugfix/` or `hotfix/`.
3. Before pull request, remember to update `CHANGELOG.md`, and if this is the first pull request after a release, add an extra hash to the existing "version number heading", add a new heading called `# Unreleased`, a date, and then list your changes.
4. Push feature branch, create pull request with a good name, and a comment if necessary
5. After approved review, squash and merge to `main`, and delete your feature branch.

#### Release branches

1. Create a new branch from `main`.
2. Name it `release/x.x.x`, where `x.x.x` is the version you're releasing.
3. Change text `# Unreleased` to `# x.x.x` i `CHANGELOG.md`
4. Run `npm version [patch, minor, major]` to upgrade `package.json` and automatically create a new commit.
5. Push release branch and create pull request
6. After approved review, squash and merge to `main` (deploy), delete the release branch for the previous release, but keep the latest release branch.

#### PS. If you want to test the package before creating pull request

...you can do that in any app using this package, eg. in [https://github.com/folkehelseinstituttet/Fhi.Frontend.Demo](https://github.com/folkehelseinstituttet/Fhi.Frontend.Demo)

- locally, in `[path to]/Fhi.Frontend.Style`, run: `npm pack`
- locally, in `[path to]/Fhi.Frontend.Demo`, run: `npm install [path to]/Fhi.Frontend.Style/folkehelseinstituttet-style-[VERSION].tgz`

## License

Fhi.Frontend.Style is under the [MIT license](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/LICENSE). By contributing to Fhi.Frontend.Style, you assert that:

- The contribution is your own original work.
- You have the right to assign the copyright for the work (it is not owned by your employer, or
  you have been given copyright assignment in writing).
