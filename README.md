# graphql-with-apollo-union-type-sample

## sample query
```
query {
  companyPageLayout(id: 1) {
    id
    companyInfos {
      __typename
      ... on Product {
        id
        title
        url
      }
      ... on Officer {
        id
        firstName
        lastName
      }
      ... on QuestionAndAnswer{
        id
        question
        answer
      }
    }
  }
}
```
