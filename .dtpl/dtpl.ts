import * as _ from 'dot-template-types'

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
      }
    ],

    globalData: {}
  }
}
