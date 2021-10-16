# MyWorkspace

This is a sample angular library.

## How to use

Edit `app.module.ts` and import
`
  MyLibModule.forRoot({
  protocol: 'https',
  apiBaseUrl: 'dog.ceo',
  root: 'api'
  })
`

Edit `app.component.ts` and extend `MyLibComponent` and edited templateUrls in template:
`<lib-my-lib></lib-my-lib>`
