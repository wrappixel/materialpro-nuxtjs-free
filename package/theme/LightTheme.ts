import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const BLUE_THEME: ThemeTypes = {
    name: 'BLUE_THEME',
    dark: false,
    variables: {
        'border-color': '#ebf1f6',
        'border-opacity': 1,
    },
    colors: {
        primary: '#1B84FF',
        secondary: '#43CED7',
        info: '#2CABE3',
        success: '#2CD07E',
        accent: '#FFAB91',
        warning: '#F6C000',
        error: '#F8285A',
        purple:'#725AF2',
        indigo:'#6610f2',
        lightprimary: '#EDF5FD',
        lightsecondary: '#F2FCFC',
        lightsuccess: '#EDFDF2',
        lighterror: '#FFF0F4',
        lightwarning: '#FFFCF0',
        lightinfo: '#E4F5FF',
        textPrimary: '#3A4752',
        textSecondary: '#768B9E',
        borderColor: '#ebf1f6',
        inputBorder: '#DFE5EF',
        containerBg: '#ffffff',
        background: '#eef5f9',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        'on-surface-variant': '#fff',
        grey100: '#F2F6FA',
        grey200: '#EAEFF4'
    }
};

export { BLUE_THEME};
