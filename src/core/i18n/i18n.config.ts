import I18n from 'react-native-i18n';
import { I18nManager } from 'react-native';
import { en } from './lang/en';
import { tr } from './lang/tr';
import { DotNotation, TranslationKeys } from './types';

interface Translations {
    [key: string]: any;
}

const translations: Translations = {
    en: en,
    tr: tr,
};

I18n.translations = translations;
I18n.fallbacks = true;
I18n.defaultLocale = 'en';

export type TranslationKey = DotNotation<TranslationKeys>;

export const initLocalization = (): void => {
    const deviceLocale = I18n.locale || I18n.defaultLocale;
    const isRTL = ['ar', 'he', 'fa'].includes(deviceLocale.split('-')[0]);
    I18nManager.forceRTL(isRTL);
    I18n.locale = deviceLocale;
};

export const translate = (key: TranslationKey, config?: Record<string, any>): string => {
    const translation = I18n.t(key, config);
    return translation.includes('missing') ? key : translation;
};
