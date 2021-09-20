import React from 'react'

const About = () => {
  const outer = {
    width: "515px",
  }

  const inner = {
    color: "#fff", 
    background: "#5b696d", 
    padding: "10px",
    lineHeight: "25px",
    fontSize: "18px"
  }

  const title={
    textAlign: "center",
    color: "black",
    backgroundColor: "#48a78f",
    borderBottom: "#1c1b1f 3px solid",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  }

  return (
    <div style={outer} className="window-bg">
      <h2 style={title} className="m-0">ABOUT</h2>
      <div style={inner}>
        <p>
          This is a small project, where the API from a game called Path of Exile is being "consumed" to display my game's account characters, equipment and items.
        </p>
        <p>
          In order to fetch the <a className="aboutLink" href="https://www.pathofexile.com/developer/docs/reference">API endpoints</a> in the backend, a game's session ID must be sent along as a cookie. This ID is obtained when you log in on the official <a className="aboutLink" href="https://www.pathofexile.com/">Path of Exile</a> website.
        </p>
        <p>
          On the far left side is the Characters window, which displays all the characters for my game account. When clicking on a character, this will fetch his current equipment and inventory and display them in their windows respectively. When hovered over any of those items, an info popover will appear, showing the item's name and stats.
        </p>
        <p>
          The Stash Tabs window represents a global stash for the entire account, which means every character has access to it. The way that you can organize your stash in-game, is by creating Tabs, which you can rename and colour. As you can see, there are a lot of tabs. This is because every 3 months, a new league drops in-game, and when the league ends, every tab that you had in that league (if you had any items in it), is transferred to the Standard league. The same thing happens with characters.
        </p>
        <p>
          By clicking on any of the Tabs, this will fetch the tab's items and also generate URL links that lead to the <a className="aboutLink" href="https://poe.ninja/">Poe Ninja</a> site, which is an economic and build overview site of the game. You may notice that not every item has a Poe Ninja link. That is because that particular item does not fall under any Poe Ninja category, for example, Currency, Fragments, Maps,...
        </p>
      
      </div>
    </div>
  )
}

export default About
