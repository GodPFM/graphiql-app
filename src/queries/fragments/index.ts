export const TYPE_REF = `fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}

`;

export const INPUT_VALUE = `fragment InputValue on __InputValue {
  name
  type {
    ...TypeRef
  }
  defaultValue
}

`;
