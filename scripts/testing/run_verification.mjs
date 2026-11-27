import { spawn } from 'node:child_process';

const PORT = 3100;
const BASE = `http://127.0.0.1:${PORT}`;

async function waitForServer() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(BASE + '/');
      if (r.ok) return;
    } catch {}
    await new Promise((res) => setTimeout(res, 400));
  }
  throw new Error('Production server did not become ready in time');
}

async function main() {
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    stdio: 'pipe',
    shell: true,
  });

  try {
    await waitForServer();
    const runner = spawn('node', ['scripts/testing/verify_all_routes.mjs'], {
      stdio: 'inherit',
      env: { ...process.env, LOCAL_URL: BASE },
      shell: true,
    });
    const code = await new Promise((resolve) => runner.on('close', resolve));
    process.exitCode = code ?? 1;
  } finally {
    if (process.platform === 'win32') {
      spawn('taskkill', ['/pid', String(server.pid), '/f', '/t'], { shell: true });
    } else {
      server.kill('SIGTERM');
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
