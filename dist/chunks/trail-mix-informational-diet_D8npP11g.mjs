import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Open a little plastic box of trail mix. Take out a Brazil nut, a hazelnut, a slice of dried dragon fruit, a fig, a date, and an almond. Count the calories and other nutritional info from all of the above. Make the case that this is sufficient for a proper snack. Note that it all fits into the palm of your hand.</p>\n<p>Compare this healthy snack to other options — in terms of price, breakdown of profit margins, sources of each kind of food. It took a trip to the privilege store to buy it all, bring it home, and portion it into trail mix boxes ready for a hike.</p>\n<p><strong>And now bring it home as a bridge to an informational diet.</strong></p>\n<p>Your curiosity represents your genuine need for development — adjusted to your reality of many high-quality sources available to you, a natural limitation of how much you can digest at any given time, and a unique insight you can develop based on your unique makeup, history, experience and destiny.</p>\n<p><strong>Your informational diet is there to fuel your informational exercise program.</strong></p>\n<p>And by writing this now, you are doing one set of the required reps that get you closer to where you want to go.</p>\n<p>This is 8this: the diet of exercise and the exercise of diet — as it applies to the informational diet.</p>";

				const frontmatter = {"title":"The Trail Mix → Informational Diet Metaphor","date":"2026-04-16","tags":["diet","informational-diet","metaphor","philosophy"],"description":"A box of trail mix as a model for your informational diet — the right sources, quantities, timing. And by writing, you're doing one set of the required reps."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/8this.org/src/content/articles/trail-mix-informational-diet.md";
				const url = undefined;
				function rawContent() {
					return "\nOpen a little plastic box of trail mix. Take out a Brazil nut, a hazelnut, a slice of dried dragon fruit, a fig, a date, and an almond. Count the calories and other nutritional info from all of the above. Make the case that this is sufficient for a proper snack. Note that it all fits into the palm of your hand.\n\nCompare this healthy snack to other options — in terms of price, breakdown of profit margins, sources of each kind of food. It took a trip to the privilege store to buy it all, bring it home, and portion it into trail mix boxes ready for a hike.\n\n**And now bring it home as a bridge to an informational diet.**\n\nYour curiosity represents your genuine need for development — adjusted to your reality of many high-quality sources available to you, a natural limitation of how much you can digest at any given time, and a unique insight you can develop based on your unique makeup, history, experience and destiny.\n\n**Your informational diet is there to fuel your informational exercise program.**\n\nAnd by writing this now, you are doing one set of the required reps that get you closer to where you want to go.\n\nThis is 8this: the diet of exercise and the exercise of diet — as it applies to the informational diet.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
