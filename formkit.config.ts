import { fr } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import { genesisIcons } from '@formkit/icons'

export default defaultConfig({
  locales: { fr },
  locale: 'fr',
  icons: {
    ...genesisIcons,
  },
})
