import redis from 'redis'

const client = redis.createClient({
  username: 'default',
  password: 'AVKHAAIjcDE3Yjg3NmZlMjU1ZGM0YjZmODk4OWYxMTMxNDU5NTUzN3AxMA',
  socket: {
      host: 'warm-chipmunk-21127.upstash.io',
      port: 6379,
      tls: true,
  }
});

await client.connect()
client.on('error', (err) => console.error('Redis Client Error:', err))

export async function databaseImport(id, url) {
  await client.set(id, url)
  console.log(`url: ${url} with id: ${id} is imported`)
}
export async function databaseExport(id) {
  const url = await client.get(id);
  console.log(`url: ${url} with id: ${id} is exported`)
  return url
}

async function closeConnection() {
  await client.quit();
}

process.on('exit', closeConnection);
