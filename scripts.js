const videos = [
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/1-thumbnail.png",
    avatar: "./images/1-avatar.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  }
];

// console.log(videos);
// let items = ['maca','laranga', 'banana'];
// let html = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
// console.log(html);

let html = `
  ${videos.map(video => {
    return `
      <div class="video">
        <div class="video__thumbnail">
          <img src="./images/Thumbnail.png" alt="" srcset="">
        </div>
        <div class="video__information">
          <div class="video__avatar">
            <img src="${video.avatar}" alt="" srcset="">
          </div>      
          <div class="video__details">
            <div class="video__details--title">${video.textareaTitle}</div>
            <div class="video__details--channel">
              <div class="video__details--channel-name">${video.textareaChannelName}</div>
              <div class="video__details--channel-icon-verified"><img src="images/icon-verified.svg" alt=""></div>
            </div>
            <div class="video__details--views">
              <div class="video__details--views-video">1.5 M views</div>
              <div class="video__details--views-publication-date">&bull; 2 days ago</div>
            </div>
          </div>
        </div>
      </div>`
  }).join('')}`;

  document.querySelector('#video-list').innerHTML = html;