import _ from 'lodash'

if (true) {
  import (/* webpackChunkName: "main1" */'./main1').then(() => {
    console.log('haha')
  })
}

console.log(_.uniq([1,2,3,1]))
