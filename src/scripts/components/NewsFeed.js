const React = require('react')
import News from './News'

const NewsFeed = React.createClass({
  // 
  render: function() {
    return(
      <div className="news-feed">
        <h2>{this.props.companyName.replace(/\b[a-z]/g,function(f){
                return f.toUpperCase()
              })} News Feed
        </h2>
        <News companyName={this.props.companyName} />
      </div>
    )
  }
})


export default NewsFeed
