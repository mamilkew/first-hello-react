import React from 'react'

class HelloApp extends React.Component {
    render() {
//        return <h1>MILKK! React</h1>
        return ( // must have <div></div>
          <div>
            <h1>Ahoy! React</h1>
            <p>{this.props.message}</p>
          </div>
        )
        // or you can use this
//        return (
//          <React.Fragment>
//            <h1>Ahoy! React</h1>
//            <p>{this.props.message}</p>
//          </React.Fragment>
//        )
    }
}

export default HelloApp