/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const data = await graphql(``)
// }

// You can delete this file if you're not using it
const axios = require("axios")
const crypto = require("crypto")

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators

  // fetch raw data from the randomuser api
  const fetchMainMenu = () => axios.get(`http://127.0.0.1:5000/mainmenus`)
  // await for results

  const res = await fetchMainMenu()
  //console.log(res.data['questions'])

  // map into these results and create nodes
  res.data["mainmenus"].map((menu, i) => {
    // Create your node object
    const menuNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `mainmenu`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl

      title: menu.title,
      link: menu.link,
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(menuNode))
      .digest(`hex`)
    // add it to menuNode
    menuNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(menuNode)
  })
  // fetch raw data from the randomuser api
  const fetchCardData = () => axios.get(`http://127.0.0.1:5000/showcards`)
  // await for results

  const rese = await fetchCardData()
  //console.log(res.data['questions'])

  // map into these results and create nodes
  rese.data["carddata"].map((card, i) => {
    // Create your node object
    const cardNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `carddata`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl

      name: card.name,
      alt: card.alt,
      image: card.image,
      image_type:card.imagetype,
      button: card.button,
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(cardNode))
      .digest(`hex`)
    // add it to cardNode
    cardNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(cardNode)
  })

  return
}
