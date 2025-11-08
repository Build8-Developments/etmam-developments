module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "/var/www/strapi",
      script: "npm",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: "1337",
        APP_KEYS:
          "nKD7QuC8+gpwNiOrofWIUg==,1Rq3WWM/46qXE3kzeNY3Aw==,BHceX2EpsEA5KPkwugVzHw==,lS3i1I8b5ZeMKf+epaUrcw==",
        API_TOKEN_SALT:
          "fdade5a4e1934c6ad2cf65964712ef11a20b7a0e752dd680cae54f1e977ed071",
        ADMIN_JWT_SECRET: "kESmwuyDquOXfxKODWcodg==",
        JWT_SECRET:
          "179771ecdf87b6c5a508431570382d05cbba700f4dba933035d9db7941325ad5",
        TRANSFER_TOKEN_SALT:
          "59ac5e1c5c01046f27c9a330ac7b9b6129684abb30babdcb37228c9225c2f1bc",
        ENCRYPTION_KEY: "DP245P3kUv0j8h5ejMgBrA==",
        URL: "https://etmam-admin.alkelany.com",
      },
      error_file: "/var/log/pm2/strapi-error.log",
      out_file: "/var/log/pm2/strapi-out.log",
      log_file: "/var/log/pm2/strapi-combined.log",
      time: true,
      merge_logs: true,
      kill_timeout: 5000,
    },
  ],
};
