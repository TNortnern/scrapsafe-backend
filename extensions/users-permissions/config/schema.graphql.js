module.exports = {
  definition: `
    type AuthPayload {
        jwt: String
        user: UsersPermissionsMe
    }
    extend type UsersPermissionsMe {
        name: String
        entries: [Entry]
    }
    extend input UsersPermissionsRegisterInput {
        name: String!
    }
  `,
  query: ``,
  mutation: `registerUser(input: UsersPermissionsRegisterInput!): AuthPayload`,
  type: {},
  resolver: {
    Query: {},
    Mutation: {
      registerUser: {
        description: "Registers user",
        resolver: "plugins::users-permissions.auth.register",
      },
    },
  },
};
