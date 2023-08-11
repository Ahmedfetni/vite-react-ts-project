import React from "react"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"

function App(){
return( <>
    <Heading title={"Hello"}/>
    <Section>This is my <section></section></Section>
    <Counter/>
  </>)
}

export default App