import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
   /* {
      text: 'Inicio',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },*/
    {
      text: 'Mesa',
      href: "#calTable",
      links: [
        {
          text: 'Espiral',
          href: getPermalink('/mesa/espiral'),
        },
        {
          text: 'Triangular',
          href: getPermalink('/mesa/triangular'),
        }
      ]
    },
    {
      text: 'Pared',
      href:'#',
      links: [ 
        {
          text: 'Espiral',
          href:  getPermalink('/pared/espiral'),
        },
        {
          text: 'Revista',
          href:  getPermalink('/pared/revista'),
        }
      ]
    },
    {
      text: 'Nosotros',
      href: 'https://reprodisseny.com/page/sobre-nosotros'
    },
    {
      text: 'Contacto',
      href: 'contacto'
    },
  ]
};

export const footerData = {
  links: [
    {
      title: 'Calendarios',
      links: [
        { text: 'Calendario de mesa espiral', href: '#' },
        { text: 'Calendario de mesa triangular', href: '#' },
        { text: 'Calendario de parad espiral', href: '#' },
        { text: 'Calendario de pared revista', href: '#' },
        
      ],
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },

  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url()] alt="Logo Repro Disseny" loading="lazy"></img>
    Repro Disseny 2024 <a class="text-blue-600 underline dark:text-muted" href="https://reprodisseny.com/page/aviso-legal"> Aviso legal</a> · Todos los derechos reservados.
  `,
};
