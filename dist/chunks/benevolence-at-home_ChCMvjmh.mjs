import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The turning point was when I offered chicken soup when someone got up in the afternoon. Obviously for that I had to start making it in the morning. But I did it and I reinforced the value of benevolence that I always wanted to have alive and kicking at my home.</p>\n<p>The challenge when I think about it is to make my home feel like home while having other tasks — and the decision is to make things happen and enjoy the process. Take calculated risks. Do things that have to be done and appreciate what I do.</p>\n<p>A successful work-from-home day: discipline, self-acceptance, connection, novelty, positive thinking. Just a little bit more of each.</p>\n<p>Cooking as an act of values: you don’t make the soup because you had time. You make the soup because making the soup <em>is</em> the point. The time comes from the decision to make it.</p>";

				const frontmatter = {"title":"Benevolence at Home","date":"2026-01-08","tags":["cooking","home","values","philosophy"],"description":"The turning point was offering chicken soup. For that I had to start making it in the morning. The decision: make things happen and enjoy the process."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/8this.org/src/content/articles/benevolence-at-home.md";
				const url = undefined;
				function rawContent() {
					return "\nThe turning point was when I offered chicken soup when someone got up in the afternoon. Obviously for that I had to start making it in the morning. But I did it and I reinforced the value of benevolence that I always wanted to have alive and kicking at my home.\n\nThe challenge when I think about it is to make my home feel like home while having other tasks — and the decision is to make things happen and enjoy the process. Take calculated risks. Do things that have to be done and appreciate what I do.\n\nA successful work-from-home day: discipline, self-acceptance, connection, novelty, positive thinking. Just a little bit more of each.\n\nCooking as an act of values: you don't make the soup because you had time. You make the soup because making the soup *is* the point. The time comes from the decision to make it.\n";
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
