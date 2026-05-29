import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The 8this domain has a potential for things beyond food.</p>\n<p>We all have things we keep learning and relearning, we go into rabbit holes.</p>\n<p>What inspired this expansion — a list of essential life skills nobody taught us at school or at home. Financial literacy, car loans, how to change a tire, what chemicals can’t be mixed, basic sewing, food storage, how to negotiate hospital bills. A running “Teach Myself List.”</p>\n<p>The 8this insight: just as you curate and portion your food intake — the right sources, the right quantities, the right timing — so too with information, skills, and knowledge.</p>\n<p>Your <em>informational diet</em> is there to fuel your <em>informational exercise program</em>. And by writing, you are doing one set of the required reps that get you closer to where you want to go.</p>\n<p>The discipline is not about doing everything at once. Pick one thing to learn every couple months. Whichever would be most useful.</p>";

				const frontmatter = {"title":"8this — Beyond Food","date":"2026-01-26","tags":["philosophy","diet","informational-diet","learning"],"description":"Just as you curate and portion your food intake, so too with information, skills, and knowledge. Your informational diet is there to fuel your informational exercise program."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/8this.org/src/content/articles/8this-beyond-food.md";
				const url = undefined;
				function rawContent() {
					return "\nThe 8this domain has a potential for things beyond food.\n\nWe all have things we keep learning and relearning, we go into rabbit holes.\n\nWhat inspired this expansion — a list of essential life skills nobody taught us at school or at home. Financial literacy, car loans, how to change a tire, what chemicals can't be mixed, basic sewing, food storage, how to negotiate hospital bills. A running \"Teach Myself List.\"\n\nThe 8this insight: just as you curate and portion your food intake — the right sources, the right quantities, the right timing — so too with information, skills, and knowledge.\n\nYour *informational diet* is there to fuel your *informational exercise program*. And by writing, you are doing one set of the required reps that get you closer to where you want to go.\n\nThe discipline is not about doing everything at once. Pick one thing to learn every couple months. Whichever would be most useful.\n";
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
