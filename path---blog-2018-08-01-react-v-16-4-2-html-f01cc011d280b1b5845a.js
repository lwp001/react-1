webpackJsonp([3473841433078],{812:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We discovered a minor vulnerability that might affect some apps using ReactDOMServer. We are releasing a patch version for every affected React minor release so that you can upgrade with no friction. Read on for more details.</p>\n<h2 id="short-description"><a href="#short-description" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Short Description</h2>\n<p>Today, we are releasing a fix for a vulnerability we discovered in the <code class="gatsby-code-text">react-dom/server</code> implementation. It was introduced with the version 16.0.0 and has existed in all subsequent releases until today.</p>\n<p>This vulnerability <strong>can only affect some server-rendered React apps.</strong> Purely client-rendered apps are <strong>not</strong> affected. Additionally, we expect that most server-rendered apps don’t contain the vulnerable pattern described below. Nevertheless, we recommend to follow the mitigation instructions at the earliest opportunity.</p>\n<p>While we were investigating this vulnerability, we found similar vulnerabilities in a few other popular front-end libraries. We have coordinated this release together with <a href="https://github.com/vuejs/vue/releases/tag/v2.5.17">Vue</a> and <a href="https://github.com/developit/preact-render-to-string/releases/tag/3.7.1">Preact</a> releases fixing the same issue. The tracking number for this vulnerability is <code class="gatsby-code-text">CVE-2018-6341</code>.</p>\n<h2 id="mitigation"><a href="#mitigation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mitigation</h2>\n<p><strong>We have prepared a patch release with a fix for every affected minor version.</strong></p>\n<h3 id="160x"><a href="#160x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.0.x</h3>\n<p>If you’re using <code class="gatsby-code-text">react-dom/server</code> with this version:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.0.0</code></li>\n</ul>\n<p>Update to this version instead:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.0.1</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<h3 id="161x"><a href="#161x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.1.x</h3>\n<p>If you’re using <code class="gatsby-code-text">react-dom/server</code> with one of these versions:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.1.0</code></li>\n<li><code class="gatsby-code-text">react-dom@16.1.1</code></li>\n</ul>\n<p>Update to this version instead:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.1.2</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<h3 id="162x"><a href="#162x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.2.x</h3>\n<p>If you’re using <code class="gatsby-code-text">react-dom/server</code> with this version:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.2.0</code></li>\n</ul>\n<p>Update to this version instead:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.2.1</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<h3 id="163x"><a href="#163x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.3.x</h3>\n<p>If you’re using <code class="gatsby-code-text">react-dom/server</code> with one of these versions:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.3.0</code></li>\n<li><code class="gatsby-code-text">react-dom@16.3.1</code></li>\n<li><code class="gatsby-code-text">react-dom@16.3.2</code></li>\n</ul>\n<p>Update to this version instead:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.3.3</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<h3 id="164x"><a href="#164x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.4.x</h3>\n<p>If you’re using <code class="gatsby-code-text">react-dom/server</code> with one of these versions:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.4.0</code></li>\n<li><code class="gatsby-code-text">react-dom@16.4.1</code></li>\n</ul>\n<p>Update to this version instead:</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.4.2</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<p>If you’re using a newer version of <code class="gatsby-code-text">react-dom</code>, no action is required.</p>\n<p>Note that only the <code class="gatsby-code-text">react-dom</code> package needs to be updated.</p>\n<h2 id="detailed-description"><a href="#detailed-description" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Detailed Description</h2>\n<p>Your app might be affected by this vulnerability only if both of these two conditions are true:</p>\n<ul>\n<li>Your app is <strong>being rendered to HTML using <a href="/docs/react-dom-server.html">ReactDOMServer API</a></strong>, and</li>\n<li>Your app <strong>includes a user-supplied attribute name in an HTML tag.</strong></li>\n</ul>\n<p>Specifically, the vulnerable pattern looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">props<span class="token punctuation">[</span>userProvidedData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>\n</span><span class="token keyword">let</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> html <span class="token operator">=</span> ReactDOMServer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In order to exploit it, the attacker would need to craft a special attribute name that triggers an <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a> vulnerability. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> userProvidedData <span class="token operator">=</span> <span class="token string">\'>&lt;/div>&lt;script>alert("hi")&lt;/script>\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In the vulnerable versions of <code class="gatsby-code-text">react-dom/server</code>, the output would let the attacker inject arbitrary markup:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hi"</span><span class="token punctuation">)</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>In the versions after the vulnerability was <a href="https://github.com/facebook/react/pull/13302">fixed</a> (and before it was introduced), attributes with invalid names are skipped:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>You would also see a warning about an invalid attribute name.</p>\n<p>Note that <strong>we expect attribute names based on user input to be very rare in practice.</strong> It doesn’t serve any common practical use case, and has other potential security implications that React can’t guard against.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>React v16.4.2 is available on the npm registry.</p>\n<p>To install React 16 with Yarn, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add react@^16.4.2 react-dom@^16.4.2\n</code></pre>\n      </div>\n<p>To install React 16 with npm, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> --save react@^16.4.2 react-dom@^16.4.2\n</code></pre>\n      </div>\n<p>We also provide UMD builds of React via a CDN:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Refer to the documentation for <a href="/docs/installation.html">detailed installation instructions</a>.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-dom-server"><a href="#react-dom-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM Server</h3>\n<ul>\n<li>\n<p>Fix a potential XSS vulnerability when the attacker controls an attribute name (<code class="gatsby-code-text">CVE-2018-6341</code>). This fix is available in the latest <code class="gatsby-code-text">react-dom@16.4.2</code>, as well as in previous affected minor versions: <code class="gatsby-code-text">react-dom@16.0.1</code>, <code class="gatsby-code-text">react-dom@16.1.2</code>, <code class="gatsby-code-text">react-dom@16.2.1</code>, and <code class="gatsby-code-text">react-dom@16.3.3</code>. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/13302">#13302</a>)</p>\n</li>\n<li>\n<p>Fix a crash in the server renderer when an attribute is called <code class="gatsby-code-text">hasOwnProperty</code>. This fix is only available in <code class="gatsby-code-text">react-dom@16.4.2</code>. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/13303">#13303</a>)</p>\n</li>\n</ul>',excerpt:"We discovered a minor vulnerability that might affect some apps using ReactDOMServer. We are releasing a patch version for every affected React minor release so that you can upgrade with no friction. Read on for more details. Short Description Today, we are releasing a fix for a vulnerability we discovered in the   implementation. It was introduced with the version 16.0.0 and has existed in all subsequent releases until today. This vulnerability  can only affect some server-rendered React apps…",frontmatter:{title:"React v16.4.2: Server-side vulnerability fix",next:null,prev:null,author:[{frontmatter:{name:"Dan Abramov",url:"https://twitter.com/dan_abramov"}}]},fields:{date:"August 01, 2018",path:"blog/2018-08-01-react-v-16-4-2.md",slug:"/blog/2018/08/01/react-v-16-4-2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}}]}},pathContext:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}}});
//# sourceMappingURL=path---blog-2018-08-01-react-v-16-4-2-html-f01cc011d280b1b5845a.js.map