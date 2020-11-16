
 const Action =()=>   {
     const responseFacebook = (response) => {

        this.setState({
          accessToken: response.accessToken
        })
        this.props.history.push({pathname:'/ag-grid'});
    
    }
     const nullresponseFacebook = (response) => {

        this.setState({
          accessToken: !response.accessToken
        })
        this.props.history.push({pathname:'/'});
    
    }
  }
export default Action