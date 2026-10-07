import { getCollection, type CollectionEntry } from 'astro:content';

export const ABOUT_TAG = 'about';

type Article = CollectionEntry<'articles'>;

const byDateDesc = (a: Article, b: Article) =>
  new Date(b.data.date).getTime() - new Date(a.data.date).getTime();

/**
 * Articles for public listings: not hidden (draft) and not the About page.
 * Used by the article routes so that hidden and About-tagged entries never
 * get a page of their own.
 */
export async function getPublishedArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  return all
    .filter((a) => !a.data.draft && !a.data.tags.includes(ABOUT_TAG))
    .sort(byDateDesc);
}

export const CHAPTER_TAG = 'fundamentals';

/**
 * The 8 chapters in reading order: published articles tagged `fundamentals`,
 * oldest first. Drives the previous/next links on each chapter page.
 */
export async function getChapters(): Promise<Article[]> {
  return (await getPublishedArticles())
    .filter((a) => a.data.tags.includes(CHAPTER_TAG))
    .reverse();
}

/**
 * The single About article — the one visible article tagged `about`.
 * Throws at build time if more than one qualifies, turning "one About per
 * site" into a hard rule that fails CI rather than silently shipping two.
 */
export async function getAboutArticle(): Promise<Article | undefined> {
  const all = await getCollection('articles');
  const about = all.filter((a) => !a.data.draft && a.data.tags.includes(ABOUT_TAG));
  if (about.length > 1) {
    throw new Error(
      `Only one visible article may carry the "${ABOUT_TAG}" tag; found ${about.length}: ` +
        about.map((a) => a.slug).join(', '),
    );
  }
  return about[0];
}
