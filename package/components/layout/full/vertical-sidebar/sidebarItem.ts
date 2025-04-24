import { PointIcon } from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipBgColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  external?: boolean;
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
      title: 'Dashboard',
      icon: 'atom-line-duotone',
      to: '/',
      external: false
  },
  {
      title: 'General',
      icon: 'screencast-2-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/dashboards/general',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Classic',
      icon: 'atom-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/dashboards/classic',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Analytical',
      icon: 'box-minimalistic-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/dashboards/analytical',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Campaign',
      icon: 'buildings-2-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/dashboards/campaign',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Modern',
      icon: 'basketball-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/dashboards/modern',
      chip: 'Pro',
      external: true
  },
  {
      title: 'eCommerce',
      icon: 'cart-large-2-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/dashboards/ecommerce',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Front Pages',
      icon: 'home-angle-linear',
      to: '',
      children: [
          {
              title: 'Homepage',
              to: 'https://materialpro-nuxtjs-main.netlify.app/front-pages/homepage',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'About Us',
              to: 'https://materialpro-nuxtjs-main.netlify.app/front-pages/about-us',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Blog',
              to: 'https://materialpro-nuxtjs-main.netlify.app/front-pages/blog/posts',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Blog Details',
              to: 'https://materialpro-nuxtjs-main.netlify.app/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Contact Us',
              to: 'https://materialpro-nuxtjs-main.netlify.app/front-pages/contact-us',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Portfolio',
              to: 'https://materialpro-nuxtjs-main.netlify.app/front-pages/portfolio',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Pricing',
              to: 'https://materialpro-nuxtjs-main.netlify.app/front-pages/pricing',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          }
      ]
  },
  { header: 'ui' },
  {
      title: 'Typography',
      icon: 'text-circle-outline',
      to: '/ui/typography'
  },
  {
      title: 'Shadow',
      icon: 'watch-square-minimalistic-charge-line-duotone',
      to: '/ui/shadow'
  },
  { header: 'Apps' },
  {
      title: 'Contact',
      icon: 'iphone-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/apps/contacts',
      chip: 'Pro',
      external: true
  },

  {
      title: 'Blog',
      icon: 'widget-4-line-duotone',
      to: '/',
      children: [
          {
              title: 'Posts',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/blog/posts',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Detail',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          }
      ]
  },
  {
      title: 'E-Commerce',
      icon: 'cart-3-line-duotone',
      to: '/ecommerce',
      children: [
          {
              title: 'Shop',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/ecommerce/products',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Detail',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/ecommerce/product/detail/1',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'List',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/ecommerce/productlist',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Checkout',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/ecommerce/checkout',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Add Product',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/ecommerce/addproduct',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Edit Product',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/ecommerce/editproduct',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          }
      ]
  },
  {
      title: 'Chats',
      icon: 'chat-round-line-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/apps/chats',
      chip: 'Pro',
      external: true
  },
  {
      title: 'User Profile',
      icon: 'shield-user-line-duotone',
      to: '/',
      children: [
          {
              title: 'Profile',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/user/profile',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Followers',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/user/profile/followers',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Friends',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/user/profile/friends',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Gallery',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/user/profile/gallery',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          }
      ]
  },
  {
      title: 'Invoice',
      icon: 'bill-check-outline',
      to: '/',
      children: [
          {
              title: 'List',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/invoice',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Details',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/invoice/details/102',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Create',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/invoice/create',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Edit',
              to: 'https://materialpro-nuxtjs-main.netlify.app/apps/invoice/edit/102',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          }
      ]
  },
  {
      title: 'Notes',
      icon: 'document-text-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/apps/notes',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Calendar',
      icon: 'calendar-mark-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/apps/calendar',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Email',
      icon: 'letter-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/apps/email',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Tickets',
      icon: 'ticker-star-outline',
      to: 'https://materialpro-nuxtjs-main.netlify.app/apps/tickets',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Kanban',
      icon: 'airbuds-case-minimalistic-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/apps/kanban',
      chip: 'Pro',
      external: true
  },
  { header: 'Pages' },
  {
      title: 'Pricing',
      icon: 'dollar-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/theme-pages/pricing',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Search Results',
      icon: 'card-search-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/theme-pages/search-results',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Social Contacts',
      icon: 'chat-round-like-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/theme-pages/social-media-contacts',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Account Setting',
      icon: 'settings-minimalistic-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/theme-pages/account-settings',
      chip: 'Pro',
      external: true
  },

  {
      title: 'FAQ',
      icon: 'question-circle-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/theme-pages/faq',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Gallery Lightbox',
      icon: 'gallery-bold-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/theme-pages/gallery-lightbox',
      chip: 'Pro',
      external: true
  },
  { header: 'Components' },
  {
      title: 'Ui Components',
      icon: 'waterdrops-line-duotone',
      to: '/components/',
      children: [
          {
              title: 'Alert',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/alert',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Accordion',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/accordion',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Avatar',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/avatar',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Chip',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/chip',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Dialog',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/dialogs',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'List',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/list',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Menus',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/menus',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Rating',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/rating',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Tabs',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/tabs',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Tooltip',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/tooltip',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Typography',
              to: 'https://materialpro-nuxtjs-main.netlify.app/ui-components/typography',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          }
      ]
  },
  { header: 'Charts' },
  {
      title: 'Line',
      icon: 'chat-square-2-outline',
      to: 'https://materialpro-nuxtjs-main.netlify.app/charts/line-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Gredient',
      icon: 'round-graph-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/charts/gredient-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Area',
      icon: 'graph-up-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/charts/area-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Candlestick',
      icon: 'chandelier-broken',
      to: 'https://materialpro-nuxtjs-main.netlify.app/charts/candlestick-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Column',
      icon: 'colour-tuneing-broken',
      to: 'https://materialpro-nuxtjs-main.netlify.app/charts/column-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Doughnut & Pie',
      icon: 'pie-chart-2-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/charts/doughnut-pie-chart',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Radialbar & Radar',
      icon: 'radar-2-outline',
      to: 'https://materialpro-nuxtjs-main.netlify.app/charts/radialbar-chart',
      chip: 'Pro',
      external: true
  },
  { header: 'Forms' },
  {
      title: 'Form Elements',
      icon: 'text-selection-line-duotone',
      to: '/components/',
      children: [
          {
              title: 'Autocomplete',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/autocomplete',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Combobox',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/combobox',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Button',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/button',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Checkbox',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/checkbox',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Custom Inputs',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/custominputs',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'File Inputs',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/fileinputs',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Radio',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/radio',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Date Time',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/date-time',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Select',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/select',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Slider',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/slider',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Switch',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/switch',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Time Picker',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/timepicker',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Stepper',
              to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-elements/stepper',
              chip: 'Pro',
              icon: PointIcon,
              external: true

          }
      ]
  },
  {
      title: 'Form Layout',
      icon: 'layers-minimalistic-outline',
      to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-layouts',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Form Horizontal',
      icon: 'password-minimalistic-input-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-horizontal',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Form Vertical',
      icon: 'slider-vertical-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-vertical',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Form Custom',
      icon: 'clapperboard-play-outline',
      to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-custom',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Form Validation',
      icon: 'soundwave-square-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/forms/form-validation',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Editor',
      icon: 'clapperboard-edit-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/forms/editor',
      chip: 'Pro',
      external: true
  },
  { header: 'Widgets' },
  {
      title: 'Cards',
      icon: 'cardholder-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/widgets/cards',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Banners',
      icon: 'align-vertical-spacing-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/widgets/banners',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Charts',
      icon: 'chart-square-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/widgets/charts',
      chip: 'Pro',
      external: true
  },
  { header: 'Tables' },
  {
      title: 'Basic Table',
      icon: 'tablet-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/tables/basic',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Dark Table',
      icon: 'bedside-table-4-outline',
      to: 'https://materialpro-nuxtjs-main.netlify.app/tables/dark',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Density Table',
      icon: 'bedside-table-3-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/tables/density',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Fixed Header Table',
      icon: 'archive-up-minimlistic-broken',
      to: 'https://materialpro-nuxtjs-main.netlify.app/tables/fixed-header',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Height Table',
      icon: 'archive-down-minimlistic-broken',
      to: 'https://materialpro-nuxtjs-main.netlify.app/tables/height',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Editable Table',
      icon: 'document-add-linear',
      to: 'https://materialpro-nuxtjs-main.netlify.app/tables/editable',
      chip: 'Pro',
      external: true
  },
  { header: 'Data Tables' },
  {
      title: 'Basic Table',
      icon: 'database-outline',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/basic',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Header Table',
      icon: 'folder-open-broken',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/headers',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Selection Table',
      icon: 'chart-square-broken',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/Selectable',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Sorting Table',
      icon: 'card-send-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/sorting',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Pagination Table',
      icon: 'tag-horizontal-broken',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/pagination',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Filtering Table',
      icon: 'tuning-square-2-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/filtering',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Grouping Table',
      icon: 'tuning-square-2-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/grouping',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Table Slots',
      icon: 'closet-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/slots',
      chip: 'Pro',
      external: true
  },
  {
      title: 'CRUD Table',
      icon: 'text-underline-cross-broken',
      to: 'https://materialpro-nuxtjs-main.netlify.app/datatables/crudtable',
      chip: 'Pro',
      external: true
  },
  { header: 'Auth' },
  {
      title: 'Login',
      icon: 'user-linear',
      to: '/auth/login'
  },
  {
      title: 'Register',
      icon: 'user-hand-up-linear',
      to: '/auth/register'
  },
  {
      title: 'Auth Pages',
      icon: 'shield-user-outline',
      to: '/auth',
      children: [
          {
              title: 'Side Login',
              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/login',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Boxed Login',
              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/login2',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Side Register',
              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/register',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Boxed Register',
              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/register2',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Side Forgot Password',
              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/forgot-password2',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Boxed Forgot Password',
              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/forgot-password',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Side Two Steps',
              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/two-step',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Boxed Two Steps',
              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/two-step2',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Error',

              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/404',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          },
          {
              title: 'Maintenance',

              to: 'https://materialpro-nuxtjs-main.netlify.app/auth/maintenance',
              chip: 'Pro',
              icon: PointIcon,
              external: true
          }
      ]
  },
  { header: 'Extra' },
  
  {
      title: 'Sample Page',
      icon: 'planet-3-line-duotone',
      to: '/sample-page'
  },
  {
      title: 'Solar Icons',
      icon: 'sticker-smile-circle-2-line-duotone',
      to: 'https://materialpro-nuxtjs-main.netlify.app/icons/solar',
      chip: 'Pro',
      external: true
  },
  {
      title: 'Tabler Icons',
      icon: 'sticker-smile-circle-2-line-duotone',
      to: '/icons',

  },
];

export default sidebarItem;
