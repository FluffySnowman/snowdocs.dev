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
      ],
    }),
    tailwind(),
  ],
});
