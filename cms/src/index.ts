import type { Core } from '@strapi/strapi';
import { newsSeed } from './seed-data/news-articles';

const publicPermissions = [
  'api::news-article.news-article.find',
  'api::news-article.news-article.findOne',
  'api::blog-post.blog-post.find',
  'api::blog-post.blog-post.findOne',
  'api::answer.answer.find',
  'api::answer.answer.findOne',
  'api::contact-submission.contact-submission.create',
];

async function ensurePublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  if (!publicRole) {
    return;
  }

  for (const action of publicPermissions) {
    const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
      where: { action, role: publicRole.id },
    });

    if (!existing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: { action, role: publicRole.id },
      });
    }
  }
}

/**
 * Idempotent news-article seeder.
 *
 * For each article in the seed file, checks whether a row with the same slug
 * already exists. If not, creates it. Existing rows are left alone, so any
 * edits made in the Strapi admin after the initial seed are preserved across
 * boots and redeploys.
 */
async function seedNewsArticles(strapi: Core.Strapi) {
  let created = 0;

  for (const article of newsSeed) {
    const existing = await strapi.db
      .query('api::news-article.news-article')
      .findOne({ where: { slug: article.slug } });

    if (existing) continue;

    await strapi.documents('api::news-article.news-article').create({
      data: {
        title: article.title,
        slug: article.slug,
        category: article.category,
        publishedDate: article.publishedDate,
        displayDate: article.displayDate,
        excerpt: article.excerpt,
        source: article.source,
        image: article.image,
        imagePosition: article.imagePosition,
        externalUrl: article.externalUrl,
        paragraphs: article.paragraphs,
      },
      status: 'published',
    });

    created += 1;
  }

  if (created > 0) {
    strapi.log.info(`Seeded ${created} news article(s); skipped ${newsSeed.length - created} already present`);
  }
}

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Lightweight healthcheck endpoint for Railway / uptime monitors.
    // Returns 200 as soon as the HTTP server is listening, independent of
    // database state.
    strapi.server.routes([
      {
        method: 'GET',
        path: '/_health',
        handler: (ctx) => {
          // Body must be assigned before status; Koa downgrades 200 to 204
          // when the body is not set at the time the status is read.
          ctx.body = { status: 'ok' };
          ctx.status = 200;
        },
        config: {
          auth: false,
          policies: [],
          middlewares: [],
        },
      },
    ]);
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensurePublicPermissions(strapi);
    await seedNewsArticles(strapi);
  },
};
