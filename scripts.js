const VIDEOS = {
  "col1": [{
    thumbnail: "./images/thumbnail-1.png",
    avatar: "./images/avatar-1.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-2.png",
    avatar: "./images/avatar-2.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-3.png",
    avatar: "./images/avatar-3.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-4.png",
    avatar: "./images/avatar-3.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  }],
  "col2": [{
    thumbnail: "./images/thumbnail-5.png",
    avatar: "./images/avatar-1.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-6.png",
    avatar: "./images/avatar-2.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-7.png",
    avatar: "./images/avatar-3.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-8.png",
    avatar: "./images/avatar-3.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  }],
  "col3": [{
    thumbnail: "./images/thumbnail-9.png",
    avatar: "./images/avatar-1.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-10.png",
    avatar: "./images/avatar-2.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-11.png",
    avatar: "./images/avatar-3.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  },
  {
    thumbnail: "./images/thumbnail-12.png",
    avatar: "./images/avatar-3.png",
    textareaTitle: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    verified: true,
    textareaChannelName: "Coke Studio Bangla",
    textareaViewCount: "1.5 M views",
    textareaPublicationDate: "2 days ago"
  }]
};

let htmlVideos = `
  ${VIDEOS.col1.map(video => {
    return `
      <div class="video">
        <div class="video__thumbnail">
          <img src="${video.thumbnail}" alt="" srcset="">
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

  let htmlVideos2 = `
  ${VIDEOS.col2.map(video => {
    return `
      <div class="video">
        <div class="video__thumbnail">
          <img src="${video.thumbnail}" alt="" srcset="">
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

  let htmlVideos3 = `
  ${VIDEOS.col3.map(video => {
    return `
      <div class="video">
        <div class="video__thumbnail">
          <img src="${video.thumbnail}" alt="" srcset="">
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

  document.querySelector('#video-list').innerHTML = htmlVideos;
  document.querySelector('#video-list-2').innerHTML = htmlVideos2;
  document.querySelector('#video-list-3').innerHTML = htmlVideos3;