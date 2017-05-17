import RespectButton from './containers/RespectButton';

import translations from './translations.json';
import {loadTranslations} from 'coral-i18n/services/i18n';

Promise.all([loadTranslations(translations)]);

export default {
  slots: {
    commentActions: [RespectButton],
  }
};
