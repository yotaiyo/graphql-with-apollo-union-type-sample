import { useCompanyPageLayoutQuery, CompanyPageLayoutDocument } from '../lib/companyPageLayout.graphql'
import { initializeApollo } from '../lib/apollo'

const Index = () => {
  const { data, loading } = useCompanyPageLayoutQuery()
  const companyPageLayout = data ? data.companyPageLayout : null
  const companyInfos = companyPageLayout ? companyPageLayout.companyInfos : []

  if (loading) {
    return <div>loading</div>
  }

  return (
    <div>
      {companyInfos.map(e => {
        if (e.__typename === 'Product') {
          return (
            <div key={e.id}>
              <div>This is Product!</div>
              <ul>
                <li>{e.title}</li>
                <li>{e.url}</li>
              </ul>
            </div>)
        }
        if (e.__typename === 'Officer') {
          return (
            <div key={e.id}>
              <div>This is Officer!</div>
              <ul>
                <li>{e.firstName}</li>
                <li>{e.lastName}</li>
              </ul>
            </div>)
        }
        if (e.__typename === 'QuestionAndAnswer') {
          return (
            <div key={e.id}>
              <div>This is QuestionAndAnswer!</div>
              <ul>
                <li>{e.question}</li>
                <li>{e.answer}</li>
              </ul>
            </div>)
        }
      })}
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
