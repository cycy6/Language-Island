const GOOGLE_API_KEY = 'AIzaSyCjxUBAFnFk_oI2MU6ecjvLPvHOmXwO2lI';
const googleAPIURL = 'https://www.googleapis.com/youtube/v3';

const ITALIAN_PLAYLIST_ID = 'PLHI2TAm-NyNPpFJriRvVbxVoJ4jksDUUH';
const SPANISH_PLAYLIST_ID = 'PLTpetkN815Qyuc2RbC1kxxMQvxjQ3RnYG';
const CHINESE_PLAYLIST_ID = 'PLWs_MdsPmAFLz8nGhJSuV3XVhHNXCLudc';
const FRENCH_PLAYLIST_ID = 'PLTpetkN815QzNhpY9agg9iXOnORsjC-2A';

const videoURLs = [];

const card = `
<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
    content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`;


document.addEventListener('DOMContentLoaded', (event) => {
  const images = document.getElementsByClassName('card-img-top');
  generateCards();
});

function generateCards() {

  var x = fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${GOOGLE_API_KEY}&maxResults=50&playlistId=${SPANISH_PLAYLIST_ID}`);
  console.log(x);
  x.then((res) => res.json()).then((result) => {
    console.log(result);
    for (let i of result.items) {
      let title = i.snippet.title;
      let thumbnailURL = i.snippet.thumbnails.default.url;
      let videoId = i.snippet.resourceId.videoId;
      let fullVideoURL = `https://youtube.com/watch?v=${videoId}`;

      videoURLs.push(fullVideoURL);
      console.log(thumbnailURL);
      let card = `
    <div class="card" style="width: 18rem;">
    <img src="${thumbnailURL}" class="card-img-top" alt="${title}">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">${title}</p>
      <a href="#" class="btn btn-primary">Play Video</a>
    </div>
    </div>
    `;

      document.getElementById('video-row').innerHTML += card;
    }
  });
}
