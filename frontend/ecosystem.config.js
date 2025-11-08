module.exports = {
  apps: [
    {
      name: "etmam-frontend",
      cwd: "/var/www/etmam-frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
        HOSTNAME: "0.0.0.0",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "3000",
        HOSTNAME: "0.0.0.0",
      },
      error_file: "/var/log/pm2/etmam-frontend-error.log",
      out_file: "/var/log/pm2/etmam-frontend-out.log",
      log_file: "/var/log/pm2/etmam-frontend-combined.log",
      time: true,
      merge_logs: true,
      kill_timeout: 5000,
    },
  ],
};
