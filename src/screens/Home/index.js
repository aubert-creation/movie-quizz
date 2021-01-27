import { withRouter } from "react-router-dom"
import { useTranslation } from 'react-i18next'

import Card from 'components/Card'
import Button from 'components/Button'

import './styles.scss'

function Home(props) {
  const { t } = useTranslation('home')

  return (
    <div className="mq-container">
      <Card>
        <h1>{t('readyTitle')}</h1>
        <p>{t('subtitle1')}</p>
        <p>{t('subtitle2')}</p>
        <Button
          label={t('button')}
          onClick={() => props.history.push('play')}
        />
      </Card>
    </div>
  );
}

export default withRouter(Home)
