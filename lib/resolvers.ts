import { QueryResolvers, CompanyPageLayout, Resolvers, CompanyInfo, CompanyInfoResolvers } from './type-defs.graphqls'

const companyInfo_1: CompanyInfo = {
  id: '1',
  title: 'google chrome',
  url: 'https://www.google.com/intl/ja_jp/chrome/',
  __typename: 'Product'
}

const companyInfo_2: CompanyInfo = {
  id: '2',
  firstName: 'Yota',
  lastName: 'Anashige',
  __typename: 'Officer'
}

const companyInfo_3: CompanyInfo = {
  id: '3',
  question: 'あなたの会社の強みは？',
  answer: '粘り強いところです',
  __typename: 'QuestionAndAnswer'
}

const companyPageLayout_1: CompanyPageLayout = {
  id: '1',
  companyInfos: [companyInfo_1, companyInfo_2, companyInfo_3]
}

const companyPageLayout_2: CompanyPageLayout = {
  id: '2',
  companyInfos: [companyInfo_3, companyInfo_1, companyInfo_2]
}

const queryResolvers: QueryResolvers = {
  viewer(_parent, _args, _context, _info) {
    return { id: String(1), name: 'John Smith', status: 'cached' }
  },
  companyPageLayout(_parent, _args, _context, _info) {
    const target = [companyPageLayout_1, companyPageLayout_2].find(e => e.id === _args.id)
    return target ? target : null
  },
}

const companyInfoResolvers: CompanyInfoResolvers = {
  __resolveType(obj) {
    return obj.__typename || null
  }
}

const resolvers: Resolvers = {
  Query: queryResolvers,
  CompanyInfo: companyInfoResolvers
}

export default resolvers
