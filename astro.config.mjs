import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'SnowDocs',
    customCss: ['./src/styles/custom.css'],
    social: {
      github: 'https://github.com/fluffysnowman'
    },
    sidebar: [{
      label: 'Linux',
      autogenerate: {
        directory: 'linux'
      }
      // items: [
      // 	{ label: 'Linux', link: '/commands/shit' },
      // ],
    }, {
      label: 'System Administration',
      autogenerate: {
        directory: 'sysadmin'
      }
    }, {
      label: 'Docker',
      autogenerate: {
        directory: 'docker'
      }
    }]
  }), tailwind(), expressiveCode(), mdx(), react()]
});