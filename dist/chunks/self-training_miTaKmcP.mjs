import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Last week ran 22 minutes twice. This week it should be 25. Instead of taking a nap — time to go run.</p>\n<p><strong>It would be a good practice of doing things I don’t want to do. Self training.</strong></p>\n<p>Maybe I am just getting better at staying in this somewhat detached, meditative state where you just let things be.</p>\n<p>Having intense work is good for me. I go hard, go back to my stuff, and can feel relaxed about the rest of my side hustles. I am in contact with a bunch of people but I don’t care all that much how well it goes.</p>\n<p>Or maybe that’s what equanimity actually feels like — not caring less, but caring <em>rightly</em>. About the work itself, not the approval.</p>\n<p>The 8this angle: the body and the schedule are both systems you train. Running 25 minutes when you told yourself 22 last week is compound interest on yourself. The reps don’t have to be heroic. They just have to happen.</p>";

				const frontmatter = {"title":"Self Training","date":"2026-05-05","tags":["fitness","discipline","philosophy","sovereignty"],"description":"It would be a good practice of doing things I don't want to do. Self training. Maybe that's what equanimity actually feels like — not caring less, but caring rightly."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/8this.org/src/content/articles/self-training.md";
				const url = undefined;
				function rawContent() {
					return "\nLast week ran 22 minutes twice. This week it should be 25. Instead of taking a nap — time to go run.\n\n**It would be a good practice of doing things I don't want to do. Self training.**\n\nMaybe I am just getting better at staying in this somewhat detached, meditative state where you just let things be.\n\nHaving intense work is good for me. I go hard, go back to my stuff, and can feel relaxed about the rest of my side hustles. I am in contact with a bunch of people but I don't care all that much how well it goes.\n\nOr maybe that's what equanimity actually feels like — not caring less, but caring *rightly*. About the work itself, not the approval.\n\nThe 8this angle: the body and the schedule are both systems you train. Running 25 minutes when you told yourself 22 last week is compound interest on yourself. The reps don't have to be heroic. They just have to happen.\n";
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
