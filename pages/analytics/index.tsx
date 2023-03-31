import Analytics from '@/screens/analytics/Analytics'
import Meta from '@/utils/Meta'

const AnalyticsPage = () => {
  return (
    <>
      <Meta
        title='Analytics'
        description='Todos of your completed and deleted tasks and their statistics'
      />
      <Analytics />
    </>
  )
}

export default AnalyticsPage
