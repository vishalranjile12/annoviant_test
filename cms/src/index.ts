import type { Core } from '@strapi/strapi';

const seedArticles = [
  {
    title: "Alpharetta startup's technology could revolutionize cardiac surgeries",
    slug: 'alpharetta-startup-cardiac-surgeries',
    category: 'Media' as const,
    publishedDate: '2024-08-01',
    externalUrl:
      'https://annoviant.com/2024/08/alpharetta-startups-technology-could-revolutionize-cardiac-surgeries/',
  },
  {
    title:
      'Annoviant™ Awarded $2.99 Million NIH Grant to Advance TxGuard™ Pulmonary-Valved Conduit for Pediatric Heart Disease',
    slug: 'annoviant-nih-grant-txguard-pulmonary-valved-conduit',
    category: 'Press Release' as const,
    publishedDate: '2024-04-01',
    externalUrl:
      'https://annoviant.com/2024/04/annoviant-awarded-2-99-million-nih-grant-to-advance-txguard-pulmonary-valved-conduit-for-pediatric-heart-disease/',
  },
  {
    title: 'Alpharetta-Based Annoviant is a Medical Device Startup That Truly Grows With Patients',
    slug: 'alpharetta-annoviant-grows-with-patients',
    category: 'Media' as const,
    publishedDate: '2023-04-01',
    externalUrl:
      'https://annoviant.com/2023/04/alpharetta-based-annoviant-is-a-medical-device-startup-that-truly-grows-with-patients/',
  },
];

const publicPermissions = [
  'api::news-article.news-article.find',
  'api::news-article.news-article.findOne',
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

async function seedNewsArticles(strapi: Core.Strapi) {
  const existing = await strapi.db.query('api::news-article.news-article').findMany({ limit: 1 });

  if (existing.length > 0) {
    return;
  }

  for (const article of seedArticles) {
    await strapi.documents('api::news-article.news-article').create({
      data: {
        ...article,
        publishedAt: new Date().toISOString(),
      },
      status: 'published',
    });
  }

  strapi.log.info('Seeded initial news articles');
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensurePublicPermissions(strapi);
    await seedNewsArticles(strapi);
  },
};
