import React from "react"
import { RedButton } from "../components/button"
import Layout from "../components/Layout"
import style from "../components/conatct.module.css"

const contact = () => {
  return (
    <Layout>
      <div className={style.container}>
        <h4>Hello Contact me</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus
          minima quam corrupti expedita, recusandae maxime totam facere ipsam
          error velit repellendus doloribus autem nisi fugit necessitatibus a
          optio dolorem modi excepturi mollitia. Nostrum labore dolorem magnam,
          quas quia modi dignissimos, enim, tempora laudantium quaerat quidem?
          Voluptatibus fugiat accusamus quidem. Alias sunt animi blanditiis
          maiores odio similique omnis, laborum, cupiditate beatae repudiandae
          iusto ab consectetur provident quae ea enim natus? Iste veniam iure
          perferendis deserunt, expedita dolores reiciendis vero eveniet
          voluptatibus quod voluptate autem. A voluptate distinctio, labore
          magnam laborum doloribus? Impedit quia voluptatibus praesentium. Eius
          eos dolor provident minima?
        </p>
        <RedButton>Click Me</RedButton>
      </div>
    </Layout>
  )
}

export default contact
