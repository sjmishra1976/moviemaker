import React, {Component} from 'react'

class API extends Component {
    state = {
        data: [],
      }
// Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
      const {data} = this.state
      

      const result = data.map((entry,index) => {
          return <li key={index}> {entry}</li>
      })

      return <h3>API Response From URL : <ul>{result}</ul> </h3> 
    }
}

export default API