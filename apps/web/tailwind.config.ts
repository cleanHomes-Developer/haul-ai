import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:      '#1B2A4A',
        'navy-mid':'#243552',
        'navy-lt': '#2D4066',
        green:     '#2E7D32',
        'green-dk':'#1B5E20',
        'green-bg':'#E8F5E9',
        amber:     '#7B4000',
        'amber-bg':'#FFF3E0',
        danger:    '#B71C1C',
        'danger-bg':'#FFEBEE',
        'off-white':'#F5F7FA',
        faint:     '#E8EDF4',
        rule:      '#C9D3E0',
        'rule-hvy':'#8FA3BF',
        muted:     '#536B8A',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        sans:    ['"Libre Franklin"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        none:    '0px',
        sm:      '2px',
        DEFAULT: '2px',
        md:      '2px',
        lg:      '2px',
        full:    '9999px',
      },
      boxShadow: {
        none:    'none',
        sm:      'none',
        DEFAULT: 'none',
        md:      'none',
        lg:      'none',
        xl:      'none',
        '2xl':   'none',
      },
    },
  },
  plugins: [],
};

export default config;
