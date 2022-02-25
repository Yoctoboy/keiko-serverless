import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { IntlProvider } from 'react-intl';

import { flattenMessages } from 'services/i18n';
import { muiTheme } from 'theme';
import { frFRMessages } from 'translations';

import AppRoutes from './AppRoutes';

const intlMessages = flattenMessages(frFRMessages);

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={muiTheme}>
      <IntlProvider locale="fr-FR" messages={intlMessages}>
        <CssBaseline />
        <AppRoutes />
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
