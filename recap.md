# Recap of Front-end Development in 2016

* The year of the [UI component, and tree of UI components](http://developer.telerik.com/featured/front-end-application-frameworks-component-architectures/), for building complex UI's.
* No longer mainstream development blasphemy: components being constructed from a single file, potentially contain HTML, CSS, and JS, IN ONE FILE!
* [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/), [Webpack](https://webpack.js.org/), ECMAScript 2015 (aka ES6), and [Babel](https://babeljs.io/) gain massive adoption. These solutions [rise](http://stackoverflow.com/research/developer-survey-2016#technology-trending-tech-on-stack-overflow) [to](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2016-results#js-bundlers) [the](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2016-results#js-framework-essential) [top](http://stateofjs.com/2016/frontend/) [of](http://stateofjs.com/2016/flavors/) [all](http://stateofjs.com/2016/buildtools/) the polls as the most used tech.
* Developers realized, in most cases, HTML 5 hybrid mobile development via webviews doesn't provide enough wins when building native apps.
* [React Native](https://facebook.github.io/react-native/) and [NativeScript](https://www.nativescript.org/) start to replace mobile HTML5 hybrid webview development.
* [Many abandon](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.f9waa6mnx) Gulp for NPM scripts, but Gulp remains popular.
* SASS remains a popular tool, while [PostCSS (+ CSSNext) gains ground](https://tylergaw.com/articles/sass-to-postcss).
* Linting/Hinting [HTML](http://htmlhint.com/), [CSS](http://stylelint.io/), and [JavaScript](http://eslint.org/) is a thing most developers do (ESlint replaces [JShint](http://jshint.com/) & [JSCS](http://jscs.info/) merges into ESLint).
* A trend of developers abandoning Sublime and Atom for [Visual Studio Code](https://code.visualstudio.com/) begins.
* [jQuery remains](https://trends.builtwith.com/javascript), but usage/interest is [declining](https://www.google.com/trends/explore?q=jQuery). [jQuery 3 was released](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/), much like a tree falling in a forest that nobody hears.
* [Vue.js](https://vuejs.org/) continues to gain converts. Deservingly so!
* JavaScript functional programming & patterns [get](https://www.manning.com/books/functional-programming-in-javascript) [a](https://github.com/MostlyAdequate/mostly-adequate-guide) [lot](https://github.com/getify/Functional-Light-JS) [of](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q) attention.
* [Offline development](https://developers.google.com/web/fundamentals/getting-started/codelabs/offline/) & [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) go mainstream.
* Microsoft [shows up and contributes](http://developer.telerik.com/featured/microsoft-done-lately/).
* Developing native applications for windows, OSX, and linux using things like [NW.js](https://nwjs.io/) and [Electron](http://electron.atom.io/) via web technologies becomes a thing.
* [Angular 2](https://angular.io/) (in the future aka "[Angular](https://juristr.com/blog/2016/12/let-me-explain-angular-release-cycles/)") gets off the pot and most realize it will never be as mainstream as Angular 1.
* JavaScript broadly remains at the [center](http://stackoverflow.com/research/developer-survey-2016#technology-top-tech-on-stack-overflow) [of](http://stackoverflow.com/research/developer-survey-2016#technology-most-popular-technologies) [software](http://stackoverflow.com/research/developer-survey-2016#technology-correlated-technologies) technologies.
* More developers start caring about tooling (e.g. automation) and testing.
* [Static site generators](https://www.staticgen.com/) are [taken](https://github.com/vigetlabs/gulp-starter/tree/blendid) [seriously](https://phenomic.io/).
* [CSS Grid excitement grows](http://meyerweb.com/eric/thoughts/2016/12/05/css-grid/) and the future looks bright.
* [NPM](https://www.npmjs.com/) gets some competition from [Yarn](https://yarnpkg.com/).
* The next evolution of React-like solutions shows up via [Preact](https://preactjs.com/), [Deku](https://github.com/anthonyshort/deku), [Rax](https://github.com/alibaba/rax), and [inferno](https://infernojs.org/) showcasing evolution without much API change.
* Mostly people learn to accept [JSX](https://facebook.github.io/jsx/), and now they can't imagine not using it.
* A workable CSS module pattern (CSS encapsulation) is actualized and used, thus [CSS in JS](https://github.com/MicheleBertoli/css-in-js) becomes a viable solution for many.
* More people turning to UI functional/integration testing including concepts like visual [CSS](https://css-tricks.com/automating-css-regression-testing/) & RWD regression testing.
* The days of [battling](https://kangax.github.io/compat-table/es6/) [inconsistent browser API's](https://html5test.com/results/desktop.html) are almost behind us due to a massive decline in usage and development for [older versions of IE](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0).
* Most everyone realized they will have to have a [multi-device strategy](http://www.intel.com/content/dam/www/public/us/en/images/iot/guide-to-iot-infographic.png) plan when developing for the web
* More developers, from other languages, continue to flood the JavaScript space bringing with them things like [type checking](https://flowtype.org/) and an [obsession with class syntax and OOP concepts](https://www.typescriptlang.org/).
* Front-end devs are introduced to [Hot Module replacement techniques and time travel debugging](https://code-cartoons.com/hot-reloading-and-time-travel-debugging-what-are-they-3c8ed2812f35#.ezlpqez1i).
* More waiting for a native [JavaScript browser module loader](https://whatwg.github.io/loader/).
* [Enforcing CSS](https://css-tricks.com/stylelint/) and [JavaScript style conventions](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) becomes more important (considering ES3 to ES6 code and CSS pre-processors syntactical variations)
* A small but noticeable number of developers are starting to [choose Elm over JavaScript](https://www.brianthicks.com/post/2016/04/22/state-of-elm-2016-results/).
* [TypeScript](https://www.typescriptlang.org/) gets some serious use and fanboys.
* http://aurelia.io/ becomes the [smart choice for enterprise developers](https://www.youtube.com/watch?v=6I_GwgoGm1w&t=3315s) (i.e. support!).
* [Webpack](https://webpack.js.org/configuration/) gets its act [together](https://opencollective.com/webpack) and solidifies is position over the superior [JSPM](https://www.pluralsight.com/courses/javascript-systemjs-jspm) solution.
* [HTTPS, yeah, we're serious about that.](https://developers.google.com/web/updates/2016/10/avoid-not-secure-warn)
* [BASH](https://msdn.microsoft.com/en-us/commandline/wsl/about) on windows happens.
* The [notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API) gets used and abused for chrome users, but only after you give it permission.
* [Firebug officially dead](https://github.com/firebug/firebug).
* CSS [20 years young](https://www.w3.org/Style/CSS20/) in 2016.
* [Immutability](https://facebook.github.io/immutable-js/) concepts run rapid.
