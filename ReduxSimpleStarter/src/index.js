import React, {
	Component
} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//AIzaSyDo4lsna_fuIAMOwmZ1WS80U__ykcV_ZI0   "google api key"
//create a new component, this component should produce some html

/*const App = function(){
	return <div>Hi</div>;
}*/
const API_KEY = "AIzaSyDo4lsna_fuIAMOwmZ1WS80U__ykcV_ZI0";



/*const App = () =>{
	return (
		<div>
			<SearchBar />
		</div>
	);
}*/

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		/*YTSearch({
			key:API_KEY,
			term:'angular.js'
		},function(data){
			console.log(data);
			this.setState({videos:data});
		});*/
		this.videoSearch('angular');

	}

	videoSearch(term) {
		YTSearch({
				key: API_KEY,
				term: term
			},
			(videos) => {
				this.setState({
					videos: videos,
					selectedVideo: videos[0]
				});
			}
		);
	}

	render() {
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term)
		}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}


//take this component's generated html and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));