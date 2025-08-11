import React from 'react'

const Card = ({ props }: { props: { title: string, content: string } }) => {
  return (
    <React.Fragment>
      <div>
        {props.title}
      </div>
    </React.Fragment>
  )
}

const Program = () => {

  return (
    <React.Fragment>
        <section>
          <Card props={{ title: "Test", content: "test" }} />
        </section>
    </React.Fragment>
  )
}

export default Program