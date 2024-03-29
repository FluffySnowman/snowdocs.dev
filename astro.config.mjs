import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SnowDocs",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/fluffysnowman",
        telegram: "https://t.me/fluffysnowman",
        discord: "https://discord.com/users/295808050416320513"
      },
      sidebar: [
        {
          label: "Welcome",
          link: '/welcome',
        },
        {
          label: "Linux",
          autogenerate: {
            directory: "linux",
          },
          // items: [
          // 	{ label: 'Linux', link: '/commands/shit' },
          // ],
        },
        {
          label: "System Administration",
          autogenerate: {
            directory: "sysadmin",
          },
        },
        {
          label: "Cyber Security",
          autogenerate: {
            directory: "sec",
          },
        },
        {
          label: "Docker",
          autogenerate: {
            directory: "docker",
          },
        },
        {
          label: "Windows",
          autogenerate: {
            directory: "windows",
          },
        },
        {
          label: "Productivity",
          autogenerate: {
            directory: "productivity"
          },
        },
      ],
    }),
    tailwind(),
  ],
});
