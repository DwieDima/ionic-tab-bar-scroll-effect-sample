# Ionic scroll effect sample

An Angular (standalone) tabs app for trying the `scrollEffect` of `ion-tab-bar`, `ion-header`, and `ion-footer`, including the new `fade` effect for the tab bar and the `tabBarScrollEffect` property of `ion-content`.

It uses a build of the Ionic Framework from the pull request
[feat(tab-bar): add fade scroll effect](https://github.com/DwieDima/ionic-framework-tabtap/pull/2).
The built packages are in [`.local-ionic`](.local-ionic), so nothing has to be built to run it.

## Run

Angular 22 needs Node.js 22.22.3 or newer.

```sh
npm install
npm start
```

Open http://localhost:4200 with the device toolbar of the browser dev tools turned on, so that the content scrolls with touch. Scrolling with the mouse wheel also works.

Add `?ionic:mode=ios` or `?ionic:mode=md` to the URL to switch the mode. The iOS large title needs iOS mode.

## What to try

| Where | What it shows |
| --- | --- |
| Tab 1 | Header and tab bar with `scrollEffect="hide"`. Scroll down, scroll back slowly (they stay hidden), then scroll back quickly (they return). |
| Tab 1, sub page | A page that can go back keeps the tab bar in place. The header still hides. |
| Tab 1, sub page with `tabBarScrollEffect` | A page that can go back, but applies the tab bar scroll effect. |
| Tab 2 | Static header, the tab bar hides. |
| Tab 3 | Header and tab bar hide, after switching tabs. |
| More, tab bar fade | A translucent tab bar over fullscreen content. Its background fades out at the end of the content. |
| More, footer | `ion-footer` with `scrollEffect="hide"` and `"fade"`. |
| More, header, footer and tab bar | All three hide together, without a gap. |
| More, header | A header with multiple toolbars, and the iOS large title with and without `scrollEffect="hide"`. |
| More, modal | A modal with its own header and footer that hide. The tab bar behind it is not affected. |

The tab bar effect can be changed with a query parameter: `?tabBar=hide` (default), `?tabBar=fade`, or `?tabBar=none`.

## Use another build of the framework

```sh
IONIC_REPO=/path/to/ionic-framework ./scripts/sync-local-ionic.sh
```

This builds `@ionic/core` and `@ionic/angular` from the checkout and installs them into the app. Pass `--skip-core` when only the Angular package changed.
