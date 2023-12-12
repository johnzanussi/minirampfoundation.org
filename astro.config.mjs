import { defineConfig } from 'astro/config';

import purgecss from 'astro-purgecss';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    integrations: [
        purgecss({
            safelist: ['mce_inline_error'],
        }),
        compress(),
    ],
});