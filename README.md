# Learn Next.js.

- Custom Page Extensions

  - pages ディレクトリの配下にコンポーネントを置くことが出来る
  - そのページでしか使わないロジック、コンポーネントを配置することが出来る
  - storybook, graphql において便利

- ページごとの Layout 共通化
  - 複数のレイアウトが必要な場合は getLayout、ページにプロパティを追加して、レイアウトの React コンポーネントを返すことができる。これにより、ページごとにレイアウトを定義可能。
  - 認証が必要なページ、不必要なページかを分けることが可能