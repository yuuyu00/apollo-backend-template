# Apollo Server + Prisma による GraphQL バックエンドのテンプレート

1. `yarn`
2. `schema.prisma` を編集して Prisma のスキーマを書く
3. `schema/` 以下に GraphQL スキーマを書く
4. `yarn generate` で Prisma スキーマからの型と GraphQL スキーマからの型を生成する
5. `resolvers` 以下を編集し、リゾルバーを書く
6. `yarn start` でサーバー起動
