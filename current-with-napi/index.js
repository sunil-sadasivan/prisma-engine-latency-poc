const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  log: [{
    emit: 'event',
    level: 'query',
  }],
});

prisma.$on('query', (e) => {
  console.log('SQL QUERY DURATION: ', e.duration, 'ms');
});

// initialize connection
prisma.$connect();

prisma.$use(async (params, next) => {

  console.time('ENGINE EXECUTION TIME');
  const result = await next(params);
  console.timeEnd('ENGINE EXECUTION TIME');
  return result;
})

const run = async () => {
  await prisma.user.findUnique({ where: { id: 1 } });
  await prisma.user.findUnique({ where: { id: 1 } });
  await prisma.user.findUnique({ where: { id: 1 } });
  return null;
};

run().then((result) => { }).finally(() => { prisma.$disconnect(); });

