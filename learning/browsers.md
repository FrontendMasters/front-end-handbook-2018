# Learn Web Browsers

> A web browser (commonly referred to as a browser) is a software application for retrieving, presenting, and traversing information resources on the World Wide Web. An information resource is identified by a Uniform Resource Identifier (URI/URL) and may be a web page, image, video or other piece of content. Hyperlinks present in resources enable users easily to navigate their browsers to related resources. Although browsers are primarily intended to use the World Wide Web, they can also be used to access information provided by web servers in private networks or files in file systems.

><cite>&#8212; [Wikipedia](https://en.wikipedia.org/wiki/Web_browser)</cite>


##### The [most commonly used browsers](https://www.sitepoint.com/browser-trends-september-2016-browser-wars/) (on any device) are:

1. [Chrome](http://www.google.com/chrome/) (engine: [Blink](https://en.wikipedia.org/wiki/Blink_%28layout_engine%29) + [V8](https://en.wikipedia.org/wiki/V8_%28JavaScript_engine%29))
2. [Firefox](https://www.mozilla.org/en-US/firefox/new/) (engine: [Gecko](https://en.wikipedia.org/wiki/Gecko_%28software%29) + [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey_%28software%29))
3. [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie) (engine: [Trident](https://en.wikipedia.org/wiki/Trident_%28layout_engine%29) + [Chakra](https://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29))
4. [Safari](https://www.apple.com/safari/) (engine: [Webkit](https://en.wikipedia.org/wiki/WebKit) + [SquirrelFish](https://trac.webkit.org/wiki/SquirrelFish))

![](../images/statcounter.png "http://gs.statcounter.com/#all-browser_version_partially_combined-ww-daily-20160101-20161201-bar")

<cite>Image source: <a href="http://gs.statcounter.com/#all-browser_version_partially_combined-ww-daily-20160101-20161201-bar">http://gs.statcounter.com/#all-browser_version_partially_combined-ww-monthly-201501-201601-bar</a></cite>

##### Evolution of Browsers & Web Technologies (i.e., APIs)

* [evolutionoftheweb.com](http://www.evolutionoftheweb.com/) [read]
* [Timeline of web browsers](https://en.wikipedia.org/wiki/Timeline_of_web_browsers) [read]

##### The Most Commonly Used Headless Browser Are:

* [PhantomJS](http://phantomjs.org/) (engine: [Webkit](https://en.wikipedia.org/wiki/WebKit) + SquirrelFish)
* [SlimerJS](http://slimerjs.org/) (engine: [Gecko](https://en.wikipedia.org/wiki/Gecko_%28software%29) + [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey_%28software%29))
* [TrifleJS](http://triflejs.org/) (engine: [Trident](https://en.wikipedia.org/wiki/Trident_%28layout_engine%29) + [Chakra](https://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29))

##### How Browsers Work

* [20 Things I Learned About Browsers and the Web](http://www.20thingsilearned.com/en-US/foreword/1) [read]
* [Fast CSS: How Browsers Lay Out Web Pages](http://dbaron.org/talks/2012-03-11-sxsw/master.xhtml) [read]
* [How Browsers Work: Behind the scenes of modern web browsers](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) [read]
* [So How Does the Browser Actually Render a Website](https://www.youtube.com/watch?v=SmE4OwHztCc) [watch]
* [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a) [read]
* [What Every Frontend Developer Should Know About Webpage Rendering](http://frontendbabel.info/articles/webpage-rendering-101/) [read]

![](../images/browsers-work.png "http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/")

<cite>Image source: <a href="http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/">http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/</a></cite>

##### Optimizing for Browsers:

* [Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860) [watch]
* [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884) [watch]

##### Comparing Browsers

* [Comparison of Web Browsers](https://en.wikipedia.org/wiki/Comparison_of_web_browsers) [read]

##### Browser Hacks

* [browserhacks.com](http://browserhacks.com/) [read]

##### Developing for Browsers

In the past, front-end developers spent a lot of time making code work in several different browsers. This was once a bigger issue than it is today. Today, abstractions (e.g., jQuery, React, Post-CSS, Babel etc...) combined with modern browsers make browser development fairly easy. The new challenge is not which browser the user will use, but on which device they will run the browser.

##### Evergreen Browsers

The latest versions of most modern browsers are considered evergreen browsers. That is, in theory they are suppose to automatically update themselves silently without prompting the user. This move towards self updating browsers has been in reaction to the slow process of eliminating older browsers that do not auto-update.

##### Picking a Browser [^1]

As of today, most front-end developers use Chrome and "Chrome Dev Tools" to develop front-end code. However, the most used modern browsers all offer a flavor of developer tools. Picking one to use for development is a subjective choice. The more important issue is knowing which browsers, on which devices, you have to support and then testing appropriately.

***

###### ADVICE:

[^1] I suggest using Chrome because the developer tools are consistently improving and at this time contain the most robust features.

























