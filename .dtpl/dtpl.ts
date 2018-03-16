import * as _ from 'dot-template-types'
import * as path from 'path'

export default function(source: _.Source): _.IDtplConfig {
  return {
    templates: [
      {
        name: './component',

        // matches can also be a function which can access `source`
        matches: '**/workflow-1/*',

        // localData should be object
        localData: (() => {
          // you can access `source` here
          return {
            welcome: 'Hi there, I\'m dot-template'
          }
        })()
      },

      {
        name: './wf-2.ts.dtpl',
        matches: '**/workflow-2/*.ts',

        // inject content to file: workflow-2/index.ts
        inject: () => {
          let indexTs = path.join(source.basicData.rootPath, 'workflow-2', 'index.ts')
          return [
            {
              file: indexTs,
              data: {files: `export * from './${source.basicData.rawModuleName}'`},
              tags: 'loose',
              append: true
            }
          ]
        }
      }
    ],

    globalData: {}
  }
}
