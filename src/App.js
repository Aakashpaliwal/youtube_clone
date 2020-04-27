import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./component/SearchBar";
import VideoDetail from "./component/VideoDetail";
import VideoList from "./component/VideoList";
class App extends Component {
  state = {
    videos: [],
    selectVideo: null,
  };
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAOeNStAd9yA_FN5Tn5efF10xS3GMPca4w",
        q: searchTerm,
      },
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectVideo: response.data.items[0],
    });
  };

  render() {
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={this.state.selectVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.state.selectVideo}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
