import { QueryResolvers, CompanyPageLayout } from './type-defs.graphqls'
import { ResolverContext } from './apollo'

const companyPageLayout_1: CompanyPageLayout = {
  id: '1',
  infos: [
    {
      __typename: 'Product',
      id: '1',
      title: 'google chrome',
      url: 'https://www.google.com/intl/ja_jp/chrome/'
    },
    {
      __typename: 'Officer',
      id: '2',
      firstName: 'Yota',
      lastName: 'Anashige'
    },
    {
      __typename: 'QuestionAndAnswer',
      id: '3',
      question: 'あなたの会社の強みは？',
      answer: '粘り強いところです'
    },
  ]
}

const companyPageLayout_2: CompanyPageLayout = {
  id: '2',
  infos: [
    {
      __typename: 'QuestionAndAnswer',
      id: '3',
      question: 'あなたの会社の強みは？',
      answer: '粘り強いところです'
    },
    {
      __typename: 'Officer',
      id: '2',
      firstName: 'Yota',
      lastName: 'Anashige'
    },
    {
      __typename: 'Product',
      id: '1',
      title: 'google chrome',
      url: 'https://www.google.com/intl/ja_jp/chrome/'
    }
  ]
}

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return { id: String(1), name: 'John Smith', status: 'cached' }
  },
  companyPageLayout(_parent, _args, _context, _info) {
    const target = [companyPageLayout_1, companyPageLayout_2].find(e => e.id === _args.id)
    return target ? target : null
  },
}

const resolvers: { Query: QueryResolvers } = {
  Query
}

export default resolvers
