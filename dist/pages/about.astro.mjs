import { b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_LQsHa5ak.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose"> <div class="article-header"><h1>About</h1></div> <p>Open a little box of trail mix. Take out a Brazil nut, a hazelnut, a slice of dried dragon fruit, a fig, a date, and an almond. Count the calories. Make the case that this is sufficient for a proper snack.</p> <p>That's 8this in a nutshell — pragmatic, intentional, creative. Not a diet plan. Not a recipe blog. A practice of treating what you put into your body (and your mind) with the same care you'd bring to any serious craft.</p> <p>The site runs on one core idea: your <em>informational diet</em> is there to fuel your <em>informational exercise program</em>. What you eat and what you read are not separate disciplines. They're both about choosing quality sources, reasonable quantities, and good timing — then building something with what you've consumed.</p> <p>8this covers cooking, food philosophy, diet pragmatics, and the occasional bridge to how those same principles apply to how you read, learn, and think.</p> </article> ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/8this.org/src/pages/about.astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/8this.org/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
