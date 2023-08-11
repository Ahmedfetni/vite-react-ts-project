import React from "react"
import Heading from "./components/Heading"
import { Section } from "./components/Section";
import Counter from "./components/Counter"
import { useState, useEffect } from "react";
 interface User {
  id: number;
  username: string
 }


function App(){

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState<User[]|null>(null)


  useEffect(()=>{
    console.log("mounting");
    console.log("Users",users);

    return ()=>console.log("unmounting ")
  },[users])


return( <>
    <Heading title={"Hello"}/>
    <Section>This is my <section></section></Section>
    <Counter/>
  </>)
}

export default App