import { useCompanyPageLayoutQuery, CompanyPageLayoutDocument } from '../lib/companyPageLayout.graphql'
import { initializeApollo } from '../lib/apollo'

const Index = () => {
  const { data } = useCompanyPageLayoutQuery()
  console.log(data)

  return (
    <div>
      test
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CompanyPageLayoutDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
