import { QueryResolvers, Resolvers, CompanyInfo, Product, Officer, QuestionAndAnswer } from './type-defs.graphqls'

const companyInfo_1: CompanyInfo = {
  id: '1',
  title: 'google chrome',
  url: 'https://www.google.com/intl/ja_jp/chrome/'
}

const companyInfo_2: CompanyInfo = {
  id: '2',
  firstName: 'Yota',
  lastName: 'Anashige'
}

const companyInfo_3: CompanyInfo = {
  id: '3',
  question: 'あなたの会社の強みは？',
  answer: '粘り強いところです'
}

const companyPageLayout_1 = {
  id: '1',
  companyInfos: [companyInfo_1, companyInfo_2, companyInfo_3]
}

const companyPageLayout_2 = {
  id: '2',
  companyInfos: [companyInfo_3, companyInfo_1, companyInfo_2]
}

const isProduct = (companyInfo: any) =>
  companyInfo.title !== undefined && companyInfo.url !== undefined

const isOfficer = (companyInfo: any) =>
  companyInfo.firstName !== undefined && companyInfo.lastName !== undefined

const isQuestionAndAnswer = (companyInfo: any) =>
  companyInfo.question !== undefined && companyInfo.answer !== undefined

const queryResolvers: QueryResolvers = {
  viewer(_parent, _args, _context, _info) {
    return { id: String(1), name: 'John Smith', status: 'cached' }
  },
  companyPageLayout(_parent, _args, _context, _info) {
    const target = [companyPageLayout_1, companyPageLayout_2].find(e => e.id === _args.id)

    if (!target) {
      return null
    }

    const companyInfos = target.companyInfos

    const mappedCompanyInfos = companyInfos.map(e => {
      if (isProduct(e)) {
        return { __typename: 'Product', ...e } as Product
      }

      if (isOfficer(e)) {
        return { __typename: 'Officer', ...e } as Officer
      }

      if (isQuestionAndAnswer(e)) {
        return { __typename: 'QuestionAndAnswer', ...e } as QuestionAndAnswer
      }

      return e
    })

    return { id: target.id, companyInfos: mappedCompanyInfos }
  }
}

const resolvers: Resolvers = {
  Query: queryResolvers
}

export default resolvers
