import pg from 'pg';

let pool: pg.Pool;

// eslint-disable-next-line import/prefer-default-export
export const getDB = () => {
  if (pool === undefined) {
    if (!process.env.PGHOST) throw new Error('PGHOST not set');
    if (!process.env.PGUSER) throw new Error('PGUSER not set');
    if (!process.env.PGDATABASE) throw new Error('PGDATABASE not set');

    pool = new pg.Pool();

    pool.on('error', (err) => {
      process.exit(-1);
    });
  }

  return pool;
};