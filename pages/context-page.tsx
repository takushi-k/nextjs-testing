import Layout from '../components/Layout'
import { StateProvider } from '../context/stateProvider'
import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'

const ContextPage = () => {
  return (
    <Layout title="Context">
      <p className="text-4xl mb-10">context page</p>
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    </Layout>
  )
}

export default ContextPage
