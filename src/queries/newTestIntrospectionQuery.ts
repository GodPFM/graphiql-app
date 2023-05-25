export const getIntrospectionQuery = () => /* GraphQL */ `
  query IntrospectionQuery {
    __schema {
      queryType {
        name
        ...TypeRef
        fields {
          name
          type {
            ...TypeRef
          }
          args {
            ...InputValue
          }
        }
      }
      mutationType {
        name
        ...TypeRef
        fields {
          name
          type {
            ...TypeRef
          }
          args {
            ...InputValue
          }
        }
      }
      subscriptionType {
        name
        ...TypeRef
        fields {
          name
          type {
            ...TypeRef
          }
          args {
            ...InputValue
          }
        }
      }
      types {
        ...FullType
      }
      directives {
        name
        description
        locations
        args {
          ...InputValue
        }
      }
    }
  }

  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }

  fragment TypeRef on __Type {
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