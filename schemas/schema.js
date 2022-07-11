// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import article from './documents/article' // import the file I have just made
import category from './documents/category'
import singletonAboutMe from './documents/singletonAboutMe'
import blogPost from './objects/blogPost'
import quote from './objects/quote'
import illustration from './objects/illustration'
import media from './objects/media'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article, // add my document to this array
    category,
    singletonAboutMe,
    blogPost,
    quote,
    illustration,
    media
  ]),
})
