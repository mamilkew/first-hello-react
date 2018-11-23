import React from 'react'

class HelloApp extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          counter: 0
        }

        this.handleClick = this.handleClick.bind(this)
      }

       handleClick() {
          this.setState({
              counter: this.state.counter + 1
          })
        }


    render() {
//        return <h1>MILKK! React</h1>
//        return ( // must have <div></div> for Props
//          <div>
//            <h1>Ahoy! React</h1>
//            <p>{this.props.message}</p>
//          </div>
//        )
        //for Props, you can use this
        return (
          <React.Fragment>
            <h1>Ahoy! React</h1>
            <p>{this.props.message}</p>
            {/* State */}
            <button onClick={this.handleClick}>Click me!</button>
            <p>Total click : {this.state.counter}</p>
          </React.Fragment>
        )
    }
}

export default HelloApp